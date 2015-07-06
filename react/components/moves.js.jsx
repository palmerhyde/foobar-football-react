var React = require('react');
var Move = require('./move-card.js.jsx');
var MoveStore = require('./../stores/move-store');

function getMoves() {
    var moves = MoveStore.Get();

    return {
        moves: moves
    };
}

module.exports = React.createClass({
    displayName: 'move list component',
    mixins: [MoveStore.mixin],
    getInitialState: function() {
        return getMoves();
    },
    componentDidMount: function (){
        this.setState(getMoves());
    },
    storeDidChange: function () {
        this.setState(getMoves());
    },
    render: function () {
        if (!this.state.moves) {
            return false;
        }

        var style = {
            float : "left",
            transform: "scale(0.9)"
        };

        return (
            <div className="pure-u-8-8">
                {this.state.moves.map(function (move, index) {
                    return (
                        <div style={style}>
                            <Move move={move}  />
                        </div>
                    )
                }, this)
                }
            </div>
        );
    }
});