var Flux = require('./../flux');
var Firebase = require('firebase');
var Constants = require('./../actions/constants');
var Configuration = require('../configuration.js');

var _match = null;
var _selectedPlayer = null;

function getMatch(id) {


    var matchViewRef = new Firebase(Configuration.FirebaseUrl + '/matchview');

    matchViewRef.on('value', function (snapshot) {
        var result = snapshot.val();
        _match = result;
        MatchStore.emitChange();
    });
}

function setPlayer(player) {
    _selectedPlayer = player;
    MatchStore.emitChange();
}

var MatchStore = Flux.createStore({
        Get: function () {
            return _match;
        },
        SelectedPlayer: function () {
            return _selectedPlayer;
        }
    },

    function (payload) {

        switch (payload.actionType) {
            case Constants.RECEIVE_MATCH_ID:
                getMatch(payload.id);
                break;
            case Constants.SET_SELECTED_PLAYER:
                setPlayer(payload.player);
                break;
        }

        return true;
    });

module.exports = MatchStore;