var Reflux = require("reflux");

var AppConfig = require("./../appConfig.js"),
    ViaplayService = require("./../viaplayService.js");

module.exports = Reflux.createStore({
    pageData: {},

    sections: {},
    content: {},

    init: function(){
        ViaplayService.get(AppConfig.viaplayURL, this.setPageData);
    },

    setPageData: function (data) {
        this.pageData = JSON.parse(data);

        this.setSections();
        this.setContent();

        this.trigger("test");
    },

    setSections: function(){
        this.sections = this.pageData._links["viaplay:sections"]
    },

    setContent: function(){
        this.content = this.pageData._embedded["viaplay:blocks"]
    }
});