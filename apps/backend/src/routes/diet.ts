import { Router } from "express";
import { getDiet, getSingleDiet } from "../controllers/dietController.js";

export const router = Router();

router.get("/api/getDiet", (req, res) => {
  getDiet(req, res);
});

router.get("/api/getDiet/:id", (req, res) => {
  getSingleDiet(req, res);
});
