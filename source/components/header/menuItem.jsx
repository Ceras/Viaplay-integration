var React = require("react");

module.exports = React.createClass({
    getInitialState: function(){
        return {
            mouseOver: false
        }
    },

    getComponentStyle: function(){
        var style = {
            display: "inline-block",
            height: "100%",
            padding: "25px 10px 0 10px" // 25px(top) is an ugly hack to align the text
        };

        if(this.state.mouseOver){
            style.backgroundColor = "#eee"; //"#eee"
        }

        return style ;
    },

    getLinkStyle: function () {
        var linkStyle = {
            textDecoration: "none",
            color: "white"
        };

        if(this.state.mouseOver){
            linkStyle.color = "black";
        }

        return linkStyle ;
    },

    onEnter: function(){
        this.setState({mouseOver: true});
    },

    onExit: function(){
        this.setState({mouseOver: false});
    },

    render: function(){
        return(
            <div style={this.getComponentStyle()} onMouseOver={this.onEnter} onMouseOut={this.onExit}>
                <a style={this.getLinkStyle()} href="#">{this.props.title}</a>
            </div>
        )
    }
});