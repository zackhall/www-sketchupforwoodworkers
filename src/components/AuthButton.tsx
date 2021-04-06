import React from 'react'
import useAuth from '../hooks/useAuth'
import Link from 'next/link'

const AuthButton: React.FC<{}> = () => {
  const [user, signOut] = useAuth()

  return (
    <span className='uppercase pointer text-sm'>
      {user && (
        <button onClick={signOut}>
          <span className='uppercase pointer text-sm'>Logout</span>
        </button>
      )}
      {!user && (
        <Link href='/auth'>
          <span className='uppercase pointer text-sm'>Login/Register</span>
        </Link>
      )}
    </span>
  )
}

export default AuthButton
