import { user } from "./user.interface";
import { userModel } from "./user.model";

const createuserIntoDB = async (user: user) => {
  const result = await userModel.create(user);
  return result;
};

const getAllusersFromDB = async () => {
  const result = await userModel.find();
  return result;
};

const getSingleuserFromDB = async (id: string) => {
  const result = await userModel.findOne({ _id: id });
  return result;
};

export const userService = {
  createuserIntoDB,
  getAllusersFromDB,
  getSingleuserFromDB,
};
