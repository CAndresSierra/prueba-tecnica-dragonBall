"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITransformationDto } from "@/interfaces/dtos/ITransformationDto";

interface CreateTransformationsProps {
  onUpdateTransformations: (transformations: ITransformationDto[]) => void;
}

const CreateTransformations: React.FC<CreateTransformationsProps> = ({
  onUpdateTransformations,
}) => {
  const [numTransf, setNumTransf] = useState<string>();
  const [strArr, setStrArr] = useState<string[]>();
  const [transformations, setTransformations] = useState<ITransformationDto[]>(
    []
  );

  const handleInputChange = (
    index: number,
    field: keyof ITransformationDto,
    value: string
  ) => {
    const updatedTransformations = [...transformations];
    updatedTransformations[index] = {
      ...updatedTransformations[index],
      [field]: value,
    };
    setTransformations(updatedTransformations);
    onUpdateTransformations(updatedTransformations);
  };

  const onChangeSelect = (value: string) => {
    if (value) {
      setNumTransf(value);
    }
    if (value === "1") {
      setStrArr(["1"]);
    } else if (value === "2") {
      setStrArr(["1", "2"]);
    } else if (value === "3") {
      setStrArr(["1", "2", "3"]);
    } else if (value === "4") {
      setStrArr(["1", "2", "3", "4"]);
    } else if (value === "5") {
      setStrArr(["1", "2", "3", "4", "5"]);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Select onValueChange={onChangeSelect}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="¿Numero de transformaciones?" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Elige numero max: 5</SelectLabel>
            {["1", "2", "3", "4", "5"].map((num: string, index) => {
              return (
                <SelectItem key={index} value={num}>
                  {num}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      {numTransf && strArr && (
        <Tabs defaultValue="1">
          <TabsList>
            {strArr.map((num: string, index) => {
              return (
                <TabsTrigger key={index} value={num}>
                  {num}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {strArr.map((num: string, index) => {
            if (num === "1") {
              return (
                <TabsContent
                  key={index}
                  value={num}
                  className="flex flex-col gap-2 "
                >
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="name"
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="ki"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="ki"
                    onChange={(e) =>
                      handleInputChange(index, "ki", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Imagen Url"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="image"
                    onChange={(e) =>
                      handleInputChange(index, "image", e.target.value)
                    }
                  />
                </TabsContent>
              );
            } else if (num === "2") {
              return (
                <TabsContent
                  key={index}
                  value={num}
                  className="flex flex-col gap-2 "
                >
                  <h1 className="text-lg font-bold text-orange-500">
                    Transformacion 2
                  </h1>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="name"
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="ki"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="ki"
                    onChange={(e) =>
                      handleInputChange(index, "ki", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Imagen Url"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="image"
                    onChange={(e) =>
                      handleInputChange(index, "image", e.target.value)
                    }
                  />
                </TabsContent>
              );
            } else if (num === "3") {
              return (
                <TabsContent
                  key={index}
                  value={num}
                  className="flex flex-col gap-2"
                >
                  <h1 className="text-lg font-bold text-orange-500">
                    Transformacion 3
                  </h1>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="name"
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="ki"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="ki"
                    onChange={(e) =>
                      handleInputChange(index, "ki", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Imagen Url"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="image"
                    onChange={(e) =>
                      handleInputChange(index, "image", e.target.value)
                    }
                  />
                </TabsContent>
              );
            } else if (num === "4") {
              return (
                <TabsContent
                  key={index}
                  value={num}
                  className="flex flex-col gap-2 "
                >
                  <h1 className="text-lg font-bold text-orange-500">
                    Transformacion 4
                  </h1>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="name"
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="ki"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="ki"
                    onChange={(e) =>
                      handleInputChange(index, "ki", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Imagen Url"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="image"
                    onChange={(e) =>
                      handleInputChange(index, "image", e.target.value)
                    }
                  />
                </TabsContent>
              );
            } else if (num === "5") {
              return (
                <TabsContent
                  key={index}
                  value={num}
                  className="flex flex-col gap-2"
                >
                  <h1 className="text-lg font-bold text-orange-500">
                    Transformacion 5
                  </h1>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="name"
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="ki"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="ki"
                    onChange={(e) =>
                      handleInputChange(index, "ki", e.target.value)
                    }
                  />
                  <Input
                    type="text"
                    placeholder="Imagen Url"
                    className="text-gray-950 dark:text-gray-200 font-semibold text-base w-96 h-[45px] outline-none focus:outline-none"
                    name="image"
                    onChange={(e) =>
                      handleInputChange(index, "image", e.target.value)
                    }
                  />
                </TabsContent>
              );
            }
          })}
        </Tabs>
      )}
    </div>
  );
};

export default CreateTransformations;
