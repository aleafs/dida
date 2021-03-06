/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

var should = require('should');
var dida = require(__dirname + '/../');

describe('async setinterval interface', function () {

  /* {{{ should_interval_works_fine() */
  it('should_interval_works_fine', function (done) {

    var _MESSAGES = [];

    var num = 5;
    var _me = dida.create(function (a, b) {
      _MESSAGES.push(a + b);
      process.nextTick(function () {
        num--;
        if (num === 0) {
          _me.stop();
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
    }, {'interval' : 2});

    _me.run(1, 2);
    _me.run(2, 3);    /**<  ignore  */
  });
  /* }}} */

  /* {{{ should_aptotic_delay_works_fine() */
  it('should_aptotic_delay_works_fine', function (done) {
    var num = 2;
    var _me = dida.create(function (s) {
      _me.stop();
      (Date.now() - s).should.above(3);
      if (0 === (--num)) {
        done();
      }
      setTimeout(function () {
        _me.run(Date.now());
      }, 10);
    }, {'delay' : 5});
    _me.run(Date.now());
  });
  /* }}} */

  /**
   * XXX: HOW ?
   */
  /* {{{ should_random_delay_works_fine() */
  it('should_random_delay_works_fine', function (done) {
    var _me = dida.create(function () {
      done();
    }, {'interval' : 20, 'delay' : -1});
    _me.stop();
    _me.run();
  });
  /* }}} */

  /* {{{ should_timer_api_works_fine() */
  it('should_timer_api_works_fine', function (done) {
    var num = 2;
    var tm1 = dida.setInterval(function () {
      dida.clearInterval(num);
      dida.clearInterval({});
      if (0 === (--num)) {
        dida.clearInterval(tm1);
        setTimeout(done, 10);
      } else {
        tm1.next();
      }
    }, 3);
  });
  /* }}} */

});

