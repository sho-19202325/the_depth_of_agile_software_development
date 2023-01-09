import { Employee } from "./Employee"

type EmployeeHashMap = {
  empId: number
  employee: Employee
} | {}

export class PayrollDatabase {
  private static itsEmployees:EmployeeHashMap = {}

  public static addEmployee = (empId: number, e: Employee) => {
    this.itsEmployees[empId] = e
  }

  public static getEmployee = (empId: number) => {
    return this.itsEmployees[empId]
  }

  public static clear = () => {
    this.itsEmployees = {}
  }
}
