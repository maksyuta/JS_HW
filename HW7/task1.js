// 1. Бесконечные аргументы
//   - Напишите функцию, принимающую на вход любое количество массивов
//   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
//   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
//   - Решить с использованием Spread operator
arr1 = [1,2,3];
arr2 = [4,5,6];
arr3 = [7,8,9];
function mergedArrays(...arrays){
    return arrays.flat();
}
console.log(mergedArrays(arr1, arr2, arr3))

// 2. Devide by _
//   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
//   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
//   - Пример: I am super engineer => i_Am_Super_Engineer
const sentence = 'I am super qa engineer';
function addUnderline(text) {
    const words = text.split(' ')
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            words[i] = words[i].toLowerCase();
        } else {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return words.join('_');
}

console.log(addUnderline(sentence));

// 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
//   - Например fibanacci(8) //21

function fibanacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibanacci(n - 1) + fibanacci(n - 2);
    }
  }

  console.log(fibanacci(8));