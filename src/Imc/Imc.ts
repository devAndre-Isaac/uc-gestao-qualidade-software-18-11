import { IPerson } from "./factory";

export abstract class IMC {
  constructor(protected body: IPerson) {}
  protected abstract pi(): number;
  public isIdeal(): string {
    const { age, height, gender } = this.body;
    if (age > 10 && age < 18) return "Não definido";
    return `O seu peso ideal é ${this.pi()} para uma altura de ${height} e idade de ${age}`;
  }
}
