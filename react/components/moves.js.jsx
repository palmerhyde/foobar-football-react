var React = require('react');
var PokerPlayer = require('./poker-player-card.js.jsx');
var Store = require('./../stores/poker-player-store');

function getData() {
    var data = Store.Get();

    return {
        data: data
    };
}

module.exports = React.createClass({
    displayName: 'poker player list component',
    mixins: [Store.mixin],
    getInitialState: function() {
        return getData();
    },
    componentDidMount: function (){
        this.setState(getData());
    },
    storeDidChange: function () {
        this.setState(getData());
    },
    render: function () {
        if (!this.state.data) {
            return false;
        }

        var style = {
            float : "left",
            transform: "scale(0.9)"
        };

        return (
            <div className="pure-u-8-8">
                {this.state.data.map(function (data, index) {
                    return (
                        <div key={index} style={style}>
                            <PokerPlayer player={data} suit="hearts" />
                            <PokerPlayer player={data} suit="clubs" />
                            <PokerPlayer player={data} suit="diamonds" />
                            <PokerPlayer player={data} suit="spades" />
                        </div>
                    )
                }, this)
                }
            </div>
        );
    }
});