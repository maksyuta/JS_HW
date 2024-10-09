// 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function isPolindrom(word){
    toLowerCaseWord = word.toLowerCase()
    const reverseWord = toLowerCaseWord.split('').reverse().join('')
    return result = reverseWord === toLowerCaseWord ? `${word} - It is palindrom` : `${word} - It isn't palindrom` 
}
console.log(isPolindrom('tenet'))

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра
//     и возвращает слово с наибольшим количеством букв.
//     Если таких слов несколько - возвращает их все.

function findBigestWords(sentence){
    const separateWords = sentence.split(' ')
    const maxLength = Math.max(...separateWords.map(word => word.length));
    const biggestWords = separateWords.filter(word => word.length === maxLength);
    return biggestWords;
}
console.log(findBigestWords('I am a QA Engineer engineer'))

