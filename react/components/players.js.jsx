var React = require('react');
var Player = require('./blank-player.js.jsx');
var Goalkeeper = require('./goalkeeper.js.jsx');
var MatchStore = require('./../stores/match-store');

function getMatchPlayers() {
    var match = MatchStore.Get();
    var players = match.yourTeam.defenders
        .concat(match.yourTeam.midfielders)
        .concat(match.yourTeam.attackers)
        .concat(match.yourTeam.goalkeeper)
        .concat(match.opponentsTeam.defenders)
        .concat(match.opponentsTeam.midfielders)
        .concat(match.opponentsTeam.attackers)
        .concat(match.opponentsTeam.goalkeeper);

    return {
        players: players
    };
}

module.exports = React.createClass({
    displayName: 'player list component',
    mixins: [MatchStore.mixin],
    getInitialState: function() {
        return getMatchPlayers();
    },
    componentDidMount: function (){
        this.setState(getMatchPlayers());
    },
    storeDidChange: function () {
        this.setState(getMatchPlayers());
    },
    render: function () {
        if (!this.state.players) {
            return false;
        }

        var style = {
            float : "left",
            transform: "scale(0.9)"
        };

        return (
            <div className="pure-u-8-8">
                {this.state.players.map(function (player, index) {
                    return (
                        <div style={style}>
                            {
                                player.position == "GK" ?
                                    <Goalkeeper player={player}  />
                                    :
                                    <Player player={player}  />
                                }
                        </div>
                    )
                }, this)
                }
            </div>
        );
    }
});