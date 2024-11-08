// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const url = "https://jsonplaceholder.typicode.com/todos";

async function createTodo(body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`Request failed status ${response.status}`);
        }

        const data = await response.json();


        for (const key in body) {
            if (body[key] !== data[key]) {
                throw new Error(`Data mismatch`);
            }
        }

        return data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error.message);
    } finally {
        console.log('Functions is completed successfully')
    }

}

createTodo({
    userId: 1,
    title: 'Test',
    completed: true
});
