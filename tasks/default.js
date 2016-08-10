'use strict';

import gulp from 'gulp'
import SRC_DIR from './CONST'

gulp.task('default', ['clear', 'template', 'style', 'serve'], function () {
  gulp.watch(SRC_DIR.style_watch, ['style']);
  gulp.watch(SRC_DIR.template_watch, ['template']);
});
