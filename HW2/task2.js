// 1.
// Реализовать Task 1 через switch

const age = 10;
const age_2 = 18;
const age_3 = 60;

switch (true) {
    case (age < age_2): {
        console.log(`You don’t have access cause, your age is ${age}. It’s less then ${age_2}`);
        break;
    }
    case (age >= age_2 && age <= age_3): {
        console.log("Welcome  !");
        break;
    }
    case (age > age_3): {
        console.log("Keep calm and look Culture channel");
        break;
    }
    default: {
        console.log("Technical work")
    }
}

// 2.
// Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных.
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"

const ages = [17, 18, 61, "2", "aaa"];
const age_2 = 18;
const age_3 = 60;

for (let i = 0; i < ages.length; i++) {
    checkAge(ages[i]);
}

function checkAge(age) {
    if (typeof age !== 'number') {
        console.log(`Invalid value - Not a number!`);
    } else if (age < age_2) {
        console.log(`You don’t have access cause your age is ${age}. It’s less than ${age_2}`);
    } else if (age >= age_2 && age <= age_3) {
        console.log('Welcome!');
    } else if (age > age_3) {
        console.log('Keep calm and watch the Culture channel');
    } else {
        console.log('Technical work');
    }
}


// 3.
// Преобразовать Task 2 - 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось,
//   преобразовываясь в number

const ages = [17, 18, 61, "2", "aaa"];
const age_2 = 18;
const age_3 = 60;

ages.forEach(age => checkAge(age));

function checkAge(age) {
    age = Number(age);
    if (isNaN(age)) {
        console.log(`Invalid value - Not a number!`);
    } else if (age < age_2) {
        console.log(`You don’t have access cause your age is ${age}. It’s less than ${age_2}`);
    } else if (age >= age_2 && age <= age_3) {
        console.log('Welcome!');
    } else if (age > age_3) {
        console.log('Keep calm and watch the Culture channel');
    } else {
        console.log('Technical work');
    }
}
