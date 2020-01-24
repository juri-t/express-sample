import { Express, Request, Response } from "express";

const express = require("express");

const Users = [
  { id: 1, name: 'juri-t'}
];

export function createApp(): Express {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    res.status(200).end()
  });

  app.get("/user", (req: Request, res: Response) => {
    res.json(Users);
  });

  return app;
}

