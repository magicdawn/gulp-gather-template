# gulp-gather-template

[![Greenkeeper badge](https://badges.greenkeeper.io/magicdawn/gulp-gather-template.svg)](https://greenkeeper.io/)

gather ractive template into a .js file

## Install

`npm i gulp-gather-template --save`

## Usage
chack demo directory

```js
var gulp = require('gulp')
var gatherTemplate = require('../')

gulp.task('default',function() {
    gulp.src('templates/*.html')
        .pipe(gatherTemplate({
            filename: "templates.js"
        })
        .pipe(gulp.dest('./build'))
})
```

this will build all templates to a `templates.js` file

## option
- filename : the js for the result
- output : the output type
	- default : "commonjs",that will give result like
	`module.exports = { ... }`
	- browser : `var templates = { ... }`
	- json : '{ ... }'
	- or just write code here `output : "window.templates = "` as you like 

## TODO

nested support for recursive directories.

## License

MIT