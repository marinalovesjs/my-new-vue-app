const { createApp } = Vue;

createApp({
    data() {
        return {
            filter: 'all',
            tasks: [
                { text: 'Выучить Vue', done: true },
                { text: 'Сделать фильтр', done: false },
                { text: 'Запушить проект', done: false }
            ]
        };
    },
    computed: {
        filteredTasks() {
            if (this.filter === 'all') return this.tasks;
            if (this.filter === 'done') return this.tasks.filter(t => t.done);
            if (this.filter === 'active') return this.tasks.filter(t => !t.done);
        },
        doneCount() {
            return this.tasks.reduce((count, task) => task.done ? count + 1 : count, 0);
        },
        remainingCount() {
            return this.tasks.length - this.doneCount;
        }
    }
}).mount('#app');
