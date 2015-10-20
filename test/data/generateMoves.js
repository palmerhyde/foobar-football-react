var Combinatorics = require('js-combinatorics');

var attributes = [
    'Defending',
    'Dribbling',
    'Passing',
    'Physical',
    'Shooting',
    'Sweat'
];

var keeperAttributes = [
    'Diving',
    'Handling',
    'Kicking',
    'Positioning',
    'Reflex',
    'Speed'
];

var moves = [];

cmb = Combinatorics.permutation(attributes, 2);

for (var i=0; i<cmb.length; i++) {
    var perms = cmb.toArray();
    var name = perms[i][0].substring(0,3).toUpperCase()  + ' VS ' + perms[i][1].substring(0,3).toUpperCase();
    var m = {};
    m.name = name;
    m.imageUrl = "http://localhost:63342/foobar-football-react/assets/images/pitch-chalk.jpg";
    m.type = "Single";
    m.attribute1a = perms[i][0];
    m.attribute2a = perms[i][1];
    moves.push(m);
}

cmb2 = Combinatorics.permutation(cmb.toArray(), 2);
for (var i=0; i<cmb2.length; i++) {
    var perms = cmb2.toArray();
    var name = perms[i][0][0].substring(0,3).toUpperCase() + '-' + perms[i][0][1].substring(0,3).toUpperCase() + ' VS ' + perms[i][1][0].substring(0,3).toUpperCase() + '-' + perms[i][1][1].substring(0,3).toUpperCase();
    var m = {};
    m.name = name;
    m.imageUrl = "http://localhost:63342/foobar-football-react/assets/images/pitch-chalk.jpg";
    m.type = "Team";
    m.attribute1a = perms[i][0][0];
    m.attribute1b = perms[i][0][1];
    m.attribute2a = perms[i][1][0];
    m.attribute2b = perms[i][1][1];
    moves.push(m);
}

console.log(JSON.stringify(moves));