import { Request, Response } from "express";

const dietData = [
  {
    id: 1,
    name: "Standard",
    price: 39.99,
  },
  {
    id: 2,
    name: "High Protein",
    price: 49.99,
  },
  {
    id: 3,
    name: "Keto",
    price: 49.99,
  },
  {
    id: 4,
    name: "Slim",
    price: 39.99,
  },
];

export const getDiet = (req: Request, res: Response) => {
  return res.status(200).json({
    result: "success",
    data: dietData,
  });
};

export const getSingleDiet = (req: Request, res: Response) => {
  const { id } = req.params;

  console.log(typeof id === "string");

  if (typeof id === "string") {
    const idNumber = id.split("=")[1];
    console.log(idNumber);
    if (!Number(idNumber)) {
      return res.status(401).json({
        result: "error",
        data: {
          message: "Please enter correct ID number",
        },
      });
    }

    const foundDiet = dietData.find((data) => data.id === Number(idNumber));

    if (!foundDiet) {
      return res.status(404).json({
        result: "error",
        data: {
          message: `There is no diet with ID ${id}. Please try again`,
        },
      });
    }

    return res.status(200).json({
      result: "success",
      data: foundDiet,
    });
  }

  return res.status(401).json({
    result: "error",
    data: {
      message: "There is something wrong with your request",
    },
  });
};
