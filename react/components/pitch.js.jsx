var React = require('react');
var PlayerChip = require('./player-chip.js.jsx');

module.exports = React.createClass({
    displayName: 'pitch component',
    propTypes: {
        matchView: React.PropTypes.object
    },
    getInitialState: function() {
        return { matchView: {
                yourTeam: {
                    name: 'Molloy FC',
                    colour1: 'darkblue',
                    colour2: 'gold',
                    goalkeeper: {
                        name: "Player 1",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/192119.png",
                        active: true
                    },
                    defenders: [
                        {
                            name: "Paolo Maldini",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/1109.png",
                            active: true
                        },
                        {
                            name: "John Terry",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/13732.png",
                            active: true
                        },
                        {
                            name: "Bobby Moore",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/190044.png",
                            active: true
                        },
                        {
                            name: "Branislav Ivanovic",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/178372.png",
                            active: true
                        }
                    ],
                    midfielders: [
                        {
                            name: "Rudd Gullit",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/214100.png",
                            active: true
                        },
                        {
                            name: "Frank Lampard",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/5471.png",
                            active: true
                        },
                        {
                            name: "Roy Keane",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/240.png",
                            active: true
                        },
                        {
                            name: "Edan Hazard",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/183277.png",
                            active: true
                        }
                    ],
                    attackers: [
                        {
                            name: "Diego Costa",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/179844.png",
                            active: true
                        },
                        {
                            name: "Gian Franco Zola",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/1201.png",
                            active: true
                        }
                    ]
                },
            opponentsTeam: {
                name: 'Sweaty FC',
                colour1: 'white',
                colour2: 'gold',
                goalkeeper: {
                    name: "David De Gea",
                    imageUrl: "http://futhead.cursecdn.com/static/img/15/players/193080.png",
                    active: true
                },
                defenders: [
                    {
                        name: "Javi Martinez",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/177610.png",
                        active: true
                    },
                    {
                        name: "Raul Albiol",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/157481.png",
                        active: true
                    },
                    {
                        name: "Pique",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/152729.png",
                        active: true
                    }
                ],
                midfielders: [
                    {
                        name: "Xavi Alonso",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/10535.png",
                        active: true
                    },
                    {
                        name: "Isco",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/197781.png",
                        active: true
                    },
                    {
                        name: "Jesus Navas",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/146536.png",
                        active: true
                    },
                    {
                        name: "Juan Mata",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/178088.png",
                        active: true
                    },
                    {
                        name: "Koke",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/193747.png",
                        active: true
                    }
                ],
                attackers: [
                    {
                        name: "Soldado",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/146758.png",
                        active: true
                    },
                    {
                        name: "Fernando Torres",
                        imageUrl: "http://futhead.cursecdn.com/static/img/15/players/49369.png",
                        active: true
                    }
                ]
            }
            }
        };
    },
    componentDidMount: function (){
        // Get teams
        this.setState(getInitialState());
    },
    render: function () {
        return (
            <div className="pure-g pitch">
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        <PlayerChip player={this.state.matchView.yourTeam.goalkeeper} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.state.matchView.yourTeam.defenders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.state.matchView.yourTeam.midfielders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.state.matchView.yourTeam.attackers.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.yourTeam.colour1} colour2={this.state.matchView.yourTeam.colour2} />
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.state.matchView.opponentsTeam.attackers.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.opponentsTeam.colour1}
                                            colour2={this.state.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        {this.state.matchView.opponentsTeam.midfielders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.opponentsTeam.colour1}
                                            colour2={this.state.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        {this.state.matchView.opponentsTeam.defenders.map(function (player, index) {
                            return (
                                <PlayerChip player={player} colour1={this.state.matchView.opponentsTeam.colour1}
                                            colour2={this.state.matchView.opponentsTeam.colour2}/>
                            )
                        }, this)
                        }
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        <PlayerChip player={this.state.matchView.opponentsTeam.goalkeeper} colour1={this.state.matchView.opponentsTeam.colour1} colour2={this.state.matchView.opponentsTeam.colour2}  />
                    </div>
                </div>
            </div>
        );
    }
});
