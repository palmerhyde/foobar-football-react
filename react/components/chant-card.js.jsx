var React = require('react');

module.exports = React.createClass({
    displayName: 'chant card component',
    render: function () {
        if (!this.props.chant) {
            return false;
        }

        var style = {
            marginTop : "60px"
        };

        var url = "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?url=" + this.props.chant.imageUrl + "&container=focus&resize_w=215&resize_h=105";

        return (
            <div className="card">
                <div class="clear"></div>
                <div className="title">
                    {this.props.chant.name}
                </div>
                <div className="photoStadium">
                    <img alt="picture" src={url} />
                </div>
                <div className="type">
                    {this.props.chant.type}
                </div>
                <div className="stadium">
                    <div>{this.props.chant.description}</div>
                    <div>
                        <img className="club" src={this.props.chant.synergyUrl} style={style} />
                    </div>
                    { this.props.chant.chantUrl ?
                        <a href={this.props.chant.chantUrl} target="_blank">
                            <img alt="wikipedia" className="wikipedia bottomRight"
                                 src="data:image/png;base64,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"/>
                        </a> :
                        null
                    }
                </div>
            </div>
        );
    }
});