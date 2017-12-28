import { getDocumentClient } from '../dynamodb/dynamodb'
import { errorResponse, json } from '../api/common'
import { configBody, isAuthenticated, getTable } from './common'

export default function(event, context, callback) {

  if (!isAuthenticated(event)) {
    return callback(null, errorResponse(401, 'Not authorized to do this action'))
  }

  const data = JSON.parse(event.body)

  if (typeof data.plan !== 'string') {
    console.error('This is not a valid heroku call')
    return callback(null, errorResponse('invalid body', 422))
  }

  const params = {
    TableName: getTable(),
    Key: {
      id: event.pathParameters.id
    },
    ExpressionAttributeNames: {
      '#heroku_plan': 'plan',
    },
    UpdateExpression: 'set #heroku_plan = :plan',
    ExpressionAttributeValues:{
      ':plan': data.plan
    },
    ReturnValues: 'ALL_NEW'
  }

  getDocumentClient().update(params, (error, result) => {
    if (error) {
      console.error(error)
      return callback(null, errorResponse('Something went wrong when creating user'))
    }
    console.log(JSON.stringify(result))
    return callback(null, json(200, {
      config: configBody(result.Attributes),
      message: `Successfully changed to ${data.plan}`
    }))
  });
}