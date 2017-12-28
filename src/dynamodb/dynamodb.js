import AWS from 'aws-sdk'

export const isOffline = () => {
  return !!process.env.IS_OFFLINE
}

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000"
}

export function getDynamo() {
  return isOffline() ? new AWS.DynamoDB(options) : new AWS.DynamoDB()
}

export function getDocumentClient() {
  return isOffline() ? new AWS.DynamoDB.DocumentClient(options) : new AWS.DynamoDB.DocumentClient()
}