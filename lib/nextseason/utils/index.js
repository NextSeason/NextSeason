var fs = require( 'fs' ),
    path = require( 'path' ),
    underscore = require( 'underscore' );

var files = fs.readdirSync( __dirname );

if( files ) {
    var i = 0,
        l = files.length,
        file;

    for( ; i < l; i += 1 ) {
        if( !/\.js$/.test( file = files[ i ] ) ) continue;

        underscore.extend( exports, require( __dirname + '/' + file ) );
    }
}

console.log( exports );
