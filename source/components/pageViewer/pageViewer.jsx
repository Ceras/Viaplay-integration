var React = require("react");

var Info = require("./info.jsx");

var style = {
    position: "absolute",
    top: "66px",
    bottom: "250px",
    left: "0",
    width: "100%",
    background: "#eee",
    overflowY: "scroll"
};

module.exports = React.createClass({
    getProductContent: function(){
        return this.props.content[0]._embedded["viaplay:product"].content
    },

    render: function(){
        return (
            <div style={style}>
                <Info {...this.getProductContent()} />
            </div>
        )
    }
});