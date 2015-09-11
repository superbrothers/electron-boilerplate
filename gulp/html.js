"use strict";

import gulp from "gulp";
import inject from "gulp-inject";
import rename from "gulp-rename";

gulp.task("html", () => {
    return gulp.src("src/index.html")
        .pipe(
            inject(
                gulp.src([
                    "src/styles/**/*.scss",
                    "!src/styles/vendor.scss"
                ], {read: false})
                .pipe(
                    rename({extname: ".css"})
                ),
                {relative: true}
            )
        )
        .pipe(gulp.dest("src"));
});
