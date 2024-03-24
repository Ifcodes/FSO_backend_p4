const { test, describe } = require('node:test')
const assert = require('node:assert')
const { dummyList } = require('../utils/list_helpers')

test('should return 1', () => {
    assert.strictEqual(dummyList([]), 1)
  }) 