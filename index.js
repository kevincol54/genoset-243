// var dna = require('./dna.json')
var gql = require('gql')
var _ = require('lodash')

module.exports = function (dna) {
  var queries = [
    gql.has('rs1137100', 'A'),
    gql.has('rs627839', 'T'),
    gql.has('rs2070874', 'T'),
    gql.has('rs10778534', 'C'),
    gql.has('rs5993891', 'T')
  ]

  var results = _.map(queries, function (query) {
    return query(dna)
  })

  function countArray (array) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
      if (array[i] === true) {
        count++
      }
    }
    return count
  }

  return countArray(results) >= 4
}
