var parsearg = function( arg ) {
    var pos = arg.indexOf( '=' ),
        result = {};

    result[ arg.substr( 0, pos ).replace( /^-+/, '' ) ] = arg.substr( ++pos );
    return result;
}

exports.parsearg = parsearg;
