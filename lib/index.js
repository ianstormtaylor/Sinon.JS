module.exports = require('./sinon');
module.exports.spy = require("./sinon/spy");
module.exports.spyCall = require("./sinon/call");
module.exports.stub = require("./sinon/stub");
module.exports.mock = require("./sinon/mock");
module.exports.collection = require("./sinon/collection");
module.exports.assert = require("./sinon/assert");
module.exports.sandbox = require("./sinon/sandbox");
module.exports.test = require("./sinon/test");
module.exports.testCase = require("./sinon/test_case");
module.exports.assert = require("./sinon/assert");
module.exports.match = require("./sinon/match");

// the hacks below are needed for sinon.fakeServer support... this was so
// tough to get working... this library is like a minefield :(
module.exports.extend(module.exports, require("./sinon/util/event"));

module.exports.extend(module.exports,
    require("./sinon/util/fake_xml_http_request"),
    require("./sinon/util/fake_server"));
