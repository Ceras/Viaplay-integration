var React = require('react'),
    ReactDom = require('react-dom');

var App = React.createClass({
    render: function(){
        return (
            <div>
                Hi!
            </div>
        )
    }
});

ReactDom.render(<App/>, document.getElementById('viaplay-integration'));