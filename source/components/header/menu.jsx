var React = require("react");

var MenuItem = require("./menuItem.jsx");

var style = {
    display: "inline-block",
    height: "100%",
    margin: "0",
    padding: "0 0 0 67.5px",
    color: "#FEFEFE"
};

module.exports = React.createClass({
    render: function(){
        var renderedMenuItems = this.props.menuItems.map(function(menuItem){
            return (<MenuItem key={menuItem.label} {...menuItem}/>);
        });
        return (
            <div style={style}>
                {renderedMenuItems}
            </div>
        )
    }
});