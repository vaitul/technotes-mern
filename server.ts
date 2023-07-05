require("dotenv-extended").load(); // Loading environment files

// All imports should be kept here 👇
import express from "express";
import OTHER_ROUTES from "./routes/otherRoutes";
import MAIN_ROUTES from "./routes/mainRoutes";
import API_ROUTES from "./routes/apiRoutes";
import { logger } from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions";

//Initializing app
const app = express();

// Middleware
app.use(logger); //Registering logger middleware
app.use(cors(corsOptions)); //Registering cors middleware
app.use(express.json()); //Registering json middleware
app.use(errorHandler); //Registering error middleware
app.use(cookieParser()); //Registering cookie-parser middleware

// Registering routes
app.use(MAIN_ROUTES);
app.use(API_ROUTES);
app.use(OTHER_ROUTES);

//Starting server
const port = process.env.SERVER_PORT || 3500;
app.listen(port, () =>
  console.log("Server is running at http://localhost:" + port)
);
