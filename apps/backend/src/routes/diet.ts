import { Router } from "express";
import {
  addDiet,
  getDiet,
  getSingleDiet,
  removeDiet,
} from "../controllers/dietController.js";

export const router = Router();

router.get("/api/getDiet", (req, res) => {
  getDiet(req, res);
});

router.get("/api/getDiet/:id", (req, res) => {
  getSingleDiet(req, res);
});

router.post("/api/addDiet", (req, res) => {
  addDiet(req, res);
});

router.delete("/api/removeDiet", (req, res) => {
  removeDiet(req, res);
});
