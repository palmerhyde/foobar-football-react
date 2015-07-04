var React = require('react');
var Player = require('./blank-player.js.jsx');

module.exports = React.createClass({
    displayName: 'player list component',
    render: function () {
        var className = "circle";
        var style = {
            backgroundImage: 'url(' + this.props.player.imageUrl + ')',
            backgroundColor: this.props.colour1,
            borderColor: this.props.colour2
        };
        var active = this.props.player.active;

        if (active) {
            className = className + " active"
        }

        return (
            <div>
                {this.state.players.map(function (player, index) {
                    return (
                        <PlayerChip player={player} colour1={this.props.matchView.yourTeam.colour1} colour2={this.props.matchView.yourTeam.colour2} />
                    )
                }, this)
                }
            </div>
        );
    }
});