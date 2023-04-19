import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  deleteDoc,
  getDocs
} from 'firebase/firestore'
import { db } from './firebase'

const collectionName = 'courses'

export const getCourses = () => getDocs(collection(db, collectionName))
export const getCourse = (id) => getDoc(doc(db, collectionName, id))
export const deleteCourse = (id) => deleteDoc(doc(db, collectionName, id))

export const setData = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields)

export const newCourse = (newCourse) =>
  addDoc(collection(db, collectionName), newCourse)
