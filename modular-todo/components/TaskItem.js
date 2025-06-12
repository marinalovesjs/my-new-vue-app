export default {
    props: ['task'],
    emits: ['toggle'],
    template: `
    <li>
      <input type="checkbox" :checked="task.done" @change="$emit('toggle')" />
      <span :class="{ done: task.done }">{{ task.text }}</span>
    </li>
  `
};
