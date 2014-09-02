var EventEmitter = require('events').EventEmitter
  , util = require('util');

function Window() {
  EventEmitter.call(this);
  this.Infinity = Infinity;
  this.self = this;
  this.Array = Array;
  this.ArrayBuffer = ArrayBuffer;
  this.JSON = JSON;
  this.console = console;
  this.decodeURI = decodeURI;
  this.decodeURIComponent = decodeURIComponent;
  this.encodeURI = encodeURI;
  this.encodeURI = encodeURIComponent;
  this.eval = eval;
  this.name = "";
  this.tell = function (msg) {
    this.emit('tell', msg);
  };
}
util.inherits(Window, EventEmitter);
Window.prototype.setTimeout = setTimeout;
Window.prototype.setInterval = setInterval;

module.exports = function (context) {
  return new Window();
}