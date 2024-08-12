import * as z from "zod";

const userValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .min(1, { message: "Email is required" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(128, { message: "Password cannot be more than 128 characters long" }),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" })
    .optional(),
  role: z
    .string()
    .refine((value) => ["user", "admin", "moderator"].includes(value), {
      message: "Role must be one of: user, admin, moderator",
    })
    .default("user"),
  address: z.string().min(1, { message: "Address is required" }),
});

export default userValidationSchema;
