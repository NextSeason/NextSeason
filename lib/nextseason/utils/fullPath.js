var cleanPath = require( './cleanPath' );

var fullPath = function( basePath, relativePath ) {
    var baseTree,
        relativeTree,
        i = 0,
        l,
        item;

    if( ( basePath = cleanPath( basePath ) ) === false ) return false;

    /**
     * if the relative path is a absolute path start with a slash(/)
     */
    if( /^\//.test( relativePath ) ) return relativePath;

    /\/$/.test( basePath ) || ( basePath += '/' );

    relativePath = relativePath.replace( /^(\.\/)+/, '' );

    /**
     * if the relative path not start with a './' or '../'
     * just combine the base path and relative path
     */
    if( relativePath.indexOf( './' ) && relativePath.indexOf( '../' ) ) {
        return basePath + relativePath;
    }
    
    baseTree = basePath.split( '/' );
    relativeTree = relativePath.split( '/' );

    if( !baseTree[ baseTree.length - 1 ].length ) baseTree.pop();

    for( l = relativeTree.length; i < l; i +=1 ) {
        item = relativeTree[ i ];

        if( item === '.' ) continue;

        if( item === '..' ) {

            if( !baseTree.length || ( baseTree.length === 1 && !baseTree[ 0 ].length ) ) return false;

            baseTree.pop();

        } else if( item.length ) {
            baseTree.push( item );
        }
    }

    return  baseTree.join( '/' );

};

exports.fullPath = fullPath;


