import { PaymentMethod } from "../interfaces/PaymentMethod";
import { Transaction } from "../interfaces/Transaction";
import { Employee } from "./Employee";
import { PaymentClassification } from "./PaymentClassification";
import { HoldMethod } from "./PaymentMethods/HoldMethod";
import { PaymentSchedule } from "./PaymentSchedule";
import { PayrollDatabase } from "./PayrollDatabase";

export abstract class AddEmployeeTransaction implements Transaction {
  private itsEmpId:number;
  private itsName:string;
  private itsAddress:string;
  abstract getSchedule(): PaymentSchedule
  abstract getClassification():PaymentClassification

  constructor (empId: number, name: string, address: string) {
    this.itsEmpId = empId;
    this.itsName = name;
    this.itsAddress = address;
  }

  Execute () {
    const pc:PaymentClassification = this.getClassification()
    const ps:PaymentSchedule = this.getSchedule()
    const pm:PaymentMethod = new HoldMethod()
    const e = new Employee(this.itsEmpId, this.itsName, this.itsAddress)
    e.setClassification(pc)
    e.setSchedule(ps)
    e.setMethod(pm)
    PayrollDatabase.addEmployee(this.itsEmpId, e)
  }
}