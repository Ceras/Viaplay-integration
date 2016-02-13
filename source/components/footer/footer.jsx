var React = require("react");

var style = {
        position: "absolute",
        height: "250px",
        padding: "30px 30px 0 30px",
        left: "0",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#212d33",
        overflow: "hidden"
    },
    logoContainerStyle = {
        display: "inline-block",
        paddingRight: "20px",
        float: "left"
    },
    listContainerStyle = {
        display:"inline-block",
        height: "100%"
    },
    listHeaderStyle = {
        color: "#fefefe"
    },
    listItemContainerStyle = {
        display: "inline-block",
        listStyle: "none",
        margin: "0",
        padding: "10px 0 0 0"
    },
    listItemStyle = {
        marginTop:"10px"
    },
    listItemTextStyle = {
        textDecoration: "none",
        color: "#d3d3d3"
    };

var lists = [
    {
        header: "VIAPLAY",
        content: [
            {label: "Serier", link: "#"},
            {label: "Film", link: "#"},
            {label: "Sport", link: "#"},
            {label: "Barn", link: "#"},
            {label: "Hyrbutik", link: "#"}
        ]
    }
];

module.exports = React.createClass({
    render: function(){
        var renderedList = lists.map(function(list){
            var renderedListItems = list.content.map(function(listItem){
                return (<li key={listItem.label} style={listItemStyle}><a style={listItemTextStyle} href={listItem.link}>{listItem.label}</a></li>)
            });
            return (
            <div key={list.header} style={{height:"100%"}}>
                <div style={listHeaderStyle}>{list.header}</div>
                <ul style={listItemContainerStyle}>{renderedListItems}</ul>
            </div>
            )
        });

        return (
            <div style={style}>
                <div style={logoContainerStyle}>
                    <img src="http://assets.viaplay.tv/frontend-010422016021130/images/footer_logo_on_dark.png"/>
                </div>
                <div style={listContainerStyle}>
                    {renderedList}
                </div>
            </div>
        )
    }
});