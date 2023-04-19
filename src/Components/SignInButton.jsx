import { signInWithGoogle } from '../firebase/firebase'
import { Button } from 'react-bootstrap'

export const SignInButton = () => (
    <Button className="btn btn-info m-1 p-2"
      onClick={() => { signInWithGoogle() }}>Sign In</Button>
)
