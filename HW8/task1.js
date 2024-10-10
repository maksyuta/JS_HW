// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
const arr = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

arr.forEach((value) => {
    if(!(value % 3)){
        console.log(value)
    }
});

//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]

    const result = arr.map((value) => value - arr.length);
    console.log(result)

//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]

const filterResult = arr.filter((value, index, array) => value > array[index -1]);
    console.log(filterResult)

//   4. find - найдите элемент, равный своему индексу //2
const findResult = arr.find((value, index) => value === index);
    console.log(findResult)

//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]

const sortResult = [...arr].sort((a,b) => a - b);
    console.log(sortResult)

//   6. reduce - получите сумму всех чисел массива //466

const sumValuesInArray = arr.reduce((accumulator, value) => accumulator + value, 0);
    console.log(sumValuesInArray)

//   7. some - проверьте, есть ли в массиве элементы больше 90 //true

const greaterThan90 = arr.some((value) => value > 90);
    console.log(greaterThan90)

//   8. every - проверьте, что все элементы массива двухзначные //false

const doubleDigit = arr.every((value) => value >= 10 && value <= 99);
    console.log(doubleDigit)