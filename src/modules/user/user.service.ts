import { User } from "./user.interface";
import UserModel from "./user.model";

const createUserInDB = async (user: User) => {
  try {
    const result = await UserModel.create(user);
    return result;
  } catch (error: unknown) {
    throw new Error(`Failed to create user: `);
  }
};

const getAllUsersFromDB = async () => {
  try {
    const result = await UserModel.find();
    return result;
  } catch (error: unknown) {
    throw new Error(`Failed to get all users: `);
  }
};

const getSingleUserFromDB = async (id: string) => {
  try {
    const result = await UserModel.findOne({ _id: id });
    if (!result) {
      throw new Error(`User with id ${id} not found`);
    }
    return result;
  } catch (error: unknown) {
    throw new Error(`Failed to get user: `);
  }
};

export const userService = {
  createUserInDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
};
