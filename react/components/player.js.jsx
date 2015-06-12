var React = require('react');

module.exports = React.createClass({
    displayName: 'player component',
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div  className="card">
                <div>
                    <img alt="club" className="club" src={this.props.player.clubUrl}/>
                    <img alt="nation" className="nation" src={this.props.player.nationUrl}/>
                </div>
                <div className="clear"/>
                <div className="title">
                {this.props.player.name}
                <span className="score total">1 / 10</span>
                </div>
                <div className="photo">
                    <img alt="picture" src={this.props.player.photoUrl}/>
                </div>
                <div className="type">
                    Player - {this.props.player.position}
                </div>
                <div className="attrs">
                </div>
            </div>
        );
    }
});
