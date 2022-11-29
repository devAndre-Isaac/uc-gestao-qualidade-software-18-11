import { IMC } from "../Imc";

export class KidsImc extends IMC {
  protected verifyAge(): boolean {
    return this.body.age! >= 3 && this.body.age! <= 10;
  }
  protected pi(): number {
    return this.verifyAge() ? this.body.age! * 2 + 9 : 0;
  }
}
