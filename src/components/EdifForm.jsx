import { useLocation } from 'react-router-dom'
import { useForm } from '../components/utilities/UseForm'
import { timeParts } from './Course'
import { setData, getCourses } from './utilities/firebase/api'
import Button from 'react-bootstrap/Button'

const isValidMeets = (meets) => {
  const parts = timeParts(meets)
  return (meets === '' || (parts.days && !isNaN(parts.hours?.start) && !isNaN(parts.hours?.end)))
}

const validateCourseData = (key, val) => {
  switch (key) {
    case 'title': return /(^$|\w\w)/.test(val) ? '' : 'must be least two characters'
    case 'meets': return isValidMeets(val) ? '' : 'must be days hh:mm-hh:mm'
    default: return ''
  }
}
let courses
let allCourses

const submit = async (values) => {
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
      await setData('G03ZWyl44v7NDzYMWVQv', allCourses)
      alert('Update Done!!')
      window.location.replace('/')
    } catch (error) {
      alert(error)
    }
  }
}

const EditForm = () => {
  const { state: course } = useLocation()
  const [errors, handleSubmit] = useForm(validateCourseData, submit)
  return (
    <div
    className='mt-5'
    style={ { display: 'flex', justifyContent: 'center' }}>
    <form
    onSubmit={handleSubmit} noValidate className={errors ? 'was-validated' : null}>
        <input type="hidden" name="id" value={course.id} />
        <div className="mb-3">
        <h5> {'ID: ' + course.id}</h5>
        <label htmlFor="title" className="form-label">Course title</label>
        <input className="form-control" id="title" name="title" defaultValue={course.title} />
        <div className="invalid-feedback">{errors?.title}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="meets" className="form-label">Meeting time</label>
        <input className="form-control" id="meets" name="meets" defaultValue={course.meets} />
        <div className="invalid-feedback">{errors?.meets}</div>
      </div>
      <Button variant='primary' type='submit'>Submit</Button> <Button variant='primary' type='submit'href='/'>Go to Home</Button>
    </form>
    </div>
  )
}

export default EditForm
