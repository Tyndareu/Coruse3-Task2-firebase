import { useLocation } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import { useForm } from './UseForm'
import { submit } from './Sumit'
import { DeleteCourse } from './DeteleCourse'
import { validateCourseData } from './ValidateCourseData'
import { SignInButton } from '../../Components/SignInButton'
import { SignOutButton } from '../../Components/SignOutButton'
import { useAuthState } from 'react-firebase-hooks/auth'
import Button from 'react-bootstrap/Button'

const EditForm = () => {
  const { state: course } = useLocation()
  const [errors, handleSubmit] = useForm(validateCourseData, submit)
  const [user] = useAuthState(auth)
  return (
    <div className="mt-5" style={{ display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={handleSubmit}
        noValidate
        className={errors ? 'was-validated' : null}
      >
        <input type="hidden" name="id" value={course.id} />
        <input type="hidden" name="db" value={course.db} />
        <div className="mb-3">
          <h5> {'ID: ' + course.id}</h5>
          <label htmlFor="title" className="form-label">
            Course title
          </label>
          <input
            className="form-control"
            id="title"
            name="title"
            defaultValue={course.title}
          />
          <div className="invalid-feedback">{errors?.title}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="meets" className="form-label">
            Meeting time
          </label>
          <input
            className="form-control"
            id="meets"
            name="meets"
            defaultValue={course.meets}
          />
          <div className="invalid-feedback">{errors?.meets}</div>
        </div>
        <Button disabled={!user} variant="primary" type="submit">
          Submit
        </Button>{' '}
        <DeleteCourse db={course.db} id={course.id} />{' '}
        <Button variant="success" type="submit" href="/">
          Go to Home
        </Button>{' '}
        {user ? <SignOutButton /> : <SignInButton />}
      </form>
    </div>
  )
}

export default EditForm
