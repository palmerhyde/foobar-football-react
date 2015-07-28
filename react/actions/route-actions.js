Flux = require('./../flux');
var Constants = require('./constants');

module.exports = Flux.createActions({
    receiveMatchId: function(id) {
        return {
            actionType: Constants.RECEIVE_MATCH_ID,
            id: id
        }
    },
    receiveMoves: function() {
        return {
            actionType: Constants.RECEIVE_MOVES
        }
    },
    receiveStadiums: function() {
        return {
            actionType: Constants.RECEIVE_STADIUMS
        }
    },
    receiveChants: function() {
        return {
            actionType: Constants.RECEIVE_CHANTS
        }
    }
});