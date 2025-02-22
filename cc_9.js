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

// task 2: Creating a Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, departmnet, salary); //manager class inherit from employee
        this.teamSize = teamSize; //adding a new property
    }
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}
//test data
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); //Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); //Expected output: 9600