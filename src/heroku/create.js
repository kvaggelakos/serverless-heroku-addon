import { getDocumentClient } from '../dynamodb/dynamodb'
import { errorResponse, json } from '../api/common'
import { configBody, isAuthenticated, getTable } from './common'
import uuid from 'uuid'

export default function(event, context, callback) {

  if (!isAuthenticated(event)) {
    return callback(null, errorResponse(401, 'Not authorized to do this action'))
  }

  const timestamp = new Date().getTime()
  const data = JSON.parse(event.body)

  if (typeof data.uuid !== 'string') {
    console.error('This is not a valid heroku call')
    return callback(null, errorResponse(422, "invalid body"))
  }

  const params = {
    TableName: getTable(),
    Item: {
      id: data.uuid,
      plan: data.plan,
      region: data.region,
      apiKey: uuid.v4().replace(/-/g, ''),
      createdAt: timestamp,
      updatedAt: timestamp,
    }
  }

  getDocumentClient().put(params, (error) => {
    if (error) {
      console.error(error)
      return callback(null, errorResponse(500, 'Something went wrong when creating user'))
    }

    return callback(null, json(200, {
      id: params.Item.id,
      config: configBody(params.Item),
      message: 'Welcome to our service'
    }))
  })
}