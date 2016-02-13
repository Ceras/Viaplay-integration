var React = require('react'),
    ReactDom = require('react-dom');

var ViaplayStore = require("./stores/viaplayStore.js");

var Header = require("./components/header/header.jsx"),
    PageViewer = require ("./components/pageViewer/pageViewer.jsx");
    Footer = require("./components/footer/footer.jsx");

var style = {
    height: "100%",
    width: "auto"
};

var App = React.createClass({
    getInitialState: function(){
        return {
            sections: ViaplayStore.getSections()
        }
    },

    componentDidMount: function() {
        this.unsubscribe = ViaplayStore.listen(function(){
            console.log("test");
        });
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },

    setPageData: function (t) {
        this.setState({
            sections: ViaplayStore.getSections()
        })
    },

    render: function(){
        return (
            <div style={style}>
                <Header sections={this.state.sections}/>
                <PageViewer/>
                <Footer/>
            </div>
        )
    }
});

ReactDom.render(<App/>, document.getElementById('viaplay-integration'));