"use strict";

import gulp from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";

const sources = [
    "src/**/*.js"
];

gulp.task("scripts", () => {
    return gulp.src(sources)
        .pipe(sourcemaps.init())
        .pipe(babel({stage: 0, optional: ["utility.inlineEnvironmentVariables"]}))
        .on("error", notify.onError({title: "scripts"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(".tmp"));
});

gulp.task("scripts:watch", () => {
    return gulp.watch(sources, ["scripts"]);
});
