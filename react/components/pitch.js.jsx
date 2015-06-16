var React = require('react');
var PlayerChip = require('./player-chip.js.jsx');
var MatchStore = require('./../stores/match-store');

function getMatchState() {
    return {
        matchView: MatchStore.Get()
    };
}

module.exports = React.createClass({
    displayName: 'pitch component',
    mixins: [MatchStore.mixin],
    propTypes: {
        matchView: React.PropTypes.object
    },
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
            return null;
        }
        return (
            <div className="pure-g pitch">
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        <PlayerChip player={this.state.matchView.yourTeam.goalkeeper} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.state.matchView.yourTeam.defenders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.state.matchView.yourTeam.midfielders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.state.matchView.yourTeam.attackers.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.state.matchView.opponentsTeam.attackers.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.opponentsTeam.colour1}
                                            colour2={this.state.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.state.matchView.opponentsTeam.midfielders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.opponentsTeam.colour1}
                                            colour2={this.state.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.state.matchView.opponentsTeam.defenders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.opponentsTeam.colour1}
                                            colour2={this.state.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        <PlayerChip player={this.state.matchView.opponentsTeam.goalkeeper} colour1={this.state.matchView.opponentsTeam.colour1} colour2={this.state.matchView.opponentsTeam.colour2}  />
                    </div>
                </div>
            </div>
        );
    }
});