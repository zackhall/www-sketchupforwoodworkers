import { AmplifySignOut } from '@aws-amplify/ui-react'

import Authenticator from '../src/components/Authenticator'
import useAuth from '../src/hooks/useAuth'

function Profile() {
  const [user] = useAuth()
  return user ? (
    <div>
      {user && <h1>Welcome, {user.username}</h1>}
      <AmplifySignOut />
    </div>
  ) : (
    <Authenticator />
  )
}

export default Profile
