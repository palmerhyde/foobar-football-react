var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;
var App = require('./components/app.js.jsx');
var HomePage = require('./components/homepage.js.jsx');
var Pitch = require('./components/pitch.js.jsx');
var NotFound = require('./components/not-found.js.jsx');
//var RouteActions = require('./actions/route-actions.js.jsx');

var routes = (
    <Route name="App" path= "/" handler={App}>
        <Route name="Match" path="/matches/:match_id" handler={Pitch} />
        <DefaultRoute handler={HomePage} />
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler, state) {
    var params = state.params;

    // Hardcode user for now
    //RouteActions.receiveUserId(269880);

    //if (params.match_id) {
      //  RouteActions.receiveRoomId(params.room_id);
    //}

    React.render(<Handler params={params}/>, document.getElementById('ReactContainer'));
});