module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
        src: [
            'js/*.js',
         ],
        dest: 'js/production.js',
    },
         extras: {
      src: ['css/*.css'],
      dest: 'css/production.css',
    }
        },

        uglify: {
    build: {
        src: 'js/production.js',
        dest: 'js/production.min.js'
    }
},
        cssmin: {
             options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: [{
      expand: true,
      cwd: 'css/',
      src: ['production.css', '!*.min.css'],
      dest: 'css/',
      ext: '.min.css',
      }]
  }
},
        imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'img/'
        }]
    }
},
        watch: {
  scripts: {
    files: ['js/*.js'],
    tasks: ['concat', 'uglify'],
    options: {
      spawn: false,
    },
  },
},

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'cssmin']);

};