var React = require('react');

module.exports = React.createClass({
    displayName: 'player chip component',
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    handleClick: function () {
        if (this.props.player.active) {
            alert('clicked');
            // TODO: Set show player card state to true.
        }
    },
    handleHover: function () {
        alert('hovered');
    },
    render: function () {
        var className = "circle red";
        var style = {backgroundImage: 'url(' + this.props.player.imageUrl + ')'};
        var active = this.props.player.active;

        if (active) {
            className = className + " active"
        }
        return (
            <div className={className} style={style} onClick={this.handleClick} onHover={this.handleHover}/>
        );
    }
});