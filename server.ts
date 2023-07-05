import express from "express";
import OTHER_ROUTES from "./routes/otherRoutes";
import { ROUTES_CONST, SERVER_CONST } from "./constants";
import MAIN_ROUTES from "./routes/mainRoutes";
import API_ROUTES from "./routes/apiRoutes";
import { logger } from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions";

//INITIALIZING APP
const app = express();

// MIDDLEWARE
app.use(logger); //REGISTERING LOGGER MIDDLEWARE
app.use(cors(corsOptions)); //REGISTERING CORS MIDDLEWARE
app.use(express.json()); //REGISTERING JSON MIDDLEWARE
app.use(errorHandler); //REGISTERING ERROR MIDDLEWARE
app.use(cookieParser()); //REGISTERING COOKIE-PARSER MIDDLEWARE

// REGISTERING ROUTES
app.use(MAIN_ROUTES);
app.use(API_ROUTES);
app.use(OTHER_ROUTES);

//STARTING SERVER
app.listen(SERVER_CONST.PORT, () =>
  console.log("Server is running on port " + SERVER_CONST.PORT)
);
