module.exports = function(grunt) {
	grunt.initConfig({
	  concat: {
	    js: {
	      src: ['js/one.js', 'js/two.js'],
	      dest: 'build/js/scripts.js',
	    },
	    css: {
	      src: ['css/one.css', 'css/two.css'],
	      dest: 'build/css/styles.css',
	    },
	  },// call grunt concat
	  watch: {
		  js: {
		    files: 'js/**/*.js',
		    tasks: ['concat'], 
		  },
		  css: {
		    files: 'css/**/*.css',
		    tasks: ['concat'], 
		  },
	   }, // call grunt watch: runs grunt concat after watching js and css files
	}); 
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'watch']); // call grunt to run watch and concat

};