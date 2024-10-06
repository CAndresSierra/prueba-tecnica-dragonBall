import { Request, Response } from "express";
import * as tranfService from "../services/transformation.service";
import { ITransformationDto } from "../dtos/ITransformationDto";

export const getTransformations = async (req: Request, res: Response) => {
  try {
    const transformations = await tranfService.getTransformationsService();
    res.status(200).json(transformations);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransformationById = async (req: Request, res: Response) => {
  try {
    const { transfId } = req.params;
    const transformation = await tranfService.getTransformationByIdService(
      transfId
    );
    res.status(200).json(transformation);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updateTransformationById = async (req: Request, res: Response) => {
  try {
    const { transfId } = req.params;
    const { name, ki, image }: Partial<ITransformationDto> = req.body;
    const transfUpdated = await tranfService.updateTransformationByIdService(
      transfId,
      { name, ki, image }
    );
    res.status(200).json(transfUpdated);
  } catch (error: any) {
    if (error.message === "No se encontro la transformacion a actualizar") {
      res.status(404).json({ message: error.message });
    } else if (
      error.message === "No se pudo actualizar la transformacion solicitada"
    ) {
      res.status(500).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
};

export const deleteTransformationById = async (req: Request, res: Response) => {
  try {
    const { transfId } = req.params;
    await tranfService.deleteTransformationByIdService(transfId);
    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
