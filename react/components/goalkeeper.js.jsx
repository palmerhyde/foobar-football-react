var React = require('react');

module.exports = React.createClass({
    displayName: 'goalkeeper component',
    render: function () {
        if (!this.props.player) {
            return false;
        }

        var style = {
            backgroundImage: 'url(' + this.props.player.imageUrl + ')',
            backgroundColor: "purple",
            borderColor: "gold"
        };

        var attributesLeft = {
            textAlign : 'right',
            boxSizing : 'border-box',
            padding : '4px',
            fontSize : "10px",
            fontWeight : "bold",
            fontFamily: "PremierLeague",
            color: "black"

        };

        var attributesRight = {
            textAlign : 'center',
            boxSizing : 'border-box',
            padding : '4px',
            fontSize : '10px',
            fontWeight : "bold",
            fontFamily: "PremierLeague",
            backgroundColor : "#777",
            color : "white"
        };

        return (
            <div  className="card">
                <div className="title">
                    {this.props.player.name}
                </div>
                <div className="pure-g">
                    <div className="pure-u-1-3">
                        <div className="circlecardsmall" style={style}/>
                        <div className="cardleft">
                            <img alt="club" className="club" src={this.props.player.clubImageUrl}/>
                        </div>
                        <div className="cardleft">
                            <img alt="nation" className="nation" src={this.props.player.nationImageUrl}/>
                        </div>
                        { this.props.player.wikipediaUrl ?
                            <div className="cardleft">
                                <a href={this.props.player.wikipediaUrl} target="_blank">
                                    <img alt="wikipedia" className="wikipedia"
                                         src="http://localhost:63343/foobar-football-react/assets/images/wikipedia.png"/>
                                </a>
                            </div> :
                            null
                        }
                    </div>
                    <div className="pure-u-2-3">
                        <div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Diving</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.gkdiving}</div>
                            </div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Handling</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.gkhandling}</div>
                            </div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Heading</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.heading}</div>
                            </div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Positioning</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.gkpositioning}</div>
                            </div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Reflexes</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.gkreflexes}</div>
                            </div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Stength</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.strength}</div>
                            </div>
                            <div className="pure-g">
                                <div className="pure-u-4-5" style={attributesLeft}>Vision</div>
                                <div className="pure-u-1-5" style={attributesRight}>{this.props.player.vision}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
