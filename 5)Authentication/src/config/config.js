import dotenv from "dotenv";
dotenv.config({ quiet: true });

const requiredKeys = [
  "ACCESS_TOKEN_SECRET", "ACCESS_TOKEN_EXPIRY",
  "REFRESH_TOKEN_SECRET", "REFRESH_TOKEN_EXPIRY",
  "MONGODB_URI", "PORT"
];

const config = {};

requiredKeys.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`${key} not defined in environment variables`);
  }
  config[key] = process.env[key];
});

export default config;