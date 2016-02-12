var React = require("react");

var Menu = require("./menu.jsx");

var style = {
        height: "66px",
        width: "auto",
        backgroundColor: "#212d33",
        margin: "0",
        padding: "0 67.5px 0 67.5px"
    },
    logoStyle = {
        height: "35px",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "left"
    },
    searchStyle = {
        float: "right",
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#F5F5F5"
    };

var menuItems = [
    {
        label: "SERIER",
        link: "#"
    },
    {
        label: "FILM",
        link: "#"
    },    {
        label: "SPORT",
        link: "#"
    },    {
        label: "BARN",
        link: "#"
    },
    {
        label: "HYRBUTIK",
        link: "#"
    }
];

module.exports = React.createClass({
    render: function(){
        return (
            <div style={style}>
                <a href="#"><img style={logoStyle}  src={"http://assets.viaplay.tv/frontend-010422016021130/images/header-logo-large.png"} /></a>
                <Menu menuItems={menuItems}/>
                <i className="fa fa-search" style={searchStyle} />
            </div>
        )
    }
});