// 1. Реализуйте метод findEmployeeByName(firstName: string) в классе Company, который возвращает объект сотрудника, если такой найден.
// 2. Реализуйте метод removeEmployee(firstName) в классе Company, который удаляет сотрудника по имени. 
//    Метод должен искать сотрудника по имени и, если сотрудник найден, удалять его из массива.
//    Для корретной работы создайте дополнительно приватный метод getEmployeeIndex(firstName), и используйте его в removeEmployee
// 3. Добавьте метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников.

// 4. Добавление валидации для полей сотрудника в сеттеры:
//   Employee:
//     firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
//     profession — строка, не может быть пустой, только латинские буквы и пробелы.
//     salary — число, должно быть больше 0 и меньше 10000.
// 5. Проверьте свой код:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
//     const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     company.addEmployee(emp3);

//     console.log(company.getTotalSalary()); // 12000
//     console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
//     company.removeEmployee("John");
//     console.log(company.getEmployees()); // [Employee, Employee]

class Employee {
    #salary
    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }

     get firstName() {
        return this._firstName;
    }

    set firstName(newFirstName){
        if(typeof newFirstName !== 'string') {
            throw new Error ("Invalid first name value")
        }
        if(newFirstName.length < 2 || newFirstName.length > 50) {
            throw new Error ("First name must contain between 2 and 50 characters.")
        }
        if (!/^[A-Za-z]+$/.test(newFirstName)) {
            throw new Error("First name must contain only Latin letters.");
        }
        this._firstName = newFirstName
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName){
        if(typeof newLastName !== 'string') {
            throw new Error ("Invalid last name value")
        }
        if(newLastName.length < 2 || newLastName.length > 50) {
            throw new Error ("First name must contain between 2 and 50 characters.")
        }
        if (!/^[A-Za-z]+$/.test(newLastName)) {
            throw new Error("First name must contain only Latin letters.");
        }
        this._lastName = newLastName
    }

    get profession() {
        return this._profession;
    }

    set profession(newProfession){
        if (typeof newProfession !== 'string' || !newProfession.trim()) {
            throw new Error("Invalid profession: it must be a non-empty string.");
        }

        if (!/^[A-Za-z\s]+$/.test(newProfession)) {
            throw new Error("Profession must contain only Latin letters and spaces.");
        }

        this._profession = newProfession
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary){
        if(typeof newSalary !== 'number' || isNaN(newSalary)) {
            throw new Error ("Invalid salary value")
        }
        if (newSalary <= 0 || newSalary > 10000) {
            throw new Error("Salary must be greater than 0 and less than or equal to 10000.");
        }

        this.#salary = newSalary
    }

    getFullName(){
        return `${this._firstName} ${this._lastName}`
    }

}

class Company {
    #employees = []
    constructor(title, phone, address) {
        this._title = title;
        this._phone = phone;
        this._address = address;
    }
    get title(){
        return this.title
    }
    get phone(){
        return this.phone
    }
    get address(){
        return this.address
    }

    addEmployee(newEmployee){
        if(!(newEmployee instanceof Employee)){
            throw new Error ("New employee should be an instance of Employee class")
        }
        this.#employees.push(newEmployee)
    }

    getEmployees(){
        return this.#employees
    }

    getInfo(){
        return `Company: ${this._title}\nAddress: ${this._address}\nCount of employees: ${this.#employees.length}`
    }

    findEmployeeByName(firstName){
        const employee = this.#employees.find(employee => employee.firstName.toLowerCase() === firstName.toLowerCase())

        return employee ? employee : `Employee with the name ${firstName} not found.`
    }

    #getEmployeeIndex(firstName) {
        return this.#employees.findIndex(employee => employee.firstName.toLowerCase() === firstName.toLowerCase())
    }

    removeEmployee(firstName) {
        const index = this.#getEmployeeIndex(firstName);
        if (index !== -1) {
            this.#employees.splice(index, 1);
            console.log(`Employee ${firstName} removed successfully`)
        } else {
            throw new Error(`This employee - ${firstName} not found.`);
        }
    }

    getTotalSalary(){
       return this.#employees.reduce((acc, employee) => acc + employee.salary, 0)
    }

}

    const emp1 = new Employee("John", "Doe", "Developer", 3000);
    const emp2 = new Employee("Jane", "Smith", "Manager", 5000);
    const emp3 = new Employee("Mark", "Brown", "Designer", 4000);

    const company = new Company("Tech Corp", "123-456", "Main Street");
    company.addEmployee(emp1);
    company.addEmployee(emp2);
    company.addEmployee(emp3);

    console.log(company.getTotalSalary()); // 12000
    console.log(company.findEmployeeByName("Jane")); // Employee { firstName: 'Jane', ... }
    company.removeEmployee("John");
    console.log(company.getEmployees()); // [Employee, Employee]