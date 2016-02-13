var React = require("react");

var AppConfig = require("./../../appConfig.js"),
    RestService = require("./../../restService.js");

var style = {
        width: "50%",
        maxWidth: "50%",
        float: "left"
    }, imageStyle = {
        width: "100%"
    };

module.exports = React.createClass({
    getInitialState: function(){
        this.getTrailerData();

        return {
            trailerData: {}
        }
    },

    getTrailerData: function(){
        // Blocked from TrailerAddict by CORS
        //var url = AppConfig.trailerAddictUrl;
        //RestService.get(url, this.setTrailerData)
    },
    setTrailerData: function(data){
        this.setState({
            trailerData: data
        });
    },
    render: function(){
        return (
            <div style={style}>
                <img style={imageStyle} src={this.props.imageUrl}/>
            </div>
        )
    }
});