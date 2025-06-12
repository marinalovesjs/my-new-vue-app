import TaskItem from './TaskItem.js';

export default {
    components: { TaskItem },
    data() {
        return {
            tasks: [
                { id: 1, text: 'Сделать проект', done: false },
                { id: 2, text: 'Разбить на компоненты', done: true },
            ]
        };
    },
    template: `
    <ul>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="task.done = !task.done"
      />
    </ul>
  `
};
