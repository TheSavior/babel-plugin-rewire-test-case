var proxyquire = require('proxyquireify')(require);

var testModule = proxyquire('./other_file', {
  './imported_file': 'Success'
});

if (testModule === 'Failed') {
  throw new Error('Result was \'Failed\'. File loaded with something other than require was not found');
} else {
  console.log('Result was a success. File found and included in the bundle');
}
