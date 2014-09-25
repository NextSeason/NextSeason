var trim = function( str ) {
    return str ? str.replace( /^\s+/, '' ).replace( /\s+$/, '' ) : '';
};

exports.trim = trim;
