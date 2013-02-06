/* vim: set expandtab tabstop=2 shiftwidth=2 foldmethod=marker: */

"use strict";

exports.create = function (fn, options) {

  var confs = {
    'interval' : 100,
    'delay' : 0,
  };
  for (var i in options) {
    confs[i] = options[i];
  }

  /**
   * @ pause switch
   */
  var pause = true;

  /**
   * @ timer
   */
  var timer = null;

  /**
   * @ arguments for fn
   */
  var _args = null;

  /**
   * @ once function
   */
  var _once = function () {
    fn.apply(null, _args);
  };

  var _me = {};

  /* {{{ public function next() */
  _me.next = function () {
    if (!pause) {
      timer = setTimeout(_once, confs.interval);
    }
  };
  /* }}} */

  /* {{{ public function stop() */
  _me.stop = function () {
    clearTimeout(timer);
    timer = null;
    pause = true;
    return _me;
  };
  /* }}} */

  /* {{{ public function run() */
  _me.run = function () {
    if (!pause) {
      return;
    }
    _args = arguments;
    pause = false;
    if (!confs.delay) {
      _once();
    } else if (confs.delay > 0) {
      setTimeout(_once, confs.delay);
    } else {
      setTimeout(_once, Math.round(confs.interval * Math.random()));
    }
  };
  /* }}} */

  return _me;
};

