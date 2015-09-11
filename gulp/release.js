"use strict";

import gulp from "gulp";
import packager from "electron-packager";
import install from "gulp-install";
import runSequence from "run-sequence";
import info from "../package.json";
import electronInfo from "../node_modules/electron-prebuilt/package.json";

gulp.task("install", () => {
    return gulp.src([".tmp/package.json"])
        .pipe(install({production: true}));
});

gulp.task("release", callback => {
    return runSequence.use(gulp)("build", "install", () => {
        packager({
            dir: ".tmp",
            name: info.name,
            platform: "darwin",
            arch: "ia32,x64",
            version: electronInfo.version,
            out: "release",
            cache: ".cache"
        }, callback);
    });
});
