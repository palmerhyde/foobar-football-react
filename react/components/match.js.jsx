var React = require('react');
var Router = require('react-router');
var Pitch = require('./pitch.js.jsx');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    render: function () {
        style = {
            height: '50px'
        };

        style2 = {
            height: '75%'
        };

        return (
            <div>
                <div className="pure-g" style={style}>
                        <div className="pure-u-1-1">PalmerHyde FC Vs Sweaty FC</div>
                </div>
                <div className="pure-g" style={style2}>
                    <div className="pure-u-3-4">
                        <Pitch/>
                    </div>
                    <div className="pure-u-4-4"/>
                </div>
            </div>
        );
    }
});