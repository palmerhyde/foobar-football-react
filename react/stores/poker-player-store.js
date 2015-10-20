var Flux = require('./../flux');
var Firebase = require('firebase');
var Constants = require('./../actions/constants');
var Configuration = require('../configuration.js');

var _data = null;

function getData() {


    var dataRef = new Firebase(Configuration.FirebaseUrl + '/Poker');

    dataRef.on('child_added', function (snapshot) {
        var result = snapshot.val();
        if (!_data) {
            _data = [];
        }

        _data.push(result);
        PokerPlayerStore.emitChange();
    });

    dataRef.on('child_removed', function (snapshot) {
        var result = snapshot.val();
        if (!_data) {
            _data = [];
        }

        PokerPlayerStore.emitChange();
    });
}

var PokerPlayerStore = Flux.createStore({
        Get: function () {
            return _data;
        }
    },

    function (payload) {

        switch (payload.actionType) {
            case Constants.RECEIVE_POKER_PLAYERS:
                getData();
                break;
        }

        return true;
    });

module.exports = PokerPlayerStore;