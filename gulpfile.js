const gulp = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('autoprefixer-stylus');
const concat = require('gulp-concat');

const constants = {
  source: {
    css: 'src/css/**/*.styl',
    js: 'src/js/**/*.js'
  },
  dist: {
    dir: './',
    css: 'main.css',
    js: 'main.js'
  }
};

const stylusOptions = {
  compress: true,
  'include css': true,
  use: [
    autoprefixer({
      browsers: ['ie 8', 'android 2.2', 'last 10 versions', 'iOS 7']
    })
  ]
};

/**
 * Task to compile CSS from stylus and put them into one file.
 */
gulp.task('css', () => {
  return gulp
    .src(constants.source.css)
    .pipe(stylus())
    .pipe(concat(constants.dist.css))
    .pipe(gulp.dest(constants.dist.dir));
});

/**
 * Task to compile all JS into one file.
 */
gulp.task('js', () => {
  return gulp
    .src(constants.source.js)
    .pipe(concat(constants.dist.js))
    .pipe(gulp.dest(constants.dist.dir));
});

gulp.task('watch', () => {
  gulp.watch(constants.source.css, ['css']);
  gulp.watch(constants.source.js, ['js']);
});

gulp.task('default', ['css', 'js']);

gulp.task('build', ['default']);
