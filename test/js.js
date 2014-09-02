var box = require('../')
  , fs = require('fs');

describe('black-box', function () {
  it('should able to setTimeout', function (done) {
    box(fs.readFileSync('test/src/setTimeout.js', { encoding: 'utf8' }))
      .once('tell', function (msg) {
        msg.should.equal('Hello world!');
        done();
      });
  });

  it('should able set up global variable', function (done) {
    box(fs.readFileSync('test/src/variable.js', { encoding: 'utf8' }))
      .once('tell', function (msg) {
        msg.should.equal('test');
        done();
      });
  });
});