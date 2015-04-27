"use strict";

var React = require('react');
var Player = require('./player.js.jsx');

module.exports = React.createClass({
    displayName: 'card container',

    componentWillMount: function () {
        this.mockPlayers = [
            {
                "name" : "John Terry",
                "position" : "Defender",
                "nationUrl" : "http://futhead.cursecdn.com/static/img/15/nations/14.png",
                "clubUrl" : "http://futhead.cursecdn.com/static/img/15/clubs/5.png",
                "photoUrl" : "http://futhead.cursecdn.com/static/img/15/players/13732.png"
            },
            {
                "name" : "Diego Costa",
                "position" : "Attacker",
                "nationUrl" : "http://futhead.cursecdn.com/static/img/15/nations/45.png",
                "clubUrl" : "http://futhead.cursecdn.com/static/img/15/clubs/5.png",
                "photoUrl" : "http://futhead.cursecdn.com/static/img/15/players/179844.png"
            },
        ];
    },
    render: function () {
        return (
            <div className="player-container">
                {this.mockPlayers.map(function (player) {
                    return (
                        <Player
                            player={player}
                            />
                    );
                })}
            </div>

        );
    }
});