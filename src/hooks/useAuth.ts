import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

function useAuth() {
  const [user, setUser] = useState(null)

  const signOut = () => {
    Auth.signOut()
    setUser(null)
  }

  const fetchUser = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch((err) => setUser(null))
  }

  useEffect(() => {
    fetchUser()

    Hub.listen('auth', (data) => {
      switch (data?.payload?.event) {
        case 'signIn':
        case 'signUp':
          fetchUser()
          break
        case 'signOut':
          setUser(null)
          break
      }
    })
  }, [])

  return [user, signOut]
}

export default useAuth
