import { PaymentMethod } from "../interfaces/PaymentMethod";
import { PaymentClassification } from "./PaymentClassification";
import { PaymentSchedule } from "./PaymentSchedule";

export class Employee {
  empId: number;
  name: string;
  address: string;
  pc: PaymentClassification;
  ps: PaymentSchedule;
  pm: PaymentMethod;

  constructor (empId: number, name: string, address: string) {
    this.empId = empId;
    this.name = name;
    this.address = address;
  }

  setClassification (pc: PaymentClassification) {
    this.pc = pc
  }

  setSchedule (ps: PaymentSchedule) {
    this.ps = ps
  }

  setMethod (pm: PaymentMethod) {
    this.pm = pm
  }
}