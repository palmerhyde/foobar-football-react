Flux = require('./../flux');
var Constants = require('./constants');

module.exports = Flux.createActions({
    receiveMatchId: function(id) {
        return {
            actionType: Constants.RECEIVE_MATCH_ID,
            id: id
        }
    }
});