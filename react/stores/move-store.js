var Flux = require('./../flux');
var Firebase = require('firebase');
var Constants = require('./../actions/constants');
var Configuration = require('../configuration.js');

var _moves = null;

function getMoves() {


    var matchViewRef = new Firebase(Configuration.FirebaseUrl + '/Moves');

    matchViewRef.on('child_added', function (snapshot) {
        var result = snapshot.val();
        if (!_moves) {
            _moves = [];
        }

        _moves.push(result);
        MoveStore.emitChange();
    });

    matchViewRef.on('child_removed', function (snapshot) {
        console.log('remove');
        var result = snapshot.val();
        if (!_moves) {
            _moves = [];
        }

        _moves = _moves.filter(function(element){
            return element.minute !== result.minute;
        });

        MoveStore.emitChange();
    });
}

var MoveStore = Flux.createStore({
        Get: function () {
            return _moves;
        }
    },

    function (payload) {

        switch (payload.actionType) {
            case Constants.RECEIVE_MOVES:
                getMoves();
                break;
        }

        return true;
    });

module.exports = MoveStore;