"use client";

import Loading from "@/app/loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ApiTransfUrl } from "@/config/envs";
import { IUpdateTransf } from "@/interfaces/dtos/IUpdateTransf";
import { ITransformation } from "@/interfaces/ITransfomation";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateTransf: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [transfDta, setTransDta] = useState<ITransformation>();
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [transfUpdated, setTransfUpdated] = useState<Partial<IUpdateTransf>>(
    {}
  );

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${ApiTransfUrl}/${params.id}`, {
          method: "GET",
        });
        const data: ITransformation = await res.json();
        setTransDta(data);
      } catch (error: any) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDta();
  }, []);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTransfUpdated({
      ...transfUpdated,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();

    const anyDta = Object.values(transfUpdated).every((value) => value === "");
    if (anyDta) {
      return Swal.fire({
        icon: "error",
        title: "Ooops....",
        text: "Debes escribir algun valor a actualizar",
      });
    }

    try {
      setLoadingButton(true);
      const res = await fetch(`${ApiTransfUrl}/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transfUpdated),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      await Swal.fire({
        title: "¡Transformacion actualizado con exito!",
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
  if (loading) {
    return (
      <div className="flex container items-start justify-center h-screen w-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-screen  flex justify-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Actualizar Transformacion</CardTitle>
          <CardDescription>
            Actualiza la transformacion que quieras
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Nombre</label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={transfDta?.name}
                  onChange={handleOnChange}
                />
                <label htmlFor="ki">Ki</label>
                <Input
                  id="ki"
                  name="ki"
                  defaultValue={transfDta?.ki}
                  onChange={handleOnChange}
                />
                <label htmlFor="image">Imagen</label>
                <Input
                  id="image"
                  name="image"
                  defaultValue={transfDta?.image}
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

export default UpdateTransf;
