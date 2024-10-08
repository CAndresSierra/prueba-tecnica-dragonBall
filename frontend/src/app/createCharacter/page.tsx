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

const CreateCharacter: React.FC = () => {
  const [characterDta, setCharacterDta] = useState<ICharacterDto>({
    name: "",
    ki: "",
    maxKi: "",
    race: "",
    gender: "",
    description: "",
    image: "",
    affiliation: "",
    originPlanet: {
      name: "",
      isDestroyed: false,
      description: "",
      image: "",
    },
    transformations: [],
  });

  const [errors, setErrors] = useState<Partial<ICharacterDto>>({
    name: "",
    ki: "",
    maxKi: "",
    race: "",
    gender: "",
    description: "",
    image: "",
    affiliation: "",
    originPlanet: {
      name: "",
      description: "",
      image: "",
    },
    transformations: [],
  });

  const notEmptyRegex = /^.+$/; // Al menos un carácter

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

  const onChangeSelect = (value: string) => {
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
    const newErrors = {
      ...errors,
      name: !notEmptyRegex.test(characterDta.name)
        ? "El nombre no puede estar vacío"
        : "",
      ki: !notEmptyRegex.test(characterDta.ki)
        ? "El ki no puede estar vacío"
        : "",
      maxKi: !notEmptyRegex.test(characterDta.maxKi)
        ? "El Max Ki no puede estar vacío"
        : "",
      race: !notEmptyRegex.test(characterDta.race)
        ? "La raza no puede estar vacía"
        : "",
      gender: !notEmptyRegex.test(characterDta.gender)
        ? "El género no puede estar vacío"
        : "",
      description: !notEmptyRegex.test(characterDta.description)
        ? "La descripción no puede estar vacía"
        : "",
      image: !notEmptyRegex.test(characterDta.image)
        ? "La URL de la imagen no puede estar vacía"
        : "",
      affiliation: !notEmptyRegex.test(characterDta.affiliation)
        ? "La afiliación no puede estar vacía"
        : "",
      originPlanet: {
        name: !notEmptyRegex.test(characterDta.originPlanet.name)
          ? "El nombre del planeta no puede estar vacío"
          : "",
        description: !notEmptyRegex.test(characterDta.originPlanet.description)
          ? "La descripción del planeta no puede estar vacía"
          : "",
        image: !notEmptyRegex.test(characterDta.originPlanet.image)
          ? "La URL de la imagen del planeta no puede estar vacía"
          : "",
      },
    };

    setErrors(newErrors);

    const hasErrors =
      Object.values(newErrors).some(
        (error) => typeof error === "string" && error
      ) || Object.values(newErrors.originPlanet).some((error) => error);

    if (!hasErrors) {
      try {
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
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Ooops....",
          text: `${error.message}`,
        });
      }
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
            {errors.name && <p className="text-red-500">{errors.name}</p>}
            <Input
              type="text"
              placeholder="ki"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="ki"
              onChange={handleOnChange}
            />
            {errors.ki && <p className="text-red-500">{errors.ki}</p>}
            <Input
              type="text"
              placeholder="Max Ki"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="maxKi"
              onChange={handleOnChange}
            />
            {errors.maxKi && <p className="text-red-500">{errors.maxKi}</p>}
            <Input
              type="text"
              placeholder="Raza"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="race"
              onChange={handleOnChange}
            />
            {errors.race && <p className="text-red-500">{errors.race}</p>}
            <Input
              type="text"
              placeholder="Genero"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="gender"
              onChange={handleOnChange}
            />
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
            <Textarea
              placeholder="Descripcion"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="description"
              onChange={handleOnChangeTextArea}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
            <Input
              type="text"
              placeholder="Imagen URL"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="image"
              onChange={handleOnChange}
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
            <Input
              type="text"
              placeholder="Afiliacion: example z fighter"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="affiliation"
              onChange={handleOnChange}
            />
            {errors.affiliation && (
              <p className="text-red-500">{errors.affiliation}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-orange-500">
            Info del planeta de origen
          </h1>
          <div className="flex flex-col gap-1">
            <Input
              type="text"
              placeholder="Nombre"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="name"
              onChange={handleOnChangeOriginPlanet}
            />
            {errors.originPlanet?.name && (
              <p className="text-red-500">{errors.originPlanet.name}</p>
            )}
            <Select onValueChange={onChangeSelect}>
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
            {errors.originPlanet?.description && (
              <p className="text-red-500"> {errors.originPlanet.description}</p>
            )}
            <Input
              type="text"
              placeholder="Imagen Url"
              className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
              name="image"
              onChange={handleOnChangeOriginPlanet}
            />
            {errors.originPlanet?.description && (
              <p className="text-red-500"> {errors.originPlanet.image}</p>
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

        <button
          type="submit"
          className=" p-2 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-300 dark:hover:border-orange-500 dark:hover:text-orange-500  rounded-full font-bold text-gray-950 border-[4px] border-gray-950 hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default CreateCharacter;
