import express from "express";
import { ROUTES_CONST } from "../constants";
const OTHER_ROUTES = express.Router();
const path = require("path");

const getViewPath = (file: string) => path.join(__dirname, "..", "views", file);

//HANDLING UNACCEPTED ROUTES
OTHER_ROUTES.all(ROUTES_CONST.ANY, (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(getViewPath("404.html"));
  } else if (req.accepts("json")) {
    res.json({
      status: "FAILED",
      message: "404 resource not found!",
    });
  } else {
    res.type("txt").send("404 Not Found!");
  }
});

export default OTHER_ROUTES;
