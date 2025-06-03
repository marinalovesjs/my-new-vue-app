let tasks = [];

for (let i = 0; i < 3; i++) {
    let task = prompt("Введите задачу #" + (i + 1));
    tasks.push(task);
}

alert("Твой список задач:\n- " + tasks.join("\n- "));
console.log("Список задач: ", tasks);
