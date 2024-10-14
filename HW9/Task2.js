const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//     Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {
    const {name, age} = character
    characters.push({name,age})
}
addCharacter({ 'name': 'Bill', 'age': 88 });
console.log(characters)
// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name){
    return characters.find((character) => character.name === name)
}
console.log(getCharacter('Fred'))
// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]

function getCharactersByAge(minAge) {
    return characters.filter((character) => character.age >= minAge)
}
console.log(getCharactersByAge(40))

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

function updateCharacter(nameOfPerson, newCharacter) {
    const character = getCharacter(nameOfPerson)
    if(character){
        character.name = newCharacter.name
        character.age = newCharacter.age
    }
    else {
        console.log(`Not found the name - ${nameOfPerson} `)
    }
    return characters
}

console.log(updateCharacter('Fredaa', {name: 'Alanaa', age: 10}))

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
    function removeCharacter(name) {
        const index = characters.findIndex((character) => character.name === name)

        if(index === -1)
        {
            console.log (`Not found the name - ${name} `)
        } else {
            characters.splice(index, 1)
            console.log(`${name} has been deleted`)
        }

        return characters
    }
    console.log(removeCharacter('Barney'))