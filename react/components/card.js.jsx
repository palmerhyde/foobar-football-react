//var React = require('react');
//var Store = require('../stores/player-store');
//var Player = require('./player.js.jsx');
//var Actions = require('../actions/actions');
//
//module.exports = React.createClass({
//    displayName: 'card container',
//    mixins: [Store.mixin],
//    componentWillMount: function () {
//        this.mockPlayers = Store.Get();
//    },
//
//    addPlayer: function() {
//        console.log('add player');
//        Actions.addPlayer();
//    },
//
//    onChange: function (){
//        console.log('store change detected');
//        this.setState(this.mockPlayers);
//    },
//
//    render: function () {
//        return (
//            <div className="cards">
//
//                <a href="#" onClick={this.addPlayer}>Add Player</a>
//
//                {this.mockPlayers.map(function (player) {
//                    return (
//                        <Player key={player.key} player={player} />
//                    );
//                })}
//            </div>
//
//        );
//    }
//});