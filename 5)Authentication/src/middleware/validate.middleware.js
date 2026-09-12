// middlewares/validate.middleware.js
import { z } from "zod";

// 1. Define your schemas
export const registerSchema = z.object({
  body: z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  }),
});

// 2. Create the validation middleware
export const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      const error = err.issues.map((e) => ( {
          path: e.path[1] || e.path[0],
          message: e.message,
        }
      ))
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors:error
      }) 
      
    }
    return res.status(500).json({
      success:false,
      message: "An unexpected server error occurred.",
    });
  }
};
