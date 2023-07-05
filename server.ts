// Loading environment files
import { load } from "dotenv-extended";
load();

// All imports should be kept here 👇
import express from "express";
import OTHER_ROUTES from "./routes/otherRoutes";
import MAIN_ROUTES from "./routes/mainRoutes";
import API_ROUTES from "./routes/apiRoutes";
import { logEvents, logger } from "./middleware/logger";
import errorHandler from "./middleware/errorHandler";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import connectDB from "./DB/dbConn";
import mongoose from "mongoose";

console.log("Server: Environment is: ", process.env.NODE_ENV);

//Mongo Database Connection
connectDB();

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

// Mongo event listners
mongoose.connection.once("open", () => {
  console.info("MongoDB: Connected");
  //Starting server
  const port = process.env.SERVER_PORT || 3500;
  app.listen(port, () =>
    console.log("Server: ", "Running at http://localhost:" + port)
  );
});

mongoose.connection.on("error", (err) => {
  logEvents(
    `${err.name}: ${err.code}\n${err.message}\n${err.syscall}\n${err.hostname}`,
    "err-mongo-logs"
  );
  console.error(err);
});
