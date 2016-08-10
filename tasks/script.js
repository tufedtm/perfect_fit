'use strict';

import gulp from 'gulp'
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
// import {get as bsGet} from 'browser-sync';
import SRC_DIR from './CONST'

// const browserSync = bsGet('server');

gulp.task('script', function () {
  return gulp.src(SRC_DIR.script_src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SRC_DIR.dest));
    // .pipe(browserSync.stream({match: "**/*.js"}));
});

