// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback){
    setTimeout(callback, 2000)
}

delayTwoSeconds(() => {
(console.log('2 seconds passed'))
})
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const promise1 = new Promise((resolve, reject) => {
    resolve(1)
})
promise1.then((message) =>{
    console.log(message)
})
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const promise2 = new Promise((resolve, reject) => {
    reject('Promise failed')
})
promise2.catch((error) => console.log(error))

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(number){
    return new Promise((resolve,reject) => resolve(number))
};
//promiseNumber(10).then((result) => console.log(result))

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach(result => console.log(result))
})
.catch((error) => {
    console.error(error)
})

//6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        } else {
            console.log('Rejected:', result.reason);
        }
    });
});


// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function promiseFunction1(promisesArray = []) {
    try{
        const results = await Promise.all(promisesArray)
        results.forEach(result => console.log(result))
    }
    catch(error){
        console.error(error)
    }
}

promiseFunction1([promiseNumber(1), promiseNumber(2), promiseNumber(3)])

async function promiseFunction2(promisesArray = []) {
    const results = await Promise.allSettled(promisesArray);
    results.forEach((result) => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        } else {
            console.log('Rejected:', result.reason);
        }
    });
}

promiseFunction2([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
