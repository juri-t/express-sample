import { Request, Response } from "express";

const express = require("express");

const app = express();

// environment
const PORT = 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).end()
});

app.listen(PORT, () => {
  console.log(`server is listening... port:${PORT}`)
});