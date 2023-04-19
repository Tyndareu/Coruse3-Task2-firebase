import Button from 'react-bootstrap/Button'
import { deleteCourse } from '../../firebase/api'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'

export const DeleteCourse = ({ db, id }) => {
  const [user] = useAuthState(auth)
  const handleDelete = async (db, id) => {
    if (window.confirm(`Delete ${id}?`)) {
      try {
        await deleteCourse(db)
        alert('Delete Done!!')
        window.location.replace('/')
      } catch (err) {
        alert(err)
      }
    }
  }
  return (
    <Button
    disabled={!user}
    onClick={() => handleDelete(db, id)}
    variant="danger">
      Delete
    </Button>
  )
}
