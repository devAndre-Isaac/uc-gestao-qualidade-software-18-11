import { IMC } from "../Imc";

export class OldManImc extends IMC {
  protected percentil(): number | undefined {
    const gender = this.body.gender === "M";

    if (this.body.age! >= 65 && this.body.age! <= 69) {
      return gender ? 24.3 : 26.5;
    } else if (this.body.age! >= 70 && this.body.age! <= 74) {
      return gender ? 25.1 : 26.3;
    } else if (this.body.age! >= 75 && this.body.age! <= 79) {
      return gender ? 23.9 : 26.1;
    } else if (this.body.age! >= 80 && this.body.age! <= 84) {
      return gender ? 23.7 : 25.5;
    } else if (this.body.age! > 85) {
      return gender ? 23.1 : 23.6;
    }
  }
  protected pi(): number {
    return this.percentil()! * (this.body.height! * this.body.height!);
  }
}
