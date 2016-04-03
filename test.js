var test = require('tape');
var exclaim = require('./');

test('Exclaim', function(t) {
  t.equals(exclaim('hello'), 'hello!', 'add exclamation to hello');
  t.end();
});