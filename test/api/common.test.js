import test from 'ava'

import { json, errorResponse } from '../../src/api/common'

test('builds a json structure', t => {
  t.deepEqual(
    json(200, {status: 'ok'}),
    { statusCode: 200, body: '{"status":"ok"}' }
  )
})

test('builds an errorResponse with a message', t => {
  t.deepEqual(
    errorResponse(401, 'Unauthorized to do such things'),
    { statusCode: 401, body: '{"statusCode":401,"message":"Unauthorized to do such things"}' }
  )
})
