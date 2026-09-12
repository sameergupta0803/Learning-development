import { Router } from "express";
import * as authController from "../controllers/auth.controllers.js";
import { loginLimiter } from "../middleware/rateLimiter.middleware.js";
import { registerSchema,loginSchema,validate } from "../middleware/validate.middleware.js";
const authRouter = Router();

authRouter.post("/register",validate(registerSchema),authController.register);
authRouter.post(
  "/login",
  loginLimiter,
  validate(loginSchema),
  authController.login,
);
authRouter.get("/get-me", authController.getMe);
authRouter.get("/refresh-token", authController.refreshToken);
authRouter.get("/logout", authController.logout);

authRouter.get("/logout-all", authController.logoutAll);

export default authRouter;
