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
                padding : '6px',
                fontWeight : "bold",
                fontFamily: "PremierLeague",
                fontSize: "14px",
                backgroundColor : "#999",
                color: "black",
                paddingLeft: '20px'


            };

            var attributesRight = {
                textAlign : 'center',
                boxSizing : 'border-box',
                padding : '6px',
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
                        <a href={this.props.player.wikipediaUrl} target="_blank">
                            <img alt="wikipedia" className="wikipedia"
                                 src="http://localhost:63342/foobar-football-react/assets/images/wikipedia.png"/>
                        </a>
                    </div>
                    <div className="pure-u-3-3 attrs">
                        { this.props.player.position == "GK" ?
                            <div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Diving</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.diving}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Handling</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.handling}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Kicking</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.kicking}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Positioning</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.positioning}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Reflex</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.reflexes}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Speed</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.speed}</div>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Defending</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.defence}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Dribbling</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.dribbling}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Passing</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.passing}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Physical</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.physical}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Shooting</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.shooting}</div>
                                </div>
                                <div className="pure-g">
                                    <div className="pure-u-2-3" style={attributesLeft}>Sweat</div>
                                    <div className="pure-u-1-3"
                                         style={attributesRight}>{this.props.player.pace}</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            );
        }
    }
});
