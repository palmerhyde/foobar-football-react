var React = require('react');

module.exports = React.createClass({
    displayName: 'blank player component',
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
            padding : '2px',
            fontSize : "12px",
            fontWeight : "bold"
        };

        var attributesRight = {
            textAlign : 'center',
            boxSizing : 'border-box',
            padding : '2px',
            fontSize : '12px',
            fontWeight : "bold",
            backgroundColor : "#777"
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
                                         src="http://localhost:63342/foobar-football-react/assets/images/wikipedia.png"/>
                                </a>
                            </div> :
                            null
                        }
                    </div>
                    <div className="pure-u-2-3">
                    <div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Crossing</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.crossing}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Dribbling</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.dribbling}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Finishing</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.finishing}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Heading</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.heading}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Interceptions</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.interceptions}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Long Passing</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.longpassing}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Long Shot</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.longshots}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Marking</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.marking}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Positioning</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.positioning}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Power Shot</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.shotpower}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Short Passing</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.shortpassing}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Sliding tackle</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.slidingtackle}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Standing Tackle</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.standingtackle}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Stength</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.strength}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Vision</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.vision}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Volleying</div>
                            <div className="pure-u-1-5" style={attributesRight}>{this.props.player.volleys}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
});
