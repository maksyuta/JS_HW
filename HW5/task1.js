// 1. Создайте цикл, который выведет в консоль цифры от 10 до 0

for (i = 10; i >= 0; i--){
    console.log(i)
}


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)

const symbol = ':)';
let result = '';

for (let i = 0; i < 5; i++) {
    result += symbol;

    console.log(result);
}

//   Для Оксаны и ее друзей: также реализовать циклом while
//   Рекоммендация: попробуйте метод .repeat()

const symbol = ':)';
let result = '';

let count = 1;
while (count <= 5) {
    result += symbol.repeat(count) + '\n'
    count++;
}
console.log(result)
