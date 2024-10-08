import { IOriginPlanetDto } from "./IOriginPlanetDto";
import { ITransformationDto } from "./ITransformationDto";

export interface ICharacterDto {
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: IOriginPlanetDto;
  transformations: ITransformationDto[];
}
