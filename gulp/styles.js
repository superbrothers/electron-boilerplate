"use strict";

import gulp from "gulp";
import sass from "gulp-sass";
import path from "path";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";

const sources = ["src/styles/**/*.scss"];

gulp.task("styles", () => {
    return gulp.src(sources)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: [path.resolve(__dirname, "../src/bower_components")]
        }))
        .on("error", notify.onError({title: "styles"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(".tmp/styles"));
});

gulp.task("styles:watch", () => {
    return gulp.watch(sources, ["styles"]);
});
