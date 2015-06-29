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
                            <img alt="club" src="http://futhead.cursecdn.com/static/img/15/clubs/243.png"/>
                        </div>
                        <div className="cardleft">
                            <img alt="nation"src="http://futhead.cursecdn.com/static/img/15/nations/52.png"/>
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
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Dribbling</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Finishing</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Heading</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Interceptions</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Long Passing</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Long Shot</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Marking</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Positioning</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Power Shot</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Short Passing</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Slide tackle</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Standing Tackle</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Stength</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Vision</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-4-5" style={attributesLeft}>Volleying</div>
                            <div className="pure-u-1-5" style={attributesRight}>90</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
});
