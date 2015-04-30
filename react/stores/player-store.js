var Flux = require('../Flux');
var Actions = require('../actions/constants');

var _players = [
    {
        "key" : 1,
        "name" : "John Terry",
        "position" : "Defender",
        "nationUrl" : "http://futhead.cursecdn.com/static/img/15/nations/14.png",
        "clubUrl" : "http://futhead.cursecdn.com/static/img/15/clubs/5.png",
        "photoUrl" : "http://futhead.cursecdn.com/static/img/15/players/13732.png"
    },
    {
        "key" : 2,
        "name" : "Diego Costa",
        "position" : "Attacker",
        "nationUrl" : "http://futhead.cursecdn.com/static/img/15/nations/45.png",
        "clubUrl" : "http://futhead.cursecdn.com/static/img/15/clubs/5.png",
        "photoUrl" : "http://futhead.cursecdn.com/static/img/15/players/179844.png"
    },
    {
        "key" : 3,
        "name" : "Liam Molloy",
        "position" : "Attacker",
        "nationUrl" : "http://futhead.cursecdn.com/static/img/15/nations/46.png",
        "clubUrl" : "http://futhead.cursecdn.com/static/img/15/clubs/10.png",
        "photoUrl" : "http://futhead.cursecdn.com/static/img/15/players/179845.png"
    }
];

var addPlayer = function () {
    _players.push(
        {
            "key" : Math.floor((Math.random() * 100000) + 4),
            "name" : "Player Added new",
            "position" : "Attacker",
            "nationUrl" : "http://futhead.cursecdn.com/static/img/15/nations/50.png",
            "clubUrl" : "http://futhead.cursecdn.com/static/img/15/clubs/2.png",
            "photoUrl" : "http://futhead.cursecdn.com/static/img/15/players/179846.png"
        }
    );

    console.log('add player store');
};

var PlayerStore = Flux.createStore({
        Get: function () {
            return _players;
        }
    },

    function (payload) {

        switch (payload.actionType) {
            case Actions.PLAYER_FETCH:
                return _players;
                break;
            case Actions.PLAYER_ADD:
                addPlayer();
                PlayerStore.emitChange();
                break;
        }

        return true;
    });

module.exports = PlayerStore;