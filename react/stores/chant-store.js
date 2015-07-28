var Flux = require('./../flux');
var Firebase = require('firebase');
var Constants = require('./../actions/constants');
var Configuration = require('../configuration.js');

var _chants = null;

function getChants() {


    var chantViewRef = new Firebase(Configuration.FirebaseUrl + '/Chants');

    chantViewRef.on('child_added', function (snapshot) {
        var result = snapshot.val();
        if (!_chants) {
            _chants = [];
        }

        _chants.push(result);
        ChantStore.emitChange();
    });
}

var ChantStore = Flux.createStore({
        Get: function () {
            return _chants;
        }
    },

    function (payload) {

        switch (payload.actionType) {
            case Constants.RECEIVE_CHANTS:
                getChants();
                break;
        }

        return true;
    });

module.exports = ChantStore;