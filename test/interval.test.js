/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

var should = require('should');
var loops = require(__dirname + '/../');

describe('async setinterval interface', function () {

  /* {{{ should_loops_works_fine() */
  it('should_loops_works_fine', function (done) {

    var _MESSAGES = [];

    var num = 5;
    var _me = loops.create(function (a, b) {
      _MESSAGES.push(a + b);
      process.nextTick(function () {
        num--;
        if (num === 0) {
          _MESSAGES.should.eql([3, 3, 3, 7, 7]);
          done();
        } else if (num === 2) {
          _me.stop();
          _MESSAGES.should.eql([3, 3, 3]);
          setTimeout(function () {
            _me.stop();
            _me.run(3, 4);
          }, 22);
        } else {
          _me.next();
        }
      });
    }, {'interval' : 10});

    _me.run(1, 2);
    _me.run(2, 3);    /**<  ignore  */
  });
  /* }}} */

});

