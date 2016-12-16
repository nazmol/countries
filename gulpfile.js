var gulp = require('gulp'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass');

gulp.task('webpack:build', function (done) {
  webpack(webpackConfig, function (err, stats) {
    if (err)
      throw new gutil.PluginError('webpack:build', err);

    gutil.log('[webpack:build] Completed\n' + stats.toString({
      assets: true,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: false,
      version: false
    }));
    done();
  });
});

gulp.task('styles', function() {
  gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['webpack:build', 'styles']);

