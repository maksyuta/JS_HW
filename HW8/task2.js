
//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.

const words = [
    "umbrella",
    "apple",
    "ocean",
    "independent",
    "education",
    "elephant",
    "island",
    "universe",
    "environment",
    "queue"
  ];

const vowels = ['a', 'e', 'i', 'o', 'u'];

function countOfVowels(word){
    return [...word].filter(value => vowels.includes(value)).length
}

function sortedWords(array) {
    return [...array].sort((a,b) =>  countOfVowels(a) - countOfVowels(b))
}

console.log(sortedWords(words))