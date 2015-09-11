"use strict";

import gulp from "gulp";
import mainBowerFiles from "main-bower-files";
import merge from "merge-stream";

const sources = ["package.json", "src/index.html"];

gulp.task("copy", () => {
    return merge(
            gulp.src(sources),
            gulp.src(
                mainBowerFiles({
                    filter: "**/*.{eot,svg,ttf,woff,woff2}"
                }),
                {base: "src"}
            )
        )
        .pipe(gulp.dest(".tmp"));
});

gulp.task("copy:watch", () => {
    return gulp.watch(sources, ["copy"]);
});
