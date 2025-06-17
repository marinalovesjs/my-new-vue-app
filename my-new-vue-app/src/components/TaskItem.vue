<template>
  <li>
    <span>{{ task.text }}</span>
    <button @click="$emit('edit')">✏️</button>
    <button @click="$emit('delete')">❌</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  }
}
</script>
