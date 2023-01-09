import { AddEmployeeTransaction } from "../AddEmployeeTransaction";
import { PaymentClassification } from "../PaymentClassification";
import { CommissionedClassification } from "../PaymentClassification/CommissionedClassification";
import { PaymentSchedule } from "../PaymentSchedule";
import { BiweeklySchedule } from "../PaymentSchedule/BiweeklySchedule";

export class AddSalariedEmployee extends AddEmployeeTransaction {
  private itsSalary:number;

  constructor (empId: number, name: string, address: string, salary: number) {
    super(empId, name, address);
    this.itsSalary = salary;
  }

  getClassification(): PaymentClassification {
      return new CommissionedClassification(this.itsSalary)
  }

  getSchedule(): PaymentSchedule {
      return new BiweeklySchedule()
  }
}
