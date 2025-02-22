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
    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus(); //task 4-modifying annual salary to consider bonuses for managers
    }
}
//test data
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails()); //Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); //Expected output: 9600

// task 3: Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];//creating company class with property for company name and array to store employee objects
    }
    addEmployee(employee) {
        this.employees.push(employee);//add an employee to array
    }
    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.getDetails()); //logging employee details
        });
    }
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); //task 4- returns the sum of all employee salaries
    }
}
//test data
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
//Expected output:
//"Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
//"Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// task 4: Implementing a Payroll System
console.log(company.calculateTotalPayroll()); //Expected output: 165600 (assuming emp1 and mgr1 salaries)