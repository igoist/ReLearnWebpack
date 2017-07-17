let gulp = require('gulp');
let path = require('path');
let gutil = require('gulp-util');
let webpack = require('webpack');
let webpackConfig = require('./webpack.config.js');

let devCompiler = webpack(webpackConfig);

gulp.task('webpack', function() {
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build-js', err);
      gutil.log('[webpack:build-js]', stats.toString({
        colors: true,
        progress:true
      }));
    // callback
    gutil.log('Success');
  });
});



gulp.task('default', [
  'webpack'
]);