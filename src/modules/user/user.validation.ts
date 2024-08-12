import * as z from "zod";

const variantValidationSchema = z.object({
  type: z.string().min(1, { message: "Variant type is required" }),
  value: z.string().min(1, { message: "Variant value is required" }),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number()
    .int()
    .nonnegative({ message: "Quantity must be a non-negative integer" })
    .min(0, { message: "Quantity cannot be less than 0" }),
  inStock: z.boolean({ message: "InStock status is required" }),
});

const userValidationSchema = z.object({
  name: z.string().min(1, { message: "user name is required" }),
  description: z.string().min(1, { message: "user description is required" }),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .min(0, { message: "Price cannot be less than 0" }),
  category: z.string().min(1, { message: "user category is required" }),
  tags: z.array(
    z.string().min(1, { message: "Each tag must be a non-empty string" })
  ),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default userValidationSchema;
