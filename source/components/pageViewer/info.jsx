var React = require("react");

var style = {
        width: "50%",
        float: "right"
    },
    h1Style = {
        margin: "0"
    },
    h2Style = {
        margin: "0"
    };


module.exports = React.createClass({
    getActorsList: function(){
        return this.props.people.actors.join(", ");
    },
    getDirectorsList: function(){
        return this.props.people.directors.join(", ");
    },

    render: function () {
        return (
            <div style={style}>
                <h1 style={h1Style}>{this.props.title}</h1>
                <h2 style={h2Style}>this.props. | {this.props.production.year}</h2>
                <h2 style={h2Style}>{this.props.duration.readable}</h2>

                <p><strong>{this.props.imdb.rating}</strong> från {this.props.imdb.voters} användare</p>
                <p>{this.props.synopsis}</p>
                <div><strong>Skådespelare: </strong>{this.getActorsList()}</div>
                <div><strong>Regissör: </strong>{this.getDirectorsList()}</div>
                <div><strong>Land: </strong>{this.props.production.country}</div>

            </div>
        )
    }
});