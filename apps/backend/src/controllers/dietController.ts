import { Request, Response } from "express";
import { dbHandler } from "../utils/dbConnection.js";

export const getDiet = async (req: Request, res: Response) => {
  const database = await dbHandler();

  const diets = await database.collection("Diets").find().toArray();

  return res.status(200).json({
    result: "success",
    data: diets,
  });
};

export const getSingleDiet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const database = await dbHandler();

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

    const diet = await database
      .collection("Diets")
      .findOne({ id: Number(idNumber) });

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
