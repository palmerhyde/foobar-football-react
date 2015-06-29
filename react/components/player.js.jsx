var React = require('react');

module.exports = React.createClass({
    displayName: 'player component',
    propTypes: {
        player: React.PropTypes.object.isRequired
    },
    render: function () {
        if (!this.props.player) {
            return false
        }
        else {
            var style = {
                backgroundImage: 'url(' + this.props.player.imageUrl + ')',
                backgroundColor: "purple",
                borderColor: "gold"
            };

            return (

                <div className="card">

                    <div>
                        <img alt="club" className="club" src="http://futhead.cursecdn.com/static/img/15/clubs/243.png"/>
                        <img alt="nation" className="nation" src="http://futhead.cursecdn.com/static/img/15/nations/52.png"/>
                        <img alt="wikipedia" className="wikipedia" src="http://localhost:63342/foobar-football-react/assets/images/wikipedia.jpg" />
                    </div>
                    <div className="clear"/>
                    <div>
                    <div className="circlecard" style={style}/>
                    </div>
                    <div className="type">
                        {this.props.player.name}
                    </div>
                    <div className="attrs">
                    </div>
                </div>
            );
        }
    }
});
