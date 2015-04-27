var React = require('react');
var Container = require('./card.js.jsx');

window.onload = function() {
    React.render(
        React.createElement(Container, document.body),
        document.getElementById('ReactContainer'));
}