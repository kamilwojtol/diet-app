import { Request, Response } from "express";
import { DietModel } from "../models/Diet.js";

export const getDiet = async (req: Request, res: Response) => {
  const diets = await DietModel.find();

  return res.status(200).json({
    result: "success",
    data: diets,
  });
};

export const getSingleDiet = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (typeof id === "string") {
    const idNumber = id.split("=")[1];

    if (!Number(idNumber)) {
      return res.status(401).json({
        result: "error",
        data: {
          message: "Please enter correct ID number",
        },
      });
    }

    const diet = await DietModel.findOne({ id: Number(idNumber) });

    if (!diet) {
      return res.status(404).json({
        result: "error",
        data: {
          message: `There is no diet with ID ${id}. Please try again`,
        },
      });
    }

    return res.status(200).json({
      result: "success",
      data: diet,
    });
  }

  return res.status(401).json({
    result: "error",
    data: {
      message: "There is something wrong with your request",
    },
  });
};

export const addDiet = async (req: Request, res: Response) => {
  const newDiet = req.body;

  try {
    await DietModel.insertOne(newDiet);
  } catch {
    return res.status(400).json({
      result: "error",
      data: {
        message: "Error occured during adding your diet to database",
      },
    });
  }

  return res.status(201).json({
    results: "success",
    data: newDiet,
  });
};

export const removeDiet = async (req: Request, res: Response) => {
  const { id } = req.query;

  try {
    await DietModel.findByIdAndDelete(id);
  } catch {
    return res.status(400).json({
      result: "error",
      data: {
        message: "Error occured during deleting your diet to database",
      },
    });
  }

  return res.status(200).json({
    results: "success",
    data: {
      message: `Diet with ID ${id} was correctly removed`,
    },
  });
};
