<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Имя:</label>
      <input v-model.trim="form.name" type="text" />
    </div>

    <div>
      <label>Email:</label>
      <input v-model.trim="form.email" type="email" />
    </div>

    <div>
      <label>Сообщение:</label>
      <textarea v-model.lazy="form.message" rows="4" />
    </div>

    <div>
      <label>
        <input type="checkbox" v-model="form.subscribe" />
        Подписаться на рассылку
      </label>
    </div>

    <button :disabled="!isValid">Отправить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        subscribe: false
      }
    };
  },
  computed: {
    isValid() {
      return (
          this.form.name.length >= 2 &&
          this.form.email.includes('@') &&
          this.form.message.length >= 10
      );
    }
  },
  methods: {
    handleSubmit() {
      alert(`Спасибо, ${this.form.name}! Ваше сообщение отправлено.`);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 2rem auto;
}
input, textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
