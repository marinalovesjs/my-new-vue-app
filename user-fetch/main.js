console.log("🟢 main.js загружен");
const { createApp } = Vue;

createApp({
    data() {
        return {
            users: [],
            loading: false,
            error: null
        };
    },
    methods: {
        async fetchUsers() {
            this.loading = true;
            this.error = null;
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) throw new Error("Ошибка загрузки данных");
                this.users = await res.json();
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        console.log("✅ Приложение Vue запущено");
        this.fetchUsers();
    }

}).mount('#app');
