var React = require('react');
var Stadium = require('./stadium-card.js.jsx');
var StadiumStore = require('./../stores/stadium-store');

function get() {
    var stadiums = StadiumStore.Get();

    return {
        stadiums: stadiums
    };
}

module.exports = React.createClass({
    displayName: 'stadiums list component',
    mixins: [StadiumStore.mixin],
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
        if (!this.state.stadiums) {
            return false;
        }

        var style = {
            float : "left",
            transform: "scale(0.9)"
        };

        return (
            <div className="pure-u-8-8">
                {this.state.stadiums.map(function (stadium, index) {
                    return (
                        <div style={style}>
                            <Stadium stadium={stadium}  />
                        </div>
                    )
                }, this)
                }
            </div>
        );
    }
});