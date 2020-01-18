import { Express, Request, Response } from "express";

const express = require("express");

export function createApp(): Express {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    res.status(200).end()
  });

  return app;
}

