import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters"),

  age: z
    .string()
    .refine(
      (value) => Number(value) >= 18 && Number(value) <= 100,
      {
        message: "Age must be between 18 and 100",
      }
    ),
});

export const accountDetailsSchema = z
  .object({
    email: z.string().email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );