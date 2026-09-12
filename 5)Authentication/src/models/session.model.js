import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: [true, "User is required"],
  },
  refreshTokenHash: {
    type: String,
    required: [true, "Refresh token hash is required"],
  },
  userAgent: {
    type: String,
    required: [true, "User agent is required"],
  },
  revoked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 7 * 24 * 60 * 60, // Automatically deletes document after 7 days (in seconds)
  },
});
const sessionModel = mongoose.model("sessions", sessionSchema);
export default sessionModel;
