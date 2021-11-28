// import firebase from 'firebase'
// ↓fbVersion9からやり方が変わったらしい。
// https://qiita.com/kawa31/items/77443eb231405a2bbf7d
import { initializeApp } from 'firebase/app'

const config = {
  projectId: process.env.FIREBASE_PROJECT_ID,
}

const firebaseApp = initializeApp(config)

export default firebaseApp

// if (!firebase.apps.length) {
//   firebase.initilizeApp(config)
// }

// export default firebase
