'use strict';

module.exports = function( nextseason ) {
    nextseason.task( 'default', [
    ] );

    nextseason.task( 'build', [
        'task:default', 
        'cmd:nextseason alias -v --color=auto',
    ] );
};
