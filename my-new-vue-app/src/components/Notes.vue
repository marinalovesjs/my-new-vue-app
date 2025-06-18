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
h2 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

textarea {
  width: 100%;
  max-width: 400px;
  min-height: 60px;
  padding: 8px;
  border: 1px solid #aaa;
  border-radius: 6px;
  resize: vertical;
}

button {
  padding: 6px 12px;
  margin: 6px 6px 6px 0;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1976d2;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-top: 10px;
  padding: 10px;
  background-color: #f3f3f3;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
