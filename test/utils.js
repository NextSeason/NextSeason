var utils = require( '../lib/utils' );

exports.cleanPath = function( T ) {
    var m = utils.cleanPath;

    T.equal( m( '/a/b/c/' ), '/a/b/c/' );
    T.equal( m( '//a//b//c' ), '/a/b/c' );
    T.equal( m( '/a/./././b/c' ), '/a/b/c' );
    T.equal( m( '/a/b/c/../../' ), '/a/' );
    T.equal( m( '/a/b/c/././././' ), '/a/b/c/' );

    T.done();
};

exports.fullPath = function( T ) {
    var m = utils.fullPath;

    T.equal( m( '/a/b/c/', '/d' ), '/d' );
    T.equal( m( '/a/b/c/', 'd' ), '/a/b/c/d' );
    T.equal( m( '/a/b/c', 'd' ), '/a/b/c/d' );
    T.equal( m( '/a/b/c', './d' ), '/a/b/c/d' );
    T.equal( m( '/a/b/c/', '../d' ), '/a/b/d' );
    T.equal( m( '/a/b/c/', '././../d' ), '/a/b/d' );
    T.equal( m( '/a/b/c/', '././../../d' ), '/a/d' );
    T.strictEqual( m( '/a/b/c', '../../../../' ), false );

    T.done();
};
