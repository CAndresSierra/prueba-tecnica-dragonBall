import { ITransformationDto } from "../dtos/ITransformationDto";
import TransformationModel, {
  ITransformationDB,
} from "../models/Transformation";

export const getTransformationsService = async (): Promise<
  ITransformationDB[]
> => {
  const tranformations = await TransformationModel.find();

  if (!tranformations)
    throw new Error("No se encontraron transformaciones. Lo sentimos");

  return tranformations;
};

export const getTransformationByIdService = async (
  id: string
): Promise<ITransformationDB> => {
  const transformation = await TransformationModel.findById(id).populate(
    "character"
  );

  if (!transformation)
    throw new Error("No se encontro la transformacion solicitada");

  return transformation;
};

export const updateTransformationByIdService = async (
  id: string,
  transfDto: Partial<ITransformationDto>
): Promise<ITransformationDB> => {
  const transformationFound = await TransformationModel.findById(id);

  if (!transformationFound)
    throw new Error("No se encontro la transformacion a actualizar");

  const tranformationUpdated = await TransformationModel.findByIdAndUpdate(
    transformationFound._id,
    transfDto,
    { new: true }
  );

  if (!tranformationUpdated)
    throw new Error("No se pudo actualizar la transformacion solicitada");

  return tranformationUpdated;
};

export const deleteTransformationByIdService = async (
  id: string
): Promise<string> => {
  const transformationFound = await TransformationModel.findById(id);

  if (!transformationFound)
    throw new Error("No se encontro la transformacion a eliminar");

  await TransformationModel.findByIdAndDelete(transformationFound._id);

  return "Transformacion eliminada con exito";
};
