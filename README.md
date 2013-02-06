[![Build Status](https://travis-ci.org/aleafs/interval.png?branch=master&_s=2kklf9242035)](https://travis-ci.org/aleafs/interval)

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

## License

MIT

