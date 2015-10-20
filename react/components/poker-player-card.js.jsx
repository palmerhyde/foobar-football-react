var React = require('react');

module.exports = React.createClass({
    displayName: 'poker player card component',

    getSuitSymbol: function(suit) {
        switch (suit) {
            case "hearts":
                return {__html: '&hearts;'};
            case "diamonds":
                return {__html: '&diams;'};
            case "spades":
                return {__html: '&spades;'};
            case "clubs":
                return {__html: '&clubs;'};
        }
    },
    render: function () {
        if (!this.props.player) {
            return false;
        }

        var blackSuitStyle = {
            fontSize : "30px",
            color: "black"
        };

        var redSuitStyle = {
            fontSize : "30px",
            color: "red"
        };

        var blackSuitBottomStyle = {
            fontSize : "30px",
            color: "black",
            bottom: "30px",
            position: "absolute",
            right: "5px",
            transform: "rotate(180deg)"
        };

        var redSuitBottomStyle = {
            fontSize : "30px",
            color: "red",
            bottom: "30px",
            position: "absolute",
            right: "5px",
            transform: "rotate(180deg)"
        };

        var blackValueBottomStyle = {
            fontSize : "30px",
            color: "black",
            bottom: "5px",
            position: "absolute",
            right: "5px",
            transform: "rotate(180deg)"
        };

        var redValueBottomStyle = {
            fontSize : "30px",
            color: "red",
            bottom: "5px",
            position: "absolute",
            right: "5px",
            transform: "rotate(180deg)"
        };

        var photoStyle = {
            width: "150px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
        };

        var cardStyle = {
            backgroundColor: "white"
        };

        var nameStyle = {
            textAlign: "center",
            marginTop: "10px"
        };

        var typeUpStyle = {
            position: "absolute",
            left: "40px",
            top: "10px"
        };

        var typeDownStyle = {
            position: "absolute",
            right: "40px",
            bottom: "10px",
            transform: "rotate(180deg)"
        };

        var moveUpStyle = {
            position: "absolute",
            left: "40px",
            top: "30px",
            fontSize : "12px"

        };

        var moveDownStyle = {
            position: "absolute",
            right: "40px",
            bottom: "30px",
            transform: "rotate(180deg)",
            fontSize : "12px"
        };

        var upStats = {
            position: "absolute",
            top: "5px",
            right: "5px"
        };

        var downStats = {
            position: "absolute",
            bottom: "5px",
            left: "5px",
            transform: "rotate(180deg)"
        };

        var damageStat = {
            backgroundColor: "red",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            height: "17px",
            minWidth: "14px",
            padding: "4px 5px 0 5px",
            marginTop: "3px"
        };

        var blockDamageStat = {
            backgroundColor: "blue",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            height: "17px",
            minWidth: "14px",
            padding: "4px 5px 0 5px",
            marginTop: "3px"
        };

        var paceStat = {
            backgroundColor: "orange",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            height: "17px",
            minWidth: "14px",
            padding: "4px 5px 0 5px",
            marginTop: "3px"
        };

        var costStat = {
            backgroundColor: "green",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            height: "17px",
            minWidth: "14px",
            padding: "4px 5px 0 5px",
            marginTop: "3px"
        };

        var buildupStat = {
            backgroundColor: "pink",
            borderRadius: "12px",
            color: "white",
            textAlign: "center",
            height: "17px",
            minWidth: "14px",
            padding: "4px 5px 0 5px",
            marginTop: "3px"
        };

        var suitUpStyle = function (suit) {
            if (suit == "hearts" || suit == "diamonds") {
                return redSuitStyle
            }

            return blackSuitStyle;
        };

        var suitDownStyle = function (suit) {
            if (suit == "hearts" || suit == "diamonds") {
                return redSuitBottomStyle
            }

            return blackSuitBottomStyle;
        };

        var valueUpStyle = function (suit) {
            if (suit == "hearts" || suit == "diamonds") {
                return redSuitStyle
            }

            return blackSuitStyle;
        };

        var valueDownStyle = function (suit) {
            if (suit == "hearts" || suit == "diamonds") {
                return redValueBottomStyle
            }

            return blackValueBottomStyle;
        };



        return (
            <div className="card" style={cardStyle}>
                <div className="clear"></div>
                <div style={valueUpStyle(this.props.suit)}>{this.props.player.rank}</div>
                <div style={suitUpStyle(this.props.suit)} dangerouslySetInnerHTML={this.getSuitSymbol(this.props.suit)}></div>

                <div style={typeUpStyle}>{this.props.player.up.type}
                    { this.props.player.up.combo ?
                        <span> - {this.props.player.up.combo}</span>
                        :
                        null
                    }
                    </div>
                <div style={moveUpStyle}>{this.props.player.up.move}
                </div>

                <div style={upStats}>
                    { this.props.player.up.damage > 0 ?
                    <div style={damageStat}>{this.props.player.up.damage}</div>
                        :
                        null
                        }
                    { this.props.player.up.repeatDamage > 0 ?
                    <div style={damageStat}>{this.props.player.up.repeatDamage}</div>
                        :
                        null
                        }
                    { this.props.player.up.blockDamage > 0 ?
                    <div style={blockDamageStat}>{this.props.player.up.blockDamage}</div>
                        :
                        null
                        }
                    { this.props.player.up.pace > 0 ?
                    <div style={paceStat}>{this.props.player.up.pace}</div>
                        :
                        null
                        }
                    { this.props.player.up.cost > 1 ?
                    <div style={costStat}>{this.props.player.up.cost}</div>
                        :
                        null
                        }
                    { this.props.player.up.buildup > 0 ?
                    <div style={buildupStat}>{this.props.player.up.buildup}</div>
                        :
                        null
                        }
                </div>

                <div style={photoStyle}>
                    <img style={photoStyle} src={this.props.player.imageUrl} />
                    <div style={nameStyle}>{this.props.player.name}</div>
                </div>

                <div style={downStats}>
                    { this.props.player.down.damage > 0 ?
                    <div style={damageStat}>{this.props.player.down.damage}</div>
                        :
                        null
                        }
                    { this.props.player.down.repeatDamage > 0 ?
                    <div style={damageStat}>{this.props.player.down.repeatDamage}</div>
                        :
                        null
                        }
                    { this.props.player.down.blockDamage > 0 ?
                    <div style={blockDamageStat}>{this.props.player.down.blockDamage}</div>
                        :
                        null
                        }
                    { this.props.player.down.pace > 0 ?
                    <div style={paceStat}>{this.props.player.down.pace}</div>
                        :
                        null
                        }
                    { this.props.player.down.cost > 1 ?
                    <div style={costStat}>{this.props.player.down.cost}</div>
                        :
                        null
                        }
                    { this.props.player.down.buildup > 0 ?
                    <div style={buildupStat}>{this.props.player.down.buildup}</div>
                        :
                        null
                        }
                </div>

                <div style={moveDownStyle}>{this.props.player.down.move}
                </div>
                <div style={typeDownStyle}>{this.props.player.down.type}
                    { this.props.player.down.combo ?
                    <span> - {this.props.player.down.combo}</span>
                        :
                        null
                        }
                </div>
                <div style={suitDownStyle(this.props.suit)} dangerouslySetInnerHTML={this.getSuitSymbol(this.props.suit)}></div>
                <div style={valueDownStyle(this.props.suit)}>{this.props.player.rank}</div>
            </div>
        );
    }
});
