var gulp = require('gulp');
var ts = require('gulp-typescript');


var buildProject = function(name){
    var tsProject = ts.createProject("./tasks/" + name + "/tsconfig.json");
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./tasks/" + name + "/built"));
};

gulp.task('iOSBUndleIdentifier', function(){
    return buildProject("iOSBundleIdentifier");
});

gulp.task('iOSBumpVersion', function(){
    return buildProject("iOSBumpVersion");
});

gulp.task('AndroidBumpVersion', function(){
    return buildProject("AndroidBumpVersion");
});

gulp.task('AndroidPackageName', function(){
    return buildProject("AndroidPackageName");
});

gulp.task('build', ['iOSBUndleIdentifier', 'iOSBumpVersion', 'AndroidBumpVersion', 'AndroidPackageName'], function(){
    return null;
});
