import { Router } from "express";
import { getDiet, getSingleDiet } from "../controllers/dietController.js";

export const router = Router();

router.get("/api/getDiet", (req, res, next) => {
  getDiet(req, res);
  next();
});

router.get("/api/getDiet/:id", (req, res, next) => {
  getSingleDiet(req, res);
  next();
});
