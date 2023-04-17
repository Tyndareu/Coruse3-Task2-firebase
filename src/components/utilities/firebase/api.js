import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs
} from 'firebase/firestore'
import { db } from './firebase'

const collectionName = 'courses'

export const getCourse = () => getDocs(collection(db, collectionName))
export const saveCurses = (newPedido) =>
  addDoc(collection(db, collectionName), newPedido)
