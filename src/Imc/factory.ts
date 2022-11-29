import { AdultImc } from "./Persons/AdultImc";
import { KidsImc } from "./Persons/KidsImc";
import { OldManImc } from "./Persons/OldMan";

export interface IPerson {
  age: number;
  height: number;
  gender: string;
}
export const factory = (person: IPerson) => {
  switch (person.age < 100) {
    case person.age <= 10:
      return new KidsImc(person);
    case person.age >= 10:
      return new AdultImc(person);
    case person.age >= 65:
      return new OldManImc(person);
  }
};
