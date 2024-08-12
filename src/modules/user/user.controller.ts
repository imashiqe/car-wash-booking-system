import { Request, Response } from "express";
import { userService } from "./user.service";

import userValidationSchema from "./user.validation";

const createuser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const zodiacsData = userValidationSchema.parse(userData);

    const result = await userService.createuserIntoDB(zodiacsData);

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
    const result = await userService.getAllusersFromDB();
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

    const result = await userService.getSingleuserFromDB(userId);
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
  createuser,
  getAlluser,
  getSingleuser,
};
