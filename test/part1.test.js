var assert = require('assert');
const {executeCommand} = require('../part1');

describe('Part 1 Test', function () {

    it('Command : ">" should return 2 ', function () {
        assert.equal(executeCommand('>'),2);
    });

    it('Command : "^>v<" should return 4', function () {
        assert.equal(executeCommand('^>v<'),4);
    });

    it('Command : "^v^v^v^v^v" should return 2', function () {
        assert.equal(executeCommand('^v^v^v^v^v'),2);
    });
  
});
