<template>
  <div>
    <v-btn @click="addTask">Add</v-btn>
    <v-btn @click="deleteTask">Delete</v-btn>
  </div>
</template>
<script>
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore'
export default {
  data() {
    return {
      id: '001',
      name: 'Test Task',
    }
  },
  methods: {
    async addTask() {
      const db = getFirestore()
      const docRef = await addDoc(collection(db, 'tasks'), {
        id: this.id,
        name: this.name,
      })
      console.log('Document written with ID: ', docRef.id)
    },
    deleteTask() {
      const db = getFirestore()
      deleteDoc(doc(db, 'tasks', 'Ft4Mb2fUC6C4wXytwleC'))
    },
  },
}
</script>
