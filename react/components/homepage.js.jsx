var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <div>[foobar logo] <Link to="App">Home</Link> | <Link to="Match" params={{ match_id: "666" }}>Match</Link> | Players | ... | ... </div>
                </header>
                <h1>Home page</h1>
                <RouteHandler {...this.props}/>
            </div>
        );
    }
});