var winMaker = require('./lib/winMaker');

module.exports = function (script) {
  var win = winMaker();
  process.nextTick(function () {
    new Function('window', 'with (window) {\n' + script + '\n}').call(win, win);
  });
  return win;
}