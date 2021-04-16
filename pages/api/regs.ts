import Amplify, { APIClass, withSSRContext } from 'aws-amplify'
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql'
import config from '../../src/aws-exports.js'

// Amplify SSR configuration needs to be enabled within each API route
Amplify.configure({ ...config, ssr: true })

// import { CreateSubsInput } from '../src/API'
import * as queries from '../../src/graphql/queries'
import * as mutations from '../../src/graphql/mutations'

export default async (req, res) => {
  const AwsApi: APIClass = withSSRContext({ req }).API
  try {
    const subs = await AwsApi.graphql({
      query: queries.listRegistrations,
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })
    res.json({ subs })
  } catch (err) {
    console.log(err)
    res.statusCode = 200
    res.json({ subs: null })
  }
}
