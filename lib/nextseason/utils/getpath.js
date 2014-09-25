var getpath = function( str ) {
    return str.indexOf( '/' ) ? process.cwd() + '/' + str : str;
};

exports.getpath = getpath;
