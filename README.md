[![Build Status](https://travis-ci.org/aleafs/dida.png?branch=master)](https://travis-ci.org/aleafs/dida)

## About

`dida` is a `setInterval` interface for async method.

## Install

```bash

$ npm install dida
```

## Usage

```javascript

var _me = require('dida').create(function (sql) {
  /**
   * @ suppose an async function as _db.query
   */
  _db.query(sql, function (e, res) {
    _me.next();
  });
}, {'interval' : 100});
_me.run('SELECT SLEEP(1)');

```

or:

```javascript

var dida = require('dida');
var timer = dida.setInterval(function () {
  _db.query('SELECT SLEEP(1)', function (e, res) {
    timer.next();  
  });
}, 100);

dida.clearInterval(timer);

```

## License

MIT

