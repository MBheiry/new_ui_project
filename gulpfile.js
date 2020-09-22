//
const { src, dest, parallel, series, watch, task } = require('gulp');
//----
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const image = require('gulp-image');
////////////////////////////////////////////////

// All Pathes
const url = {
    src: {
        scripts: './js/',
        fonts: './fonts/',
        sass: './css/scss/',
        css: './css/',
        img: './images/'
    }
}
//------

const Style = {
    //SASS Tasks
    sassDev: function () {
        return src([
                // url.src.css + 'style-rtl_theme01_.min.scss', 
                // url.src.css + 'style-ltr_theme01_.min.scss', 
                // url.src.css + 'style-rtl.min.scss', 
                // url.src.css + 'style-ltr.min.scss'
                url.src.css + '*.scss'
                ])
            .pipe(sourcemaps.init())
            // .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
            //.pipe(concat('zeee.css'))           
            .pipe(sourcemaps.write('.'))
            .pipe(dest(url.src.css));

    }
};
//------

// JS
const Scripts = {
    // All Lib Scripts
    top: function () {
           return src([
                url.src.scripts + 'dependecies/jquery-3.3.1.min.js',
                // --------
                url.src.scripts + 'dependecies/bootstrap.bundle.min.js',
                url.src.scripts + 'dependecies/slick-1.8.1/slick.min.js',
                url.src.scripts + '_customJS/_custom_Lib/*.js'
           ])
               .pipe(sourcemaps.init())
               .pipe( concat('script_top_min.js') )
               .pipe( uglify() )
               .pipe(sourcemaps.write('.'))
               .pipe(dest(url.src.scripts));
    },
    bottom: function () {
            return src([
                url.src.scripts + 'plugins/swiper.js',
                url.src.scripts + 'globals.js',
                url.src.scripts + '_customJS/*.js'
            ])
                .pipe(sourcemaps.init())
                .pipe(concat('script_bottom_min.js'))
                //.pipe( uglify() )
                .pipe(sourcemaps.write('.'))
                .pipe(dest(url.src.scripts));
    }

};

// 
exports.cImg = () => (
    src('./src/images/**')
        // .pipe( changed('./dist/images') )   // Option.
        // .pipe( changed('./dist/images', {extension: '.html'}) )   // Option.
        .pipe(image())
        .pipe(dest('./dist/images'))
);
//*******************************************

// Watch Files
const Watch = {
    wUI: function () {
        watch(['./**/*.scss'], Style.sassDev),
        watch([url.src.scripts + '_customJS/**/*.js'], Scripts.bottom)
    }
    //------
}
//------
exports.default = Watch.wUI;
//-----
//exports.cssLib = series(Style.mergeLib, parallel(Style.mergeEn, Style.mergeAr), push.pushCss);
//-----
exports.cssDev = Style.sassDev;
exports.jsDev = Scripts.bottom;
exports.jsAll = parallel(Scripts.top, Scripts.bottom);


