'use strict';

var baseDir = 'src/assets/icons',   // <-- Set to your SVG base directory
    svgGlob = '**/*.svg',       // <-- Glob to match your SVG files
    outDir = 'output/dir',     // <-- Main output directory
    config = {
        "dest": "build",
        "log": "verbose",
        "shape": {
            "id": {
                "generator": "icon"
            },
            "dimension": {
                "maxWidth": 100,
                "maxHeight": 100,
                "attributes": true
            },
            "spacing": {
                "padding": 1,
                "box": "padding"
            },
            "meta": "build/yaml",
            "align": "build/yaml/data",
            "dest": "out/intermediate-svg"
        },
        "mode": {
            "css": true,
            "view": true,
            "defs": true,
            "symbol": true,
            "stack": true
        },
        "variables": {}
    };

module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({

        // svg-sprite configuration
        svg_sprite: {
            dist: {
                expand: true,
                cwd: baseDir,
                src: [svgGlob],
                dest: outDir,
                options: config
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-svg-sprite');

    // By default, compile the sprite(s)
    grunt.registerTask('default', ['svg_sprite']);
};