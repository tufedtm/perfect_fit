const SRC_DIR = {
  dest: 'dist',

  font: 'src/fonts/**/*',
  image: 'src/**/*.{jpg,png,svg}',
  script: 'src/**/*.js',
  style_src: 'src/styles/app.styl',
  style_watch: 'src/{blocks,styles}/**/*.styl',
  template_src: 'src/pages/*.jade',
  template_watch: 'src/**/*.jade'
};

module.exports = SRC_DIR;
