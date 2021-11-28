import { getFirestore, serverTimestamp, collection } from 'firebase/firestore'
import { firestoreAction } from 'vuexfire'
import firebaseApp from '~/plugins/firebase'

const db = getFirestore(firebaseApp)
const todosRef = collection(db, 'todos') // collectionは「todos」を利用

export const state = () => ({
  todos: [],
})

// firestoreAction:vuexfireが用意しているメソッド
export const actions = {
  // 初期設定関連付け:stateのtodosとcollectionへの参照がバインドされる。
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('todos', todosRef)
  }),

  // 追加(第2引数はtodoの名前)
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      todosRef.add({
        name,
        done: false,
        createdAt: serverTimestamp(),
      })
    }
  }),

  // 削除
  // contexはstoreインスタンスが持つプロパティ、メソッドを保持するオブジェクト
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
  }),

  // チェックボックスで完了、未完了反転処理
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done,
    })
  }),
}
