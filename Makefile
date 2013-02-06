TESTS = test/*.js
REPORTER = spec
TIMEOUT = 5000
JSCOVERAGE = ./node_modules/visionmedia-jscoverage/jscoverage
MOCHA = ./node_modules/mocha/bin/mocha

test:
	@npm install
	@$(MOCHA) --reporter $(REPORTER) --timeout $(TIMEOUT) $(MOCHA_OPTS) $(TESTS)

cov:
	@npm install
	-mv -f lib lib.bak && $(JSCOVERAGE) lib.bak lib
	-$(MOCHA) --reporter html-cov --timeout $(TIMEOUT) $(MOCHA_OPTS) $(TESTS) > ./coverage.html
	-rm -rf lib && mv -f lib.bak lib

.PHONY: test
