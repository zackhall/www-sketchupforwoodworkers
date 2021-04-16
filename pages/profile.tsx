import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
import { API } from 'aws-amplify'
import { useEffect } from 'react'

import { CreateRegistrationInput } from '../src/API'
import * as queries from '../src/graphql/queries'
import * as mutations from '../src/graphql/mutations'
import useAuth from '../src/hooks/useAuth'

function Profile() {
  const [user] = useAuth()

  console.log(API.Credentials)
  console.log({ user })

  useEffect(() => {
    async function fetchRegistrations() {
      const registrations = await API.graphql({
        query: queries.listRegistrations,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })
      console.log(registrations)
    }

    fetchRegistrations()
  })

  const createRegistration = () => {
    const input: CreateRegistrationInput = {
      userId: user.getUsername(),
      courseName: 'default',
    }

    ;(API.graphql({
      query: mutations.createRegistration,
      variables: {
        input,
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    }) as Promise<GraphQLResult>).then((res) => console.log(res))
  }

  // useEffect(() => {
  //   async function createSub() {
  //     const input: CreateSubsInput = {
  //       name: '1',
  //       subscribed: true,
  //       description: 'hello world',
  //     }

  //     const res = await API.graphql({
  //       query: mutations.createSubs,
  //       variables: {
  //         input,
  //       },
  //       auth: 'AMAZON_COGNITO_USER_POOLS',
  //     })
  //     console.log(res)
  //   }

  //   createSub()
  // })

  return (
    <div>
      {user && <h1>Welcome, {user.username}</h1>}
      <button onClick={createRegistration}>Create Registration</button>
    </div>
  )
}

export default Profile
