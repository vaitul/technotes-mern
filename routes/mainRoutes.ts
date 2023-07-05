import express from "express";
import path from "path";
import { ROUTES_CONST } from "../constants";
const MAIN_ROUTES = express.Router();
const getViewPath = (file: string) => path.join(__dirname, "..", "views", file);

MAIN_ROUTES.get(ROUTES_CONST.ROOT_FILE, (_, res) => {
  res.sendFile(getViewPath("index.html"));
});

export default MAIN_ROUTES;
