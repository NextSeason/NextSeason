/**
 * @fileOverview nextseason.js
 */

var nextseason = {},
    argv = process.argv,
    _module;

//nextseason.log = require( 'nextseason-log' ).log;
nextseason.require = require( 'nextseason-require' ).require;

if( argv.length <= 2 ) {
    return;
}

nextseason.module = nextseason.require( argv[ 2 ], argv[ 3 ] || '' );

nextseason.module.__init__();
