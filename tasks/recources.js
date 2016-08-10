'use strict';

import gulp from 'gulp'
import SRC_DIR from './CONST'

gulp.task('resources', function () {
  return gulp.src(SRC_DIR.resources)
    .pipe(gulp.dest(SRC_DIR.dest + '/resources'))
});
