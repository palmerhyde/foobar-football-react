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

        var attributes;

        switch (this.props.move.type) {
            case "Single":
                attributes = <div className="battle">
                    {this.props.move.attribute1a}<br/>
                    VS<br/>
                    {this.props.move.attribute1b}
                </div>
                break;
            case "Double":
                attributes = <div className="battle">
                    {this.props.move.attribute1a}<br/>
                    {this.props.move.attribute2a}<br/>
                    VS<br/>
                    {this.props.move.attribute1b}<br/>
                    {this.props.move.attribute2b}
                </div>
                break;
            case "Team":
                attributes = <div className="battle">
                    {this.props.move.attribute1a}<br/>
                    {this.props.move.attribute2a}<br/>
                    VS<br/>
                    {this.props.move.attribute1b}<br/>
                    {this.props.move.attribute2b}
                </div>
                break;
        }

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
                    Move - {this.props.move.type}
                </div>
                {attributes}
            </div>
        );
    }
});
