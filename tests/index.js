var test = require('tap').test

var falseyJson = require('./sampleJSON/falseyJson.json')
var truthyJson = require('./sampleJSON/truthyJson.json')

test('Gs243', function (t) {
  var falseyResults = require('../')(falseyJson)
  var truthyResults = require('../')(truthyJson)
  t.same(falseyResults, false, 'should return false if less then 4 matching SNPs')
  t.same(truthyResults, true, 'should return true if more then 3 matching SNPs')
  t.end()
})