var cleanPath = function( oldPath ) {
    var tree = [],
        result = [],
        i = 0,
        l,
        item;

    oldPath = oldPath.replace( /\/+/g, '/' );
    if( oldPath.indexOf( './' ) === -1 ) return oldPath;

    tree = oldPath.split( '/' );

    for( l = tree.length; i < l; i += 1 ) {
        item = tree[ i ];
        if( item === '.' ) continue;

        if( item === '..' ) {
            if( !result.length ) return false;
            result.pop();
        } else {
            result.push( item );
        }
    }

    return result.join( '/' );
};

exports.cleanPath = cleanPath;
