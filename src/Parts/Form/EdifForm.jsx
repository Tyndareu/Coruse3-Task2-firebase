import { useLocation } from 'react-router-dom'
import { useForm } from './UseForm'
import { submit } from './Sumit'
import Button from 'react-bootstrap/Button'
import { validateCourseData } from './ValidateCourseData'

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
