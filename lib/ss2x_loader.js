var util = require('./util');

// browser specific modules
util.crypto.lib = require('crypto-browserify');
util.Buffer = require('buffer/').Buffer;
util.url = require('url/');
util.querystring = require('querystring/');

var AWS = require('./core');

// Use default API loader function
require('./api_loader');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/ss2x_parser');

// Load the XHR HttpClient
require('./http/ss2x');

// Load fixes for SuiteScript
require('./ss-fix');

if (typeof process === 'undefined') {
  process = {
    browser: true
  };
}

// this one is declared by builder script
if (NS !== undefined) {
  AWS.NSTrace = require('./ss_trace');
  NS.AWS = AWS;
}
