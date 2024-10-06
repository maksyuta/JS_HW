// 1. Создайте цикл, который выведет в консоль только четные цифры от 10 до 0 (10-8-6-4-2-0)

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
      console.log(i);
  }
}

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)

const symbol = ':)'

for (let i = 0; i<=5; i++){

    console.log(symbol.repeat(i));
}

// 3. Создайте скрипт, который удалит все пробелы из строчки:
//   - Создайте переменную text со значением: Hello! I am a JS student!
//   - Вывелите в консоль text, заменив в ней все пробелы на 1 (единица)
//   - Реализуйте с помощью метода replaceAll
//   - Пример в консоли: Hello!1I1am1a1JS1student!

const text = 'Hello! I am a JS student!'
console.log(text.replaceAll(' ', '1'))