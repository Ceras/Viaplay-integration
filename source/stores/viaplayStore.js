var Reflux = require("reflux");

var AppConfig = require("./../appConfig.js"),
    RestService = require("./../restService.js");

module.exports = Reflux.createStore({
    pageData: {},

    sections: {},
    content: {},

    init: function(){
        RestService.get(AppConfig.viaplayUrl, this.setPageData);
    },

    setPageData: function (data) {
        this.pageData = JSON.parse(data);

        this.setSections();
        this.setContent();

        this.trigger();
    },

    setSections: function(){
        this.sections = this.pageData._links["viaplay:sections"]
    },

    setContent: function(){
        this.content = this.pageData._embedded["viaplay:blocks"]
    }
});