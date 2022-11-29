import { IMC } from "../Imc";

export class AdultImc extends IMC {
  protected valueForWantedImc(): number {
    return this.body.gender === "M" ? 22 : 21;
  }
  protected pi(): number {
    return this.valueForWantedImc() * (this.body.height! * this.body.height!);
  }
}
