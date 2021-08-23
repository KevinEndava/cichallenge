var assert = require('assert')
var sum = require('../sum.js');

describe('#sum()', function() {

  context('without arguments', function() {
    it('should return 0', function() {
      assert.equal(sum(),0)
    })
  })
  
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      assert.equal(sum(1, 2, 3, 4, 5),15)
    })
    
    it('should return argument when only one argument is passed', function() {
      assert.equal(sum(5), 5)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() { 
        assert.throws(() => sum(1, 2, '3', [4], 5) , new TypeError('sum() expects only numbers.'))
        })
    })

})