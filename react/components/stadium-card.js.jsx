var React = require('react');

module.exports = React.createClass({
    displayName: 'stadium card component',
    render: function () {
        if (!this.props.stadium) {
            return false;
        }

        var style = {
          marginTop : "60px"
        };

        var url = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=" + this.props.stadium.imageUrl + "&container=focus&resize_w=215&resize_h=105";

        return (
            <div className="card">
                <div class="clear"></div>
                <div className="title">
                    {this.props.stadium.name}
                </div>
                <div className="photoStadium">
                    <img alt="picture" src={url} />
                </div>
                <div className="type">
                    {this.props.stadium.type}
                </div>
                <div className="stadium">
                    <div>{this.props.stadium.description}</div>
                    <div>
                        <img className="club" src={this.props.stadium.synergyUrl} style={style} />
                    </div>
                    { this.props.stadium.googleMapsUrl ?
                        <a href={this.props.stadium.googleMapsUrl} target="_blank">
                            <img alt="wikipedia" className="googlemaps bottomLeft"
                                 src="http://localhost:63343/foobar-football-react/assets/images/googlemaps.jpg"/>
                        </a> :
                        null
                    }
                        { this.props.stadium.wikipediaUrl ?
                            <a href={this.props.stadium.wikipediaUrl} target="_blank">
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