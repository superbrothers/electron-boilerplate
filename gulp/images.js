"use strict";

import gulp from "gulp";
import mainBowerFiles from "main-bower-files";
import merge from "merge-stream";

const sources = [
    "src/images/*.*"
];

gulp.task('images', function () {
    return gulp.src(sources)
        .pipe(gulp.dest(".tmp/images/"));
});

gulp.task("images:watch", () => {
    return gulp.watch(sources, ["images"]);
});
