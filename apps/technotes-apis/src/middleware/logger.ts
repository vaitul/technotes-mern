import dayjs from "dayjs";
import { v4 as uuid } from "uuid";
import fs from "fs";
import path from "path";
import { NextFunction, Request, Response } from "express";

const getLogDir = (fname: string = ""): string =>
  path.join(__dirname, "..", "logs", fname);

const logEvents = async (message: string, logFileName: string) => {
  const dateTime = dayjs(new Date()).format("YYYY-MM-DD\tHH:mm:ss");
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(getLogDir())) {
      fs.mkdirSync(getLogDir());
    }
    fs.appendFileSync(
      getLogDir(`${logFileName}-${dayjs(new Date()).format(`YYYY-MM-DD`)}.log`),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
  console.log("Logger: " + logItem.replace("\n", ""));
};

const logger = (req: Request, res: Response, next: NextFunction): void => {
  logEvents([req.method, req.url, req.headers.origin].join("\t"), `req-logs`);
  next();
};

export { logger, logEvents };
