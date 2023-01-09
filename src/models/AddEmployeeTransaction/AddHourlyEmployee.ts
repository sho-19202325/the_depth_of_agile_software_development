import { AddEmployeeTransaction } from "../AddEmployeeTransaction";
import { PaymentClassification } from "../PaymentClassification";
import { HourlyClassification } from "../PaymentClassification/HourlyClassification";
import { PaymentSchedule } from "../PaymentSchedule";
import { HourlySchedule } from "../PaymentSchedule/HourlySchedule";

export class AddHourlyEmployee extends AddEmployeeTransaction {
  private itsSalary:number;

  constructor (empId: number, name: string, address: string, salary: number) {
    super(empId, name, address);
    this.itsSalary = salary;
  }

  getClassification(): PaymentClassification {
      return new HourlyClassification(this.itsSalary)
  }

  getSchedule(): PaymentSchedule {
      return new HourlySchedule()
  }
}