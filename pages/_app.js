import '../styles/application.css'
import '../styles/globals.css'
import Layout from './_layout'

import Amplify from 'aws-amplify'
import config from '../src/aws-exports'

Amplify.configure({
  ...config,
  ssr: true,
})

// const client = new AWSAppSyncClient({
//   url: awsconfig.aws_appsync_graphqlEndpoint,
//   region: awsconfig.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
//     jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
//   },
// });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
