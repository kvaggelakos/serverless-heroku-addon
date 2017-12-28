
export function getTable() {
  return process.env.HEROKU_RESOURCES_TABLE
}

export function configBody(user) {
  return {
    SERVERLESS_HEROKU_ADDON_KEY: user.apiKey
  }
}

export function isAuthenticated(event) {

  // Get request and request headers
  const headers = event.headers

  // Configure authentication
  const authUser = process.env.HEROKU_USERNAME
  const authPass = process.env.HEROKU_PASSWORD

  // Construct the Basic Auth string
  const authString = 'Basic ' + new Buffer(authUser + ':' + authPass).toString('base64')

  // Require Basic authentication
  return headers.Authorization === authString
}