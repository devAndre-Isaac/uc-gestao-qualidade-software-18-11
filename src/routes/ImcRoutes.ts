import { Request, Response } from "express";
import { factory, IPerson } from "../Imc/factory";

export class IMCRoute {
  public async verifyIMC(req: Request, res: Response) {
    const imc = factory(req.body as IPerson);
    return res.status(200).json({ imc: imc?.isIdeal() });
  }
}
