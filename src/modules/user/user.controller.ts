import { Request, Response } from "express";
import { userService } from "./user.service";

import userValidationSchema from "./user.validation";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const zodiacsData = userValidationSchema.parse(userData);

    // Ensure 'phone' property is always a string
    const phone = userData.phone || "";

    const result = await userService.createUserInDB({
      ...zodiacsData,
      phone,
    });

    res.status(200).json({
      success: true,
      message: "user  created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

const getAlluser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleuser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userService.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: " users fetched successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  createUser,
  getAlluser,
  getSingleuser,
};
