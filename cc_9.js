// task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary; //Creating a class with properties
    }
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    } //adding a method that returns a formatted string of employee details
    calculateAnnualSalary() {
        return this.salary * 12;
    } //adding a method that returns employee's annual salary
}
//test data
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //instantiate an employee option
//logging details
console.log(emp1.getDetails()); //Expected output: "Employee: Alice, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); //Expected output: 60000