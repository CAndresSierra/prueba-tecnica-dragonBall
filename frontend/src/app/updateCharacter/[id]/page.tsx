"use client";

import Loading from "@/app/loading";
import { ApiCharacterUrl } from "@/config/envs";
import { IChracter } from "@/interfaces/ICharacter";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IUpdateCharacter } from "@/interfaces/dtos/IUpdateCharacter";
import Swal from "sweetalert2";
import { Spinner } from "@nextui-org/react";

const UpdateCharacter: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [characterDta, setCharacterDta] = useState<IChracter>();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [characterUpdated, setCharacterUpdated] = useState<
    Partial<IUpdateCharacter>
  >({});

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${ApiCharacterUrl}/${params.id}`, {
          method: "GET",
        });
        const data: IChracter = await res.json();
        setCharacterDta(data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDta();
  }, []);

  if (loading) {
    return (
      <div className="flex container items-start justify-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCharacterUpdated({
      ...characterUpdated,
      [name]: value,
    });
  };

  const handleOnChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setCharacterUpdated({
      ...characterUpdated,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();

    const anyDta = Object.values(characterUpdated).every(
      (value) => value === ""
    );
    if (anyDta) {
      return Swal.fire({
        icon: "error",
        title: "Ooops....",
        text: "Debes escribir algun valor a actualizar",
      });
    }

    try {
      setLoadingButton(true);
      const res = await fetch(`${ApiCharacterUrl}/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characterUpdated),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      await Swal.fire({
        title: "¡Personaje actualizado con exito!",
        icon: "success",
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Ooops....",
        text: `${error.message}`,
      });
    } finally {
      setLoadingButton(false);
    }
  };

  return (
    <div className="w-screen  flex justify-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Actualizar Personaje</CardTitle>
          <CardDescription>Actualiza el personaje que quieras</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Nombre</label>
                <Input
                  id="name"
                  defaultValue={characterDta?.name}
                  name="name"
                  onChange={handleOnChange}
                />
                <label htmlFor="ki">Ki</label>
                <Input
                  id="ki"
                  defaultValue={characterDta?.ki}
                  name="ki"
                  onChange={handleOnChange}
                />
                <label htmlFor="maxki">Max Ki</label>
                <Input
                  id="maxki"
                  defaultValue={characterDta?.maxKi}
                  name="maxKi"
                  onChange={handleOnChange}
                />
                <label htmlFor="race">Raza</label>
                <Input
                  id="race"
                  defaultValue={characterDta?.race}
                  name="race"
                  onChange={handleOnChange}
                />
                <label htmlFor="gender">Genero</label>
                <Input
                  id="gender"
                  defaultValue={characterDta?.gender}
                  name="gender"
                  onChange={handleOnChange}
                />
                <label htmlFor="description">Descripcion</label>
                <Textarea
                  id="description"
                  defaultValue={characterDta?.description}
                  name="description"
                  onChange={handleOnChangeTextArea}
                />
                <label htmlFor="image">Imagen</label>
                <Input
                  id="image"
                  defaultValue={characterDta?.image}
                  name="image"
                  onChange={handleOnChange}
                />
                <label htmlFor="affiliation">Afiliacion</label>
                <Input
                  id="affiliation"
                  defaultValue={characterDta?.affiliation}
                  name="affliliation"
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5"></div>
            </div>
            {loadingButton ? (
              <button
                type="submit"
                className="w-full p-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-500  rounded-full font-bold text-gray-950 border-[4px] border-gray-950 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
              >
                <Spinner color="warning" />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full p-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-500  rounded-full font-bold text-gray-950 border-[4px] border-gray-950 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
              >
                Actualizar
              </button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateCharacter;
