import { Schema, model } from "mongoose";
import { user } from "./user.interface";

const variantSchema = new Schema({
  type: {
    type: String,
    required: [true, "Variant type is required"],
    trim: true,
  },
  value: {
    type: String,
    required: [true, "Variant value is required"],
    trim: true,
  },
});

const inventorySchema = new Schema({
  quantity: {
    type: Number,
    required: [true, "Inventory quantity is required"],
    min: [0, "Quantity cannot be less than 0"],
  },
  inStock: {
    type: Boolean,
    required: [true, "InStock status is required"],
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "user name is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "user description is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "user price is required"],
    min: [0, "Price cannot be less than 0"],
  },
  category: {
    type: String,
    required: [true, "user category is required"],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, "user tags are required"],
    validate: [Array.isArray, "Tags must be an array of strings"],
  },
  variants: {
    type: [variantSchema],
    required: [true, "user variants are required"],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "Inventory information is required"],
  },
});

export const userModel = model<user>("user", userSchema);
