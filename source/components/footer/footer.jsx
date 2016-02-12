var React = require("react");

var style = {
    position: "absolute",
    height: "50px",
    left: "0",
    bottom: "0",
    width: "100%",
    background: "green"
};

module.exports = React.createClass({
    render: function(){
        return (
            <div style={style}>
                awsome footer
            </div>
        )
    }
});