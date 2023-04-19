
import { firebaseSignOut } from '../firebase/firebase'
import { Button } from 'react-bootstrap'

export const SignOutButton = () => (
    <Button className="btn btn-info m-1 p-2"
          onClick={() => firebaseSignOut() }>Sign Out</Button>
)
