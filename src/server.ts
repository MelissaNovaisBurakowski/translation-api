import express, { Request, Response } from "express";
import "express-async-errors";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => console.log("Server is runing"));
