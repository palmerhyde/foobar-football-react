var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;
var App = require('./components/app.js.jsx');
var HomePage = require('./components/homepage.js.jsx');
var Match = require('./components/match.js.jsx');
var Players = require('./components/players.js.jsx');
var Moves = require('./components/moves.js.jsx');
var Stadiums = require('./components/Stadiums.js.jsx');
var Chants = require('./components/Chants.js.jsx');
var NotFound = require('./components/not-found.js.jsx');
var RouteActions = require('./actions/route-actions');

var routes = (
    <Route name="App" path= "/" handler={App}>
        <Route name="Match" path="/matches/:match_id" handler={Match} />
        <Route name="Poker" path="/poker/" handler={Moves} />
        <Route name="Players" path="/players" handler={Players} />
        <Route name="Moves" path="/moves" handler={Moves} />
        <Route name="Stadiums" path="/stadiums" handler={Stadiums} />
        <Route name="Chants" path="/chants" handler={Chants} />
        <DefaultRoute handler={HomePage} />
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler, state) {
    var params = state.params;

    // Hardcode user for now
    //RouteActions.receiveUserId(269880);
    RouteActions.receiveMoves();
    RouteActions.receivePokerPlayers();
    RouteActions.receiveStadiums();
    RouteActions.receiveChants();
    RouteActions.receiveMatchId(666);

    //if (params.match_id) {
    //    RouteActions.receiveMatchId(params.match_id);
    //}

    React.render(<Handler params={params}/>, document.getElementById('ReactContainer'));
});