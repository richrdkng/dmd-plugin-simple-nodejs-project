'use strict'

const path = require('path')
const pkg = require('../package.json')
const lib = require(path.join(__dirname, '../', pkg.main))
const root = path.join(__dirname, '../')

describe('partials', () => {
  test('proper path', () => {
    const plugin = lib()
    const partial = plugin.partial

    expect(partial).toBe(path.join(root, '/lib/partials/*.hbs'))
  })
})
