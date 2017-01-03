// module.exports = function (grunt) {

//     grunt.initConfig({
//         svg_sprite: {
//             // basic: {
//             //     expand: true,
//             //     cwd: 'src/assets/icons',
//             //     src: ['**/*.svg'],
//             //     dest: 'build',
//             //     options: {
//             //         mode: {
//             //             css: {
//             //                 render: {
//             //                     css: true
//             //                 }
//             //             }
//             //         }
//             //     }
//             // }
//             complex: {
//                 expand: true,
//                 cwd: 'src/assets/icons',
//                 src: ['**/*.svg'],
//                 dest: 'build',
//                 options: {
//                     shape: {
//                         dimension: {
//                             maxWidth: 32,
//                             maxHeight: 32
//                         },
//                         spacing: {
//                             padding: 10
//                         },
//                         dest: 'out/intermediate-svg'
//                     },
//                     mode: {
//                         view: {
//                             bust: false,
//                             render: {
//                                 scss: true
//                             }
//                         },
//                         symbol: true
//                     }
//                 }
//             }
//         }
//     });

//     grunt.loadNpmTasks('grunt-svg-sprite');
//     grunt.registerTask('default', ['svg_sprite']);

// };

'use strict';

var baseDir = 'src/assets/icons',   // <-- Set to your SVG base directory
    svgGlob = '**/*.svg',       // <-- Glob to match your SVG files
    outDir = 'build',     // <-- Main output directory
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
            "meta": "",
            "align": "",
            "dest": "out/intermediate-svg"
        },
        "mode": {
            "css": {
                "common": "pss",
                "render": {
                    "css": true,
                    "scss": true,
                    "less": true,
                    "styl": true
                },
                "example": true
            },
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