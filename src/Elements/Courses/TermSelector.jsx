import { auth } from '../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignOutButton } from '../../Components/SignOutButton'
import { SignInButton } from '../../Components/SignInButton'
import { TermButton } from './TermButton'

const terms = { F: 'Fall', W: 'Winter', S: 'Spring' }

export const TermSelector = ({ term, setTerm }) => {
  const [user] = useAuthState(auth)

  return (
      <div className="btn-toolbar justify-content-center">
        <div className="btn-group">
        {
          Object.values(terms).map(
            value => <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
          )
        }
        { user ? <SignOutButton /> : <SignInButton /> }
        </div>
      </div>
  )
}
