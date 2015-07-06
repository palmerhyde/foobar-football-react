var Flux = require('./../flux');
var Firebase = require('firebase');
var Constants = require('./../actions/constants');
var Configuration = require('../configuration.js');

var _stadiums = null;

function getStadiums() {


    var stadiumViewRef = new Firebase(Configuration.FirebaseUrl + '/Stadiums');

    stadiumViewRef.on('child_added', function (snapshot) {
        var result = snapshot.val();
        if (!_stadiums) {
            _stadiums = [];
        }

        _stadiums.push(result);
        StadiumStore.emitChange();
    });
}

var StadiumStore = Flux.createStore({
        Get: function () {
            return _stadiums;
        }
    },

    function (payload) {

        switch (payload.actionType) {
            case Constants.RECEIVE_STADIUMS:
                getStadiums();
                break;
        }

        return true;
    });

module.exports = StadiumStore;