var React = require('react');
var Chant = require('./chant-card.js.jsx');
var ChantStore = require('./../stores/chant-store');

function get() {
    var chants = ChantStore.Get();

    return {
        chants: chants
    };
}

module.exports = React.createClass({
    displayName: 'chants list component',
    mixins: [ChantStore.mixin],
    getInitialState: function() {
        return get();
    },
    componentDidMount: function (){
        this.setState(get());
    },
    storeDidChange: function () {
        this.setState(get());
    },
    render: function () {
        if (!this.state.chants) {
            return false;
        }

        var style = {
            float : "left",
            transform: "scale(0.9)"
        };

        return (
            <div className="pure-u-8-8">
                {this.state.chants.map(function (chant, index) {
                    return (
                        <div style={style}>
                            <Chant stadium={chant}  />
                        </div>
                    )
                }, this)
                }
            </div>
        );
    }
});