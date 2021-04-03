import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { AmplifySignOut } from '@aws-amplify/ui-react'

import Authenticator from '../src/components/Authenticator'

function Profile() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // Access the user session on the client
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user)
        setUser(user)
      })
      .catch((err) => setUser(null))
  }, [])
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
