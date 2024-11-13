// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object, U>(obj: T, value: U): keyof T | undefined {
    return Object.keys(obj).find((key) => obj[key as keyof T] === value) as keyof T;
}

const employee = {
    name: 'Tom',
    age: 30,
    salary:1000,
    isManager: false
}

console.log(getKeyByValue(employee, 1000))