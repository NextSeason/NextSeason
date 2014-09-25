// load nodejs native modules
var fs = require( 'fs' ),
    path = require( 'path' );

var NS = {};

var argv = process.argv;

/**
 * create the directory for nextseason in user local directory
 */
NS.localdir = home + '/' + '.nextseason';

if( !fs.existsSync( NS.localdir ) ) {
    fs.mkdirSync( NS.localdir ); 
}

var requireLib = function( module ) {
    return require( './nextseason/' + module ); 
};

var requireModule = function( module ) {
    try {
        return require( module );
    } catch( ex ) {
        NS.log.error( 'failed to require module [' + module + ']' );
    }
};

NS.utils = requireLib( 'utils' );

NS.log = requireLib( 'log' );

NS.log( 'NextSeason is running' )

if( argv.length <= 2 ) return NS.log.error( 'miss the third argv for what you wanna execute ' );

NS.module = requireModule( 'nextseason-' + argv[ 2 ] );

if( !NS.module ) {
    return NS.log.error( 'module [' + argv[ 2 ] + '] exports nothing' );
}

var i = 0, 
    l = argv.length,
    file,
    item,
    content;

var configParser = {
    'json' : function( content ) {
        try {
            return JSON.parse( content );
        } catch( ex ) {
            return false;
        }
    },
    'conf' : function( content ) {
        return content.split( /\s+/g );
    }
};

NS.run = function( argv ) {
    var i = 0,
        l = argv.length,
        arg,
        configFile,
        ext;

    for( ; i < l; i += 1 ) {
        arg = argv[ i ]; 

        if( arg.indexOf( '--config=' )) continue;

        /**
         * get the real path of config file
         */
        configFile = NS.utils.getpath( arg.substr( arg.indexOf( '=' ) + 1 ) );

        if( !fs.existsSync( configFile ) ) {
            NS.log.warn( 'config file is not exists' );
            continue
        }

        content = fs.readFileSync( configFile, 'utf-8' );

        if( !content ) continue;

        content = NS.utils.trim( content );
    
        ext = path.extname( configFile );

        if( !ext in configParser ) continue;


        /**
         * remove the --config item from argv
         */
        argv.slice( i, 1 );

        argv = argv.concat( configParser[ ext.replace( /^\./, '' ) ].call( NS, content ) );
    }

    NS.module.call( NS, NS, argv );
};

NS.run( argv.slice( 2 ) );
