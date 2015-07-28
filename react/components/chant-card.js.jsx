var React = require('react');

module.exports = React.createClass({
    displayName: 'chant card component',
    render: function () {
        if (!this.props.chant) {
            return false;
        }

        var style = {
            marginTop : "60px"
        };

        var url = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=" + this.props.chant.imageUrl + "&container=focus&resize_w=215&resize_h=105";

        return (
            <div className="card">
                <div class="clear"></div>
                <div className="title">
                    {this.props.chant.name}
                </div>
                <div className="photoStadium">
                    <img alt="picture" src={url} />
                </div>
                <div className="type">
                    {this.props.chant.type}
                </div>
                <div className="stadium">
                    <div>{this.props.chant.description}</div>
                    <div>
                        <img className="club" src={this.props.chant.synergyUrl} style={style} />
                    </div>
                    { this.props.chant.chantUrl ?
                        <a href={this.props.chant.chantUrl} target="_blank">
                            <img alt="wikipedia" className="wikipedia bottomRight"
                                 src="http://localhost:63343/foobar-football-react/assets/images/wikipedia.png"/>
                        </a> :
                        null
                    }
                </div>
            </div>
        );
    }
});