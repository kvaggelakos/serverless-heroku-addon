import { getDocumentClient } from '../dynamodb/dynamodb'
import { errorResponse, json } from '../api/common'
import { isAuthenticated , getTable} from './common'

export default function(event, context, callback) {

  if (!isAuthenticated(event)) {
    return callback(null, errorResponse(401, 'Not authorized to do this action'))
  }

  const params = {
    TableName: getTable(),
    Key: {
      id: event.pathParameters.id
    }
  }

  getDocumentClient().delete(params, (error) => {
    if (error) {
      console.error(error)
      return callback(null, errorResponse(500, 'Something went wrong when creating user'))
    }

    return callback(null, json(200, {
      status: "OK"
    }))
  });
}