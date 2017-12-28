
export function errorResponse(statusCode, message) {
  return {
    statusCode,
    body: JSON.stringify({
      statusCode,
      message
    })
  }
}

export function json(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body)
  }
}