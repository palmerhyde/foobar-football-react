var React = require('react');
var Router = require('react-router');
var Pitch = require('./pitch.js.jsx');
var Player = require('./player.js.jsx');
var Player2 = require('./blank-player.js.jsx');
var MoveCard = require('./move-card.js.jsx');
var MatchStore = require('./../stores/match-store');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

function getMatchState() {
    return {
        matchView: MatchStore.Get(),
        selectedPlayer: MatchStore.SelectedPlayer(),
        move : {
            "name" : "Short pass from defence",
            "imageUrl" : "http://localhost:63342/foobar-football-react/assets/images/pitch-chalk.jpg"
        }
    };
}

module.exports = React.createClass({
    displayName: 'match component',
    mixins: [MatchStore.mixin],
    getInitialState: function() {
        return getMatchState();
    },
    componentDidMount: function (){
        this.setState(getMatchState());
    },
    storeDidChange: function () {
        this.setState(getMatchState());
    },
    render: function () {
        if (!this.state.matchView) {
            return false;
        }

        style = {
            height: '50px'
        };

        style2 = {
            height: '75%'
        };

        home = {
            backgroundColor: 'purple',
            color: 'gold',
            border: '2px',
            borderStyle: "solid",
            borderColor: "gold",
            boxSizing: 'border-box'
        };

        away = {
            backgroundColor: 'white',
            color: 'gold',
            border: '2px',
            borderStyle: "solid",
            borderColor: "gold",
            boxSizing: 'border-box'
        };

        score = {
            backgroundColor: 'white',
            color: 'black',
            border: '2px',
            borderStyle: "solid",
            borderColor: "black",
            boxSizing: 'border-box'
        };

        return (
            <div>
                <div className="pure-g" style={style}>
                        <div className="pure-u-11-24" style={home}>{this.state.matchView.yourTeam.name}</div>
                        <div className="pure-u-1-24" style={score}>{this.state.matchView.yourTeam.score}</div>
                        <div className="pure-u-1-24" style={score}>{this.state.matchView.opponentsTeam.score}</div>
                        <div className="pure-u-11-24" style={away}>{this.state.matchView.opponentsTeam.name}</div>
                </div>
                <div className="pure-g" style={style2}>
                    <div className="pure-u-3-4">
                        <Pitch matchView={this.state.matchView}/>
                    </div>
                    <div className="pure-u-1-4">
                        <Player2 player={this.state.selectedPlayer} />
                        <div>spacer hack</div>
                        <MoveCard move={this.state.move} />
                    </div>
                </div>
            </div>
        );
    }
});