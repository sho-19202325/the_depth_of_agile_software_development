import { AddEmployeeTransaction } from "../AddEmployeeTransaction";
import { PaymentClassification } from "../PaymentClassification";
import { SalariedClassification } from "../PaymentClassification/SalariedClassification";
import { PaymentSchedule } from "../PaymentSchedule";
import { MonthlySchedule } from "../PaymentSchedule/MonthlySchedule";

export class AddSalariedEmployee extends AddEmployeeTransaction {
  private itsSalary:number;

  constructor (empId: number, name: string, address: string, salary: number) {
    super(empId, name, address);
    this.itsSalary = salary;
  }

  getClassification(): PaymentClassification {
      return new SalariedClassification(this.itsSalary)
  }

  getSchedule(): PaymentSchedule {
      return new MonthlySchedule()
  }
}