function defaultTask(cb) {
  // place code for your default task here
  cb();
 }

// gulp.task('default', function() {
//   gulp.src('./src/*.*')
//       .pipe(gulp.dest('./dist/*.*'))
// });

exports.default = defaultTask
