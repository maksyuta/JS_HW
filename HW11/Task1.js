// 1. Создайте класс Employee с полями:
//   firstName — имя сотрудника (строка).
//   lastName — фамилия сотрудника (строка).
//   profession — профессия сотрудника (строка).
//   Приватное поле salary — зарплата сотрудника (число).
// 2. Реализуйте геттеры и сеттеры для всех полей, включая приватное поле salary.
// 3. Реализуйте метод getFullName() — возвращающий полное имя сотрудника.
// 4. Проверьте корректную работу класса, создав несколько экземпляров и протестировав геттеры и сеттеры:
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     console.log(emp1.firstName); // "John"
//     emp1.salary = 3100;
//     console.log(emp1.age); // 3100

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
        this._firstName = newFirstName
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newLastName){
        if(typeof newLastName !== 'string') {
            throw new Error ("Invalid last name value")
        }
        this._lastName = newLastName
    }

    get profession() {
        return this._profession;
    }

    set profession(newProfession){
        if(typeof newProfession !== 'string') {
            throw new Error ("Invalid profession value")
        }
        this._profession = newProfession
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary){
        if(typeof newSalary !== 'number' || newSalary < 0) {
            throw new Error ("Invalid salary value")
        }
        this.#salary = newSalary
    }

    getFullName(){
        return `${this._firstName} ${this._lastName}`
    }

}
const emp1 = new Employee("John", "Doe", "Developer", 3000);

console.log(emp1.firstName);
console.log(emp1.profession)
emp1.lastName = 'Pupkin';
emp1.salary = 5000
console.log(emp1.salary);
console.log(emp1.getFullName())

// 5. Создайте класс Company с полями:
//     title — название компании (строка).
//     phone — телефон компании (число).
//     address — адрес компании (строка).
//     Приватное поле employees — массив сотрудников (пустой массив на старте).
// 6. Реализуйте геттеры для полей title, phone, и address.
// 7. Добавьте методы:
//     addEmployee(employee) — добавляет сотрудника в массив employees с проверкой, что переданный объект является экземпляром класса Employee. (instanceOf)
//     getEmployees() - возвращает массив всех сотрудников.
// 8. Проверьте корректную работу:
//     const company = new Company("Tech Corp", "123-456", "Main Street");
//     const emp1 = new Employee("John", "Doe", "Developer", 3000);
//     const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
//     company.addEmployee(emp1);
//     company.addEmployee(emp2);
//     console.log(company.getEmployees()); // [Employee, Employee]
// 9. Добавьте в класс Company метод getInfo(), который возвращает строку с информацией о компании вида (перенос строки сделать с \n):
// Компания:
// Адрес:
// Количество сотрудников:
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
}

const company = new Company("Tech Corp", "123-456", "Main Street");
    const emp2 = new Employee("John", "Doe", "Developer", 3000);
    const emp3 = new Employee("Barbara", "Johnson", "QA", 2500);
    company.addEmployee(emp2);
    company.addEmployee(emp3);
    console.log(company.getEmployees());
    console.log(company.getInfo());

