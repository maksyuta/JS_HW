// 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
//   Пиццы конкурента:
   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
   const myPizzas = ['4 Cheeses', 'Polo', 'Dicarni', 'Mexican', 'New York' ];

   const toLowerCaseCompPizzas = competitorPizzas.map(pizza => pizza.toLowerCase());
   const toLowerCaseMyPizzas = myPizzas.map(pizza => pizza.toLowerCase());
   const differentPizzas = [];

   for (let i = 0; i < toLowerCaseMyPizzas.length; i++){
    if(!toLowerCaseCompPizzas.includes(toLowerCaseMyPizzas[i])) {
        differentPizzas.push(myPizzas[i])
    }
   }

console.log (differentPizzas.length ? differentPizzas : null)