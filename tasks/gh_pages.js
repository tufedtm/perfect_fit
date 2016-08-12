'use strict';

import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'

gulp.task('gh_pages', ['clear', 'template', 'style', 'script', 'static'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      remoteUrl : 'https://github.com/tufedtm/perfect_fit.git'
    }));
});
