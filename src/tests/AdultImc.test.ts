import test, { afterEach } from "ava";
import { AdultImc } from "../Imc/Persons/AdultImc";
import sinon from "sinon";

const fakeBody = {
  age: 21,
  height: 1.85,
  gender: "M",
};

const mockedTest = { ...test };

mockedTest.serial.afterEach(() => {
  sinon.restore();
});

mockedTest.serial("should a test for adult imc on case male person", (t) => {
  const instance = new AdultImc(fakeBody);
  t.deepEqual(instance["valueForWantedImc"](), 22);
});

mockedTest.serial("should a test for adult imc on case female person", (t) => {
  const instance = new AdultImc({ ...fakeBody, gender: "F" });
  t.deepEqual(instance["valueForWantedImc"](), 21);
});

mockedTest.serial("should a test for pi on case male person", (t) => {
  const instance = new AdultImc(fakeBody);
  t.deepEqual(instance["pi"](), 75.295);
});

mockedTest.serial("should a test for pi on case female person", (t) => {
  const instance = new AdultImc({ ...fakeBody, gender: "F" });
  t.deepEqual(instance["pi"](), 71.8725);
});
