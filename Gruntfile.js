module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            react: {
                files: 'React/**/*.jsx',
                tasks: ['browserify', 'uglify']
            },
            sass: {
                files: 'stylesheets/*.css',
                tasks: ['sass']
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },

        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'dist/main.css': 'stylesheets/main.css'
                }
            }
        },

        browserify: {
            options: {
                transform: [ require('grunt-react').browserify ]
            },
            client: {
                src: ['React/**/*.jsx', 'React/**/*.js'],
                dest: 'dist/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        'browserify',
        'uglify',
        'sass'
    ]);
};