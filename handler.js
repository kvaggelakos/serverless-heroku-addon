import herokuCreate from './src/heroku/create'
import herokuDestroy from './src/heroku/destroy'
import herokuUpdate from './src/heroku/update'


export function test(event, context, callback) {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify({isOffline: process.env.IS_OFFLINE}),
    }
    callback(null, response)
  } catch (error) {
    callback(error)
  }
}

export function herokuResourcesCreate(event, context, callback) {
  return herokuCreate(event, context, callback)
}
export function herokuResourcesDestroy(event, context, callback) {
  return herokuDestroy(event, context, callback)
}
export function herokuResourcesUpdate(event, context, callback) {
  return herokuUpdate(event, context, callback)
}