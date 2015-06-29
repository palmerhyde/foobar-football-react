var React = require('react');
var PlayerChip = require('./player-chip.js.jsx');

module.exports = React.createClass({
    displayName: 'pitch component',
    propTypes: {
        matchView: React.PropTypes.object
    },
    render: function () {
        if (!this.props.matchView) {
            return null;
        }
        return (
            <div className="pure-g pitch">
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        <PlayerChip player={this.props.matchView.yourTeam.goalkeeper} colour1={this.props.matchView.yourTeam.colour1} colour2={this.props.matchView.yourTeam.colour2} />
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.props.matchView.yourTeam.defenders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.props.matchView.yourTeam.colour1} colour2={this.props.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.props.matchView.yourTeam.midfielders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.props.matchView.yourTeam.colour1} colour2={this.props.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.props.matchView.yourTeam.attackers.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.props.matchView.yourTeam.colour1} colour2={this.props.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.props.matchView.opponentsTeam.attackers.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.props.matchView.opponentsTeam.colour1}
                                            colour2={this.props.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.props.matchView.opponentsTeam.midfielders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.props.matchView.opponentsTeam.colour1}
                                            colour2={this.props.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.props.matchView.opponentsTeam.defenders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.props.matchView.opponentsTeam.colour1}
                                            colour2={this.props.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        <PlayerChip player={this.props.matchView.opponentsTeam.goalkeeper} colour1={this.props.matchView.opponentsTeam.colour1} colour2={this.props.matchView.opponentsTeam.colour2}  />
                    </div>
                </div>
            </div>
        );
    }
});