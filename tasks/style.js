'use strict';

import gulp from 'gulp'
import postcss from 'gulp-postcss'
import stylus from 'gulp-stylus'
import sourcemaps from 'gulp-sourcemaps'
import {get as bsGet} from 'browser-sync';
import SRC_DIR from './CONST'

const browserSync = bsGet('server');

gulp.task('style', function () {
  return gulp.src(SRC_DIR.style_src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
      require('autoprefixer'),
      require('postcss-browser-reporter')({
        selector: 'body:before'
      })
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SRC_DIR.dest))
    .pipe(browserSync.stream())
});

