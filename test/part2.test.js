var assert = require('assert');
const {executeCommand} = require('../part2');


describe('Part 2 Test', function () {

    it('Command : "^v" should return 3 ', function () {
        assert.equal(executeCommand('^v'),3);
    });

    it('Command : "^>v<" should return 3', function () {
        assert.equal(executeCommand('^>v<'),3);
    });

    it('Command : "^v^v^v^v^v" should return 11', function () {
        assert.equal(executeCommand('^v^v^v^v^v'),11);
    });
  
});