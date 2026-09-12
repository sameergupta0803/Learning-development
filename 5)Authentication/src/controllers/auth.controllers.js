import userModel from "../models/user.model.js";
import config from "../config/config.js";
import jwt from "jsonwebtoken";
import sessionModel from "../models/session.model.js";
import crypto from "crypto";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefereshTokens = async (userId, req) => {
  try {
    const user = await userModel.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");
    const session = new sessionModel({
      user: user._id,
      refreshTokenHash,
      userAgent: req.headers["user-agent"] || "Unknown",
      revoked: false,
    });
    await session.save();
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token",
    );
  }
};
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const alreadyRegistered = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (alreadyRegistered) {
    return res
      .status(409)
      .json({ message: "Username or email already exists" });
  }
  const newUser = new userModel({ username, email, password });
  await newUser.save();

  //used to refresh the access token,stored in secure cookie,longer lifetime
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    newUser._id,
    req,
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });
  res.status(201).json({
    message: "User registered successfully",
    user: {
      username,
      email,
    },
    accessToken,
  });
};
export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({
    username,
  });
  if (!user) {
    return res.status(401).json({
      message: "Username or password incorrect",
    });
  }
  const isValidPassword = await user.isPasswordCorrect(password);
  if (!isValidPassword) {
    return res.status(401).json({
      message: "Username or password incorrect",
    });
  }
  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id,
    req,
  );
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });
  res.status(200).json({
    message: "User logged in successfully",
    user: {
      username,
      email: user.email,
    },
    accessToken,
  });
});
export const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).send({
      message: "Refresh token not found",
    });
  }
  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");
  const session = await sessionModel.findOne({
    refreshTokenHash,
    revoked: false,
  });
  if (!session) {
    return res.status(400).json({
      message: "Session not found",
    });
  }

  const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
  const { accessToken, refreshToken: newRefreshToken } =
    await generateAccessAndRefereshTokens(decoded.id, req);
  session.revoked = true;
  await session.save();
  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });
  res.status(200).json({
    message: "New access token generated",
    accessToken,
  });
});
export const getMe = asyncHandler(async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }
  const payload = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
  const userDetail = await userModel.findById(payload.id);
  res.status(200).json({
    message: "User fetched successfully",
    user: {
      username: userDetail?.username,
      email: userDetail?.email,
    },
  });
});
export const logout = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token not found",
    });
  }
  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");
  const session = await sessionModel.findOne({
    refreshTokenHash,
    revoked: false,
  });
  if (!session) {
    return res.status(400).json({
      message: "Session not found",
    });
  }
  res.clearCookie("refreshToken");
  session.revoked = true;
  await session.save();
  res.status(200).json({
    message: "Logged out successfully",
  });
});
export const logoutAll = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token not found",
    });
  }
  const decoded = jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRET);
  await sessionModel.updateMany(
    {
      user: decoded.id,
      revoked: false,
    },
    {
      revoked: true,
    },
  );
  res.clearCookie("refreshToken");
  res.status(200).json({
    message: "Logged out of all devices successfully",
  });
});
