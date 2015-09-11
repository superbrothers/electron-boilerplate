"use strict";

import gulp from "gulp";

gulp.task("watch", [
    "copy:watch",
    "eslint:watch",
    "scripts:watch",
    "styles:watch"
]);
