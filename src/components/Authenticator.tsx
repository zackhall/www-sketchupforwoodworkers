import React from 'react'
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from '@aws-amplify/ui-react'

const Authenticator = () => {
  return (
    <AmplifyAuthenticator usernameAlias='email'>
      <AmplifySignUp
        slot='sign-up'
        usernameAlias='email'
        formFields={[{ type: 'email' }, { type: 'password' }]}
      />
      <AmplifySignIn slot='sign-in' usernameAlias='email' />
    </AmplifyAuthenticator>
  )
}

export default Authenticator
