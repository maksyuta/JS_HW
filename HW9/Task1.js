// Имеется объект
const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }

// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
    const keys = Object.keys(character).filter(key => key.length === 4)
    console.log(keys)
// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'

const values = Object.values(character).filter(value => typeof value === 'string' )
console.log(values)

// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for.
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
const entries = Object.entries(character)
    for(const [key,value] of entries){
        console.log(`key = ${key}, value = ${value}`)
    }


// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль 
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())

    console.log('salary' in character)
    console.log(Object.hasOwn(character, 'salary'));
