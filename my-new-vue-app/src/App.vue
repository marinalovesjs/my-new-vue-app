<template>
  <div>
    <h1>Контактная форма</h1>
    <ContactForm />

    <hr />

    <TaskList />
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import TaskList from './components/TaskList.vue'

export default {
  components: {
    ContactForm,
    TaskList
  }
}
</script>
