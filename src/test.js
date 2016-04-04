var proxyquire = require('proxyquireify')(require);

var testModule = proxyquire('./other_file', {
  './imported_file': 'Success'
});

console.log('Success');
