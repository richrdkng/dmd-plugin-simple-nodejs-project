'use strict'

const path = require('path')
const pkg = require('../package.json')
const lib = require(path.join(__dirname, '../', pkg.main))
const root = path.join(__dirname, '../')

describe('helpers', () => {
  test('proper path', () => {
    const plugin = lib()
    const helper = plugin.helper

    expect(helper).toBe(path.join(root, '/lib/helpers/**/*.js'))
  })

  test('generatedDate', () => {
    const helper = require(path.join(root, '/lib/helpers/helper.js'))

    expect(helper.generatedDate).toBeInstanceOf(Function)
    expect(helper.generatedDate()).toBe(new Date().toUTCString())
  })
})
