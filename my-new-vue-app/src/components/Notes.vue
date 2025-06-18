<template>
  <div>
    <h2>Мои заметки</h2>

    <textarea v-model="newNote" placeholder="Введите заметку..."></textarea>
    <br />
    <button @click="addNote">Добавить</button>

    <ul>
      <li v-for="(note, index) in notes" :key="index">
        <div v-if="editingIndex === index">
          <textarea v-model="editedNote"></textarea>
          <button @click="saveEdit(index)">Сохранить</button>
        </div>
        <div v-else>
          {{ note }}
          <button @click="startEdit(index)">✏️</button>
          <button @click="deleteNote(index)">🗑</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: '',
      editedNote: '',
      editingIndex: null,
      notes: []
    };
  },
  methods: {
    addNote() {
      const note = this.newNote.trim();
      if (note) {
        this.notes.push(note);
        this.newNote = '';
        this.saveNotes();
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
      this.saveNotes();
    },
    startEdit(index) {
      this.editingIndex = index;
      this.editedNote = this.notes[index];
    },
    saveEdit(index) {
      if (this.editedNote.trim()) {
        this.notes[index] = this.editedNote.trim();
        this.editingIndex = null;
        this.saveNotes();
      }
    },
    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    loadNotes() {
      const saved = localStorage.getItem('notes');
      if (saved) {
        this.notes = JSON.parse(saved);
      }
    }
  },
  mounted() {
    this.loadNotes();
  }
};
</script>

<style scoped>
textarea {
  width: 300px;
  height: 60px;
  margin: 8px 0;
}
button {
  margin: 4px;
}
</style>
