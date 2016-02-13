var React = require("react");

var Info = require("./info.jsx"),
    Trailer = require("./trailer.jsx");

var style = {
    position: "absolute",
    top: "66px",
    bottom: "250px",
    left: "0",
    width: "100%",
    background: "#eee",
    paddingTop: "20px",
    overflowY: "scroll"
};

module.exports = React.createClass({
    getProductContent: function(){
        return this.props.content[0]._embedded["viaplay:product"].content
    },

    getProductImdbId: function () {
        return this.props.content[0]._embedded["viaplay:product"].content.imdb.id.replace("tt", "");
    },
    getProductImageUrl: function(){
        return this.props.content[0]._embedded["viaplay:product"].content.images.landscape.url
    },

    render: function(){
        var renderedInfo = this.getProductContent() ? (<Info {...this.getProductContent()} />) : ''

        return(
            <div style={style}>
                <Trailer imageUrl={this.getProductImageUrl()} imdbId={this.getProductImdbId()} />
                {renderedInfo}
            </div>
        )
    }
});