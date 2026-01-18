import express from "express";
import { FormController } from "../controllers/form.controller";
import { requireAdmin, verifytoken } from "../middlewares/auth.middleware";

const router = express.Router();

// GET
router.get("/forms", verifytoken, requireAdmin, FormController.fetchAllForms);
router.get(
  "/forms/:id",
  verifytoken,
  requireAdmin,
  FormController.fetchFormById
);

// POST
router.post("/forms", verifytoken, requireAdmin, FormController.createNewForm);

// UPDATE
router.put("/forms/:id", verifytoken, requireAdmin, FormController.updateForm);

// DELETE
router.delete(
  "/forms/:id",
  verifytoken,
  requireAdmin,
  FormController.deleteForm
);

export default router;
