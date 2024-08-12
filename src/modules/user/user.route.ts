import express from "express";
import userController from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.createuser);

router.get("/", userController.getAlluser);
router.get("/:userId", userController.getSingleuser);

export const userRoutes = router;
