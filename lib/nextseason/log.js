var log = function() {
};

log.error = function( msg ) {
    console.log( msg );
}
log.warn = function() {
};

exports = module.exports = log;
