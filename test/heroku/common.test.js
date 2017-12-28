import test from 'ava'

import { getTable, configBody, isAuthenticated} from '../../src/heroku/common'
import { isAbsolute } from 'path';

test.before(t => {
  process.env.HEROKU_RESOURCES_TABLE = 'heroku-resources-dev'
  process.env.HEROKU_USERNAME = 'user'
  process.env.HEROKU_PASSWORD = 'pass'
})

test('can get the table name from env', t => {
  t.is(getTable(), 'heroku-resources-dev')
})

test('builds a config body', t => {
  t.deepEqual(configBody({apiKey: 123}), {
    SERVERLESS_HEROKU_ADDON_KEY: 123
  })
})

test('can check for valid authentication headers', t => {
  t.true(isAuthenticated({
    headers: {
      Authorization: 'Basic dXNlcjpwYXNz'
    }
  }))
})

test('can check for invalid authentication headers', t => {
  t.false(isAuthenticated({
    headers: {
      Authorization: 'Something wrong'
    }
  }))
})