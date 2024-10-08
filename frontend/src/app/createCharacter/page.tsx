"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CreateTransformations from "@/components/Transfomations/CreateTransformations";
import { ChangeEvent, useState } from "react";
import { ICharacterDto } from "@/interfaces/dtos/ICharacterDto";
import { ITransformationDto } from "@/interfaces/dtos/ITransformationDto";
import { ApiCharacterUrl } from "@/config/envs";
import Swal from "sweetalert2";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const CreateCharacter: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [characterDta, setCharacterDta] = useState<Partial<ICharacterDto>>({});
  const [planetExist, setPlanetExist] = useState<boolean>();

  const onChangeSelect2 = (value: string) => {
    if (value === "si") {
      setPlanetExist(true);
    } else {
      setPlanetExist(false);
    }
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCharacterDta({
      ...characterDta,
      [name]: value,
    });
  };

  const handleOnChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setCharacterDta({
      ...characterDta,
      [name]: value,
    });
  };

  const handleOnChangeOriginPlanet = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCharacterDta({
      ...characterDta,
      originPlanet: {
        ...characterDta.originPlanet,
        [name]: value,
      },
    });
  };

  const handleTransformationsUpdate = (
    transformations: ITransformationDto[]
  ) => {
    setCharacterDta((prevData) => ({
      ...prevData,
      transformations: transformations,
    }));
  };

  const onChangeSelect1 = (value: string) => {
    setCharacterDta({
      ...characterDta,
      originPlanet: {
        ...characterDta.originPlanet,
        isDestroyed: value === "si",
      },
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(ApiCharacterUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characterDta),
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      await Swal.fire({
        title: "¡Personaje creado con exito!",
        icon: "success",
      });
      router.push("/");
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Ooops....",
        text: "Completa todos los campos",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-5 my-9 flex items-center justify-center ">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col gap-5  rounded-xl px-5 py-5"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-orange-500">
            Info del personaje
          </h1>
          <div className="flex flex-col gap-1">
            <Input
              type="text"
              placeholder="Nombre"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="name"
              onChange={handleOnChange}
            />

            <Input
              type="text"
              placeholder="ki"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="ki"
              onChange={handleOnChange}
            />

            <Input
              type="text"
              placeholder="Max Ki"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="maxKi"
              onChange={handleOnChange}
            />

            <Input
              type="text"
              placeholder="Raza"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="race"
              onChange={handleOnChange}
            />

            <Input
              type="text"
              placeholder="Genero"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="gender"
              onChange={handleOnChange}
            />

            <Textarea
              placeholder="Descripcion"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="description"
              onChange={handleOnChangeTextArea}
            />

            <Input
              type="text"
              placeholder="Imagen URL"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="image"
              onChange={handleOnChange}
            />

            <Input
              type="text"
              placeholder="Afiliacion: example z fighter"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="affiliation"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-orange-500">
            Info del planeta de origen
          </h1>
          <div className="flex flex-col gap-1">
            <Select onValueChange={onChangeSelect2}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="¿Deseas utilizar un planeta ya existente?" />
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
            {planetExist ? (
              <>
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                  name="name"
                  onChange={handleOnChangeOriginPlanet}
                />
              </>
            ) : (
              <>
                <Input
                  type="text"
                  placeholder="Nombre"
                  className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                  name="name"
                  onChange={handleOnChangeOriginPlanet}
                />

                <Select onValueChange={onChangeSelect1}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="¿Ha sido Destruido?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>¿Ha sido destruido?</SelectLabel>
                      <SelectItem value="si">Si</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Descripcion"
                  className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                  name="description"
                  onChange={handleOnChangeOriginPlanet}
                />

                <Input
                  type="text"
                  placeholder="Imagen Url"
                  className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                  name="image"
                  onChange={handleOnChangeOriginPlanet}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-orange-500">
            Info de sus transformaciones
          </h1>
          <div className="flex flex-col gap-1">
            <CreateTransformations
              onUpdateTransformations={handleTransformationsUpdate}
            />
          </div>
        </div>

        {loading ? (
          <button
            type="submit"
            className=" p-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-500  rounded-full font-bold text-gray-950 border-[4px] border-gray-950 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
          >
            <Spinner color="warning" />
          </button>
        ) : (
          <button
            type="submit"
            className=" p-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-500  rounded-full font-bold text-gray-950 border-[4px] border-gray-950 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
          >
            Crear
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateCharacter;
