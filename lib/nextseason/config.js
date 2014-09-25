/**
 * default configuration file
 */

var fs = require( 'fs' );

var underscore = require( 'underscore' );

var configuration = {};

exports = module.exports = function( NS ) {
    var localdir = NS.localdir,
        home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
        configfile = localdir + / + 'nextseason.conf';

    var configCache = null;

    if( !fs.exists( configfile ) ) {
        fs.open( configfile, 'w', function( error, fd ) {
            if( error ) throw error;

            fs.write( fd, JSON.stringify( {} ), function( error ) {
                if( error ) throw error;
            });

        } );
    }

    var updateCache = function( c ) {
    };

    return {
        set : function( ns, value ) {
            var config,
                keys,
                i = 0;

            config = configCache || JSON.parse( fs.readFileSync( configfile ) );

            keys = ns.split( '.' );

            while( i += 1) {
                if( keys.length === 1 ) {
                    
                }
            }
        },
        get : function( ns ) {
            var config,
                keys,
                key,
                i = 0,
                l,
                result;

            if( !ns ) return config;

            config = configCache || JSON.parse( fs.readFileSync( configfile ) );

            configCache = result = config;

            keys = ns.split( '.' );

            for( l = keys.length; i < l; i += 1 ) {
                if( result.hasOwnProperty( key = keys[ i ] ) ) {
                    result = result[ key ];
                } else {
                    return undefined;
                }
            }

            return underscore.clone( result );
        }
    };
};
