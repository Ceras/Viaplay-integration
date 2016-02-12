var React = require('react'),
    ReactDom = require('react-dom');

var Header = require("./components/header/header.jsx"),
    PageViewer = require ("./components/pageViewer/pageViewer.jsx");
    Footer = require("./components/footer/footer.jsx");

var style = {
    height: "100%",
    width: "100%"
};

var App = React.createClass({
    render: function(){
        return (
            <div style={style}>
                <Header/>
                <PageViewer/>
                <Footer/>
            </div>
        )
    }
});

ReactDom.render(<App/>, document.getElementById('viaplay-integration'));