import { Request, Response } from "express";
import { DietModel } from "../models/Diet.js";

export const getDiet = async (req: Request, res: Response) => {
  const diets = await DietModel.insertOne({
    id: 5,
    name: "Wtf",
    price: 99.99,
  });

  console.log(diets);

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

    console.log(diet);

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
