console.log('🟢 main.js запущен!');
document.getElementById('app').innerHTML = '<h1 style="color:green">🎯 main.js работает!</h1>';



import { createApp } from 'vue';

createApp({
    data() {
        return {
            newTask: '',
            tasks: []
        };
    },
    mounted() {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            this.tasks = JSON.parse(saved);
        }
    },
    methods: {
        addTask() {
            const text = this.newTask.trim();
            if (text) {
                this.tasks.push({ text, done: false });
                this.newTask = '';
                this.saveTasks();
            }
        },
        toggleDone(task) {
            task.done = !task.done;
            this.saveTasks();
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
            this.saveTasks();
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    template: `
    <div class="container">
      <h2>📝 Мой ToDo c сохранением</h2>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Новая задача..." />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span :class="{ done: task.done }" @click="toggleDone(task)">
            {{ task.text }}
          </span>
          <button @click="removeTask(index)">❌</button>
        </li>
      </ul>
    </div>
  `
}).mount('#app');
<template>
    <div>
        <h2>⏳ Живу уже {{ seconds }} секунд</h2>
    </div>
</template>

<script>
    export default {
    data() {
    return {
    seconds: 0,
    timer: null
};
},
    mounted() {
    console.log('🟢 Компонент появился в DOM');
    this.timer = setInterval(() => {
    this.seconds++;
}, 1000);
},
    unmounted() {
    console.log('🔴 Компонент исчез с экрана');
    clearInterval(this.timer);
}
};
</script>
