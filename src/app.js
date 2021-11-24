import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";

import connection from "./database.js";
import * as userController from "./controllers/userController.js";
import * as financialController from "./controllers/financialController.js";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", userController.signUp);
app.post("/sign-in", userController.signIn);
app.post("/financial-events", financialController.postFinancialEvents);
app.get("/financial-events", financialController.getFinancialEvents);
app.get("/financial-events/sum",financialController.getFinancialEventSum);

export default app;
