import test from 'ava'

import { isOffline } from '../../src/dynamodb/dynamodb'

test('can check isOffline env', t => {
  process.env.IS_OFFLINE = 'true'
  t.true(isOffline())
})