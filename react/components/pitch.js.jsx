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
                            name: "Player 2",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/184432.png",
                            active: false
                        },
                        {
                            name: "Player 3",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/13732.png",
                            active: true
                        },
                        {
                            name: "Player 4",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/179944.png",
                            active: true
                        },
                        {
                            name: "Player 5",
                            imageUrl: "http://futhead.cursecdn.com/static/img/15/players/178372.png",
                            active: false
                        }
                    ],
                    midfielders: [

                    ],
                    attackers: [

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

                ],
                attackers: [

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
                        <div className="circle rainbow active"></div>
                        <div className="circle red bg active"></div>
                        <div className="circle red bg active"></div>
                        <div className="circle red bg active"></div>
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        <div className="circle red  not-active"></div>
                        <div className="circle red"></div>
                    </div>
                </div>
                <div className="pure-u-1-8 lightStripe">
                    <div className="valign">
                        <div className="circle blue  not-active"></div>
                        <div className="circle blue"></div>
                    </div>
                </div>
                <div className="pure-u-1-8 darkStripe">
                    <div className="valign">
                        <div className="circle blue active"></div>
                        <div className="circle blue"></div>
                        <div className="circle blue active"></div>
                        <div className="circle blue active"></div>
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
