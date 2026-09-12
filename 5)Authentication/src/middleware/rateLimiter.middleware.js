// middlewares/rateLimiter.js
import {rateLimit} from "express-rate-limit";
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // Limit each IP to 5 login requests per windowMs
  message: {
    message: "Too many login attempts from this IP, please try again after 15 minutes",
  },
  standardHeaders: true, 
  legacyHeaders: false, 
});

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  limit: 100, // Standard limit for regular API routes
});