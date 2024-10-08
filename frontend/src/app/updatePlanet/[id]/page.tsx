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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ApiPlanetsUrl } from "@/config/envs";
import { IUpdatePlanet } from "@/interfaces/dtos/IUpdatePlanet";
import { IOriginPlanet } from "@/interfaces/IOriginPlanet";
import { Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdatePlanet: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [planetDta, setPlanetDta] = useState<IOriginPlanet>();
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [planetUpdated, setPlanetUpdated] = useState<Partial<IUpdatePlanet>>(
    {}
  );

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${ApiPlanetsUrl}/${params.id}`, {
          method: "GET",
        });
        const data: IOriginPlanet = await res.json();
        setPlanetDta(data);
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

    setPlanetUpdated({
      ...planetUpdated,
      [name]: value,
    });
  };

  const handleOnChangeSelect = (value: string) => {
    if (value === "si") {
      setPlanetUpdated({
        ...planetUpdated,
        isDestroyed: true,
      });
    } else {
      setPlanetUpdated({
        ...planetUpdated,
        isDestroyed: false,
      });
    }
  };

  const handleOnChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setPlanetUpdated({
      ...planetUpdated,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();

    const anyDta = Object.values(planetUpdated).every((value) => value === "");
    if (anyDta) {
      return Swal.fire({
        icon: "error",
        title: "Ooops....",
        text: "Debes escribir algun valor a actualizar",
      });
    }

    try {
      setLoadingButton(true);
      const res = await fetch(`${ApiPlanetsUrl}/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(planetUpdated),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      await Swal.fire({
        title: "¡Planeta actualizado con exito!",
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
          <CardTitle>Actualizar Planeta</CardTitle>
          <CardDescription>Actualiza el planeta que quieras</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name">Nombre</label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={planetDta?.name}
                  onChange={handleOnChange}
                />
                <label htmlFor="description">Description</label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={planetDta?.description}
                  onChange={handleOnChangeTextArea}
                />
                <label>¿Ha sido destruido?</label>
                <Select
                  defaultValue={`${planetDta?.isDestroyed ? "si" : "no"}`}
                  onValueChange={handleOnChangeSelect}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="¿El planeta existe?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>¿Existe?</SelectLabel>
                      {["si", "no"].map((value: string, index) => {
                        return (
                          <SelectItem key={index} value={value}>
                            {value}
                          </SelectItem>
                        );
                      })}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <label htmlFor="image">Imagen</label>
                <Input
                  id="image"
                  name="image"
                  defaultValue={planetDta?.image}
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

export default UpdatePlanet;
