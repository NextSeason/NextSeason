/**
 * @function cleanPath
 * @description
 * @param { String } oldPath
 * @return { String }
 */

var cleanPath = require( './cleanPath' );
var fullPath = require( './fullPath' ); 

var createUserDirectory = function( path, callback ) {

    path = '~/.nextseason/';

    fs.exists( path, function( exists ) {
        exists || fs.mkdir( path );

        fs.open( path + 'nextseason-config.js', 'w', function( error, fd ) {
            if( error ) throw e;

            fs.write( fd, JSON.stringify( {} ), function( error ) {
                if( error ) throw e;
                fs.closeSync( fd );
            });
        } );

        callback( path );
    } );
};
