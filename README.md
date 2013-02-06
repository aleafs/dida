[![Build Status](https://secure.travis-ci.org/aleafs/interval.png?branch=master)](http://travis-ci.org/aleafs/interval)

## About

`interval` is a `setInterval` interface for async method.

## Install

```bash

$ npm install interval
```

## Usage

```javascript

var _me = require('interval').create(function (sql) {
  /**
   * 
   */
  _db.query(sql, function (e, res) {
    _me.next();
  });
}, {'interval' : 100});
_me.run('SELECT SLEEP(1)');

```

## License

MIT

