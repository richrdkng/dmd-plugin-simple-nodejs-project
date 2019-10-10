'use strict'

const path = require('path')
const pkg = require('../package.json')
const lib = require(path.join(__dirname, '../', pkg.main))

describe('dmd plugin', () => {
  test('proper path of package.json ".main"', () => {
    expect(lib).toBeInstanceOf(Function)
  })

  test('proper object returned', () => {
    const plugin = lib()

    expect(plugin).toBeInstanceOf(Object)
    expect(plugin).toHaveProperty('partial')
    expect(plugin).toHaveProperty('helper')

    expect(typeof plugin.partial).toBe('string')
    expect(typeof plugin.helper).toBe('string')

    expect(plugin.partial.length).toBeGreaterThan(0)
    expect(plugin.helper.length).toBeGreaterThan(0)
  })
})
