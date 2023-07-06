import { CorsOptions } from "cors";
import { ORIGINS } from "../constants";

export default {
  origin: (origin, callback) => {
    if (!origin || ORIGINS.ALLOWED.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(origin + " is not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
} as CorsOptions;
