'use strict';

import fs from 'fs'
import gulp from 'gulp'
import SRC_DIR from './CONST'

let rmdirAsync = function (path, callback) {
  fs.readdir(path, function (err, files) {
    if (err) {
      // Pass the error on to callback
      callback(err, []);
      return;
    }
    let wait = files.length,
      count = 0,
      folderDone = function (err) {
        count++;
        // If we cleaned out all the files, continue
        if (count >= wait || err) {
          fs.rmdir(path, callback);
        }
      };
    // Empty directory to bail early
    if (!wait) {
      folderDone();
      return;
    }

    // Remove one or more trailing slash to keep from doubling up
    path = path.replace(/\/+$/, '');
    files.forEach(function (file) {
      let curPath = path + '/' + file;
      fs.lstat(curPath, function (err, stats) {
        if (err) {
          callback(err, []);
          return;
        }
        if (stats.isDirectory()) {
          rmdirAsync(curPath, folderDone);
        } else {
          fs.unlink(curPath, folderDone);
        }
      });
    });
  });
};


gulp.task('clear', function () {
  if (fs.existsSync(SRC_DIR.dest)) {
    rmdirAsync(SRC_DIR.dest)
  }
});
