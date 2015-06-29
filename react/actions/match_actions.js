Flux = require('./../flux');
var Constants = require('./constants');

module.exports = Flux.createActions({
    setPlayer: function(player) {
        return {
            actionType: Constants.SET_SELECTED_PLAYER,
            player: player
        }
    }
});