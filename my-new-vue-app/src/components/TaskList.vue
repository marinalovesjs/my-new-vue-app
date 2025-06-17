<template>
  <div>
    <h2>📝 Список задач</h2>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Новая задача" />
    <ul>
      <TaskItem
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
          @delete="deleteTask(index)"
          @edit="editTask(index)"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
  components: { TaskItem },
  data() {
    return {
      newTask: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask })
        this.newTask = ''
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    editTask(index) {
      const newText = prompt('Изменить задачу:', this.tasks[index].text)
      if (newText !== null) this.tasks[index].text = newText
    }
  }
}
</script>
