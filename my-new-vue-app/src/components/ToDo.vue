<template>
  <div>
    <h2>Мой ToDo список</h2>

    <input v-model="newTask" @keyup.enter="addTask" placeholder="Новая задача" />
    <button @click="addTask">Добавить</button>

    <div>
      <button @click="currentFilter = 'all'">Все</button>
      <button @click="currentFilter = 'active'">Активные</button>
      <button @click="currentFilter = 'completed'">Завершённые</button>
    </div>

    <ul>
      <li v-for="task in filteredTasks" :key="task.id">
        <label>
          <input type="checkbox" v-model="task.done" />
          <span :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
            {{ task.text }}
          </span>
        </label>
        <button @click="deleteTask(task.id)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      currentFilter: 'all',
      tasks: []
    };
  },
  computed: {
    filteredTasks() {
      if (this.currentFilter === 'completed') {
        return this.tasks.filter(task => task.done);
      } else if (this.currentFilter === 'active') {
        return this.tasks.filter(task => !task.done);
      }
      return this.tasks;
    }
  },
  methods: {
    addTask() {
      const text = this.newTask.trim();
      if (text) {
        this.tasks.push({
          id: Date.now(),
          text,
          done: false
        });
        this.newTask = '';
        this.saveTasks();
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    loadTasks() {
      const saved = localStorage.getItem('tasks');
      if (saved) {
        this.tasks = JSON.parse(saved);
      }
    }
  },
  mounted() {
    this.loadTasks();
  }
};
</script>

<style scoped>
input {
  margin: 8px;
}
button {
  margin: 4px;
}
</style>
