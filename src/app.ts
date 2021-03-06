import { Express, Request, Response } from "express";

const express = require("express");

const Users = [
  { id: 1, name: 'juri-t' }
];

export function createApp(): Express {
  const app = express();

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "ok"
    })
  });

  app.get("/user", (req: Request, res: Response) => {
    res.json(Users);
  });

  app.get("/health-check", (req: Request, res: Response) => {
    res.json({ message: 'ok' })
  });

  return app;
}

