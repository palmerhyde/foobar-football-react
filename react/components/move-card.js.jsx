var React = require('react');

module.exports = React.createClass({
    displayName: 'move card component',
    render: function () {
        if (!this.props.move) {
            return false;
        }

        var style = {
            textAlign: "right",
            fontFamily: "PremierLeague"
        };

        var style2 = {
            textAlign: "left",
            fontFamily: "PremierLeague"
        };
        var synergy = {
            color: "white",
            marginTop: "65px"
        };

        var attributes;

        switch (this.props.move.type) {
            case "Single":
            case "Single - Keeper":
                attributes = <div className="battle">
                    <div>
                        <div className="pure-g">
                            <div className="pure-u-2-5" style={style}>{this.props.move.attribute1a}</div>
                            <div className="pure-u-1-5">VS</div>
                            <div className="pure-u-2-5" style={style2}>{this.props.move.attribute1b}</div>
                        </div>
                    </div>
                </div>
                break;
            case "Team":
            case "Team - Keeper":
                attributes = <div className="battle">
                    <div>
                        <div className="pure-g">
                            <div className="pure-u-2-5" style={style}>{this.props.move.attribute1a}</div>
                            <div className="pure-u-1-5">VS</div>
                            <div className="pure-u-2-5" style={style2}>{this.props.move.attribute1b}</div>
                        </div>
                        <div className="pure-g">
                            <div className="pure-u-2-5" style={style}>{this.props.move.attribute2a}</div>
                            <div className="pure-u-1-5">VS</div>
                            <div className="pure-u-2-5" style={style2}>{this.props.move.attribute2b}</div>
                        </div>
                        <div style={synergy}>{this.props.move.synergy}</div>
                    </div>
                </div>
                break;
        }

        return (
            <div className="card">
                <div className="clear"></div>
                <div className="title">
                    {this.props.move.name}
                </div>
                <div className="photoMove">
                    <img alt="picture" src={this.props.move.imageUrl} />
                </div>
                <div className="type">
                    Move - {this.props.move.type}
                </div>
                {attributes}
            </div>
        );
    }
});
