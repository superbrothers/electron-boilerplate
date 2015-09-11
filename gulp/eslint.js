"use strict";

import gulp from "gulp";
import eslint from "gulp-eslint";
import notify from "gulp-notify";

const sources = [
    "gulpfile.babel.js",
    "gulp/**/*.js",
    "src/**/*.js"
];

gulp.task("eslint", () => {
    return gulp.src(sources)
        .pipe(eslint())
        .pipe(eslint.format())
        .on("error", notify.onError({title: "eslint"}));
});

gulp.task("eslint:watch", () => {
    return gulp.watch(sources, ["eslint"]);
});
