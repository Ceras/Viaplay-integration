var React = require("react");

var style = {
    position: "absolute",
    top: "50px",
    bottom: "50px",
    left: "0",
    width: "100%",
    background: "#eee"
};

module.exports = React.createClass({
    render: function(){
        return (
            <div style={style}>
                Content
            </div>
        )
    }
});