module.exports = function() {
  // Сначала удаляем проект, потом выполняем таски
  p.gulp.task("build", p.gulp.series("delete", "png-sprite", "svg-sprite", "pug", "sass", "js", "img", "svg", "fonts"));
};
