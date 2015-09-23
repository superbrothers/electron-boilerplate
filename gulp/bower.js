"use strict";

import gulp from "gulp";
import inject from "gulp-inject";
import mainBowerFiles from "main-bower-files";

const sources = ["src/styles/vendor.scss"];

gulp.task("bower:sass", () => {
    return gulp.src(sources)
        .pipe(inject(
            gulp.src(mainBowerFiles({filter: "**/*.scss"}), {base: "bower_components", read: false}),
            {
                relative: true
            }
        ))
        .pipe(gulp.dest("src/styles"));
});
