import Button from 'react-bootstrap/Button'
import { deleteCourse } from '../../firebase/api'

export const DeleteCourse = ({ db, id }) => {
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
    onClick={() => handleDelete(db, id)}
    variant="danger">
      Delete
    </Button>
  )
}
