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
            var photoDivStyle = {
                borderLeft: 'black',
                borderLeftWidth: '1px',
                borderLeftStyle: 'solid',
                borderRight: 'black',
                borderRightWidth: '1px',
                borderRightStyle: 'solid'
            };

            var photoImageStyle = {
                width: '115px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
            };

            var attributesLeft = {
                textAlign : 'left',
                boxSizing : 'border-box',
                padding : '4px',
                fontWeight : "bold",
                fontFamily: "PremierLeague",
                fontSize: "14px",
                backgroundColor : "#999",
                color: "black"

            };

            var attributesRight = {
                textAlign : 'center',
                boxSizing : 'border-box',
                padding : '4px',
                fontWeight : "bold",
                fontFamily: "PremierLeague",
                fontSize: "14px",
                backgroundColor : "#999",
                color : "white"
            };

            return (

                <div className="card">
                    <div>
                        <img alt="club" className="club" src={this.props.player.clubImageUrl}/>
                    </div>
                    <div>
                        <img alt="nation" className="nation" src={this.props.player.nationImageUrl}/>
                    </div>
                    <div className="title">
                        {this.props.player.name}
                    </div>
                    <div className="photo" style={photoDivStyle}>
                        <img src={this.props.player.imageUrl} style={photoImageStyle}/>
                    </div>
                    <div className="type">
                        Player - {this.props.player.position}
                    </div>
                    <div className="pure-u-3-3 attrs">
                        { this.props.player.position == "GK" ?
                            <div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.crossing}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Diving</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.dribbling}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Handling</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.finishing}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Kicking</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.heading}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Reflex</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.interceptions}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Speed</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.longpassing}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Positioning</div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.crossing}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Pace</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.dribbling}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Passing</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.finishing}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Shooting</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.heading}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Dribbling</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.interceptions}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Defending</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.longpassing}</div>
                                    <div className="pure-u-2-3" style={attributesLeft}>Physical</div>
                                </div>
                            </div>
                        }
                    </div>
                    <a href={this.props.player.wikipediaUrl} target="_blank">
                        <img alt="wikipedia" className="wikipedia"
                             src="http://localhost:63342/foobar-football-react/assets/images/wikipedia.png"/>
                    </a>
                </div>
            );
        }
    }
});
