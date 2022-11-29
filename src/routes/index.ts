import { Router } from "express";
import { IMCRoute } from "./ImcRoutes";

const app = Router();
const router = new IMCRoute();

app.post("/imc", router.verifyIMC.bind(router));

export default app;
