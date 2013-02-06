[![Build Status](https://secure.travis-ci.org/aleafs/interval.png?branch=master)](http://travis-ci.org/aleafs/interval)

## About

`interval` is a `setInterval` interface for async method.

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

