// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]


type MapCallback<T, U> = (value: T, index: number, array: T[]) => U;

function myMap<T, U>(array: T[], callback: MapCallback<T, U>): U[] {
    const result: U[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const inputNumbers = [1, 2, 3, 4, 5];
const mappedNumbers = myMap<number, number>(inputNumbers, (value, index) => value * index);
console.log(mappedNumbers);