var path = require('path');
var fs = require('fs');
var browserify = require('browserify');
var proxyquire = require('proxyquireify');

browserify()
  .transform('babelify') // Try commenting out this line
  .plugin(proxyquire.plugin)
  .require(require.resolve('./src/test.js'), { entry: true })
  .bundle()
  .pipe(fs.createWriteStream(path.join(__dirname, 'test.bundle.js')));

/*
Note, switching the order of the transform and plugin will make this example work,
however it will fail if the code contains things that can't be read by acorn such as JSX.
*/
