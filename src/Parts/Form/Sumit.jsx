import { setData, getCourses } from '../../firebase/api'

let courses
let allCourses
export const submit = async (values) => {
  const AllCourses = async () => {
    const querySnapshot = await getCourses()
    querySnapshot.forEach((doc) => {
      allCourses = doc.data()
    })
    courses = ((allCourses.courses))
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].id === values.id) {
        allCourses.courses[i].meets = values.meets
        allCourses.courses[i].title = values.title
      }
    }
  }

  if (window.confirm(`Change ${values.id} to ${values.title}: ${values.meets}`)) {
    await AllCourses()
    try {
      await setData('cf7fY1rTfCPB56VicCR1', allCourses)
      alert('Update Done!!')
      window.location.replace('/')
    } catch (error) {
      alert(error)
    }
  }
}
