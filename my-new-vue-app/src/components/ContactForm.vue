<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Имя:</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('Имя:', this.name);
      console.log('Email:', this.email);
    }
  }
}
</script>
