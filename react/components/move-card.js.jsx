var React = require('react');

module.exports = React.createClass({
    displayName: 'move card component',
    render: function () {
        if (!this.props.move) {
            return false;
        }

        var style = {
            backgroundColor: "purple",
            borderColor: "gold"
        };

        var style2 = {
            backgroundColor: "white",
            borderColor: "gold"
        };

        return (
            <div className="card">
                <div class="clear"></div>
                <div className="title">
                    {this.props.move.name}
                </div>
                <div className="photoMove">
                    <img alt="picture" src={this.props.move.imageUrl} />
                </div>
                <div className="type">
                    Move
                </div>
                <div className="battle">
                    Short Passing<br/>
                    VS<br/>
                    Interceptions
                </div>
            </div>
        );
    }
});
