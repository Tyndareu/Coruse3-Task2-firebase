
import { firebaseSignOut } from '../firebase/firebase'
import { Button } from 'react-bootstrap'

export const SignOutButton = () => (
    <Button className="btn btn-primary m-1 p-2"
          onClick={() => firebaseSignOut() }>Sign Out</Button>
)
