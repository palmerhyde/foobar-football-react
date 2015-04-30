var actions = require('./constants');
var Flux = require('../flux');

module.exports = Flux.createActions({
    addPlayer: function() {
        console.log('add player action called');
        return {
            actionType: actions.PLAYER_ADD
        }
    }
});