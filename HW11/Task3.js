// Теперь, вместо того чтобы указывать профессию в объекте класса Employee, 
// создайте подклассы для разных типов сотрудников — Developer, Manager, и Designer, — которые будут наследовать класс Employee. 
// В каждом из подклассов добавьте специфические поля и методы, уникальные для этих профессий. 
// Также реализуйте методы в классе Company, позволяющие работать с разными типами сотрудников.

// 1. Создайте базовый класс Employee:
//     Поля: firstName, lastName, приватное поле salary.
//     Геттеры и сеттеры для всех полей с валидацией, аналогично Task 1 и Task 2.
//     Метод getFullName(), возвращающий полное имя сотрудника.

// 2. Создайте подклассы Developer, Manager, и Designer: Каждый из этих подклассов будет наследовать от класса Employee 
//    и добавлять свои специфические поля.

//   Подкласс Developer:
//     Поле: programmingLanguages — массив языков программирования, которыми владеет разработчик.
//     Метод addProgrammingLanguage(language: string), который добавляет новый язык программирования в массив.
//   Подкласс Manager:
//     Поле: teamSize — количество людей в команде менеджера.
//     Метод increaseTeamSize() — увеличивает количество людей в команде.
//   Подкласс Designer:
//     Поле: designTools — массив инструментов для дизайна, которыми владеет дизайнер.
//     Метод addDesignTool(tool: string) — добавляет новый инструмент в арсенал дизайнера.

// 3. Добавьте метод getEmployeesByProfession(profession: string) возвращающий массив всех сотрудников переданной профессии
//       getEmployeesByProfession("Developer"), возвращающий массив всех разработчиков в компании.
//       getEmployeesByProfession("Manager"), возвращающий массив всех менеджеров.
//       getEmployeesByProfession("Designer"), возвращающий массив всех дизайнеров.
// 4. Добавьте валидацию в метод addEmployee класса Company, которая будет проверять имя+фамилию нового сотрудника на уникальность.
//    Добавлять сотрудника с таким же именем+фамилией как у уже имеющегося - нельзя.
// 5. Протестируйте функционал:
//     Создайте несколько объектов Developer, Manager, и Designer.
//     Добавьте их в компанию с помощью метода addEmployee().
//     Протестируйте добавление сотрудников с не уникальным именем и фамилией
//     Протестируйте метод getEmployeesByProfession с существующими и не существующими профессиями.

class Employee {
    #salary
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
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

class Developer extends Employee {

    constructor(firstName, lastName, salary, programmingLanguages = [] ){
        super (firstName, lastName, salary)
        this.programmingLanguages = programmingLanguages
    }

    addProgrammingLanguage(language){
        if(typeof language !== 'string')
            throw new Error("Invalid language: it must be a string.");
        this.programmingLanguages.push(language)
    }
}

class Manager extends Employee {
    constructor(firstName, lastName, salary, teamSize = 0){
        super(firstName,lastName,salary)
        this.teamSize = teamSize
    }

    increaseTeamSize(amountOfEmployyes) {
        if(amountOfEmployyes !== 'number')
            throw new Error("Invalid amount: it must be a number!");
        this.teamSize += amountOfEmployyes;
    }
}

class Designer extends Employee {
    constructor(firstName, lastName, salary, desighTools = []){
        super(firstName, lastName, salary)
        this.desighTools = desighTools
    }

    addDesignTool(tool){
        if (typeof tool !== 'string')
            throw new Error("Invalid tool: it must be a string.");
        this.desighTools.push(tool)
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
        if(this.#employees.some(employee => employee.getFullName().toLowerCase() === newEmployee.getFullName().toLowerCase())){
            throw new Error ("New employee name isn't unique")
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


    getEmployeesByProfession(profession){
        const professions = {
            Manager,
            Developer,
            Designer
        }
        const ProfessionClass = professions[profession];
        if(!ProfessionClass) {
            throw new Error(`Profession not found`);
        }
        return this.#employees.filter((employee) => employee instanceof ProfessionClass)
    }

}

const company = new Company("Tech Corp", "123-456", "Main Street");
const dev1 = new Developer("Jonh", "Smith", 7000, ["Python"]);
const dev2 = new Developer("Bob", "Brown", 8000, ["C#"]);
const manager1 = new Manager("Charlie", "Johnson", 9000, 10);
const designer1 = new Designer("Diana", "White", 7500, ["Photoshop, Illustrator"]);
const designer2 = new Designer("Inna", "Michilton", 5500, ["Figma, Paint"]);
const devDuplicate = new Developer("Jonh", "Smith", 7000, ["Python"]);


try{
company.addEmployee(dev1);
company.addEmployee(dev2);
company.addEmployee(manager1);
company.addEmployee(designer1);
company.addEmployee(designer2);
company.addEmployee(devDuplicate);
} catch (error) {
    console.error(error.message);
}

console.log(company.getEmployees())
console.log(company.getInfo())
console.log(company.getEmployeesByProfession('Designer'))
console.log(company.getEmployeesByProfession('Waiter'))