<template>
  <div id="app">
    <ToDo />
    <Notes />
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import Notes from './components/Notes.vue'

export default {
  components: {
    ToDo,
    Notes
  }
}
</script>
