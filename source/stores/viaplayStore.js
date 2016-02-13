var Reflux = require("reflux");

var AppConfig = require("../appConfig.js"),
    ViaplayService = require("../viaplayService.js");

module.exports = Reflux.createStore({
    pageData: {},

    init: function(){
        ViaplayService.get(AppConfig.viaplayURL, this.setPageData);
    },

    setPageData: function (data) {
        this.pageData = JSON.parse(data);
        this.trigger("test");
    },

    getSections: function(){
        return this.pageData._links["viaplay:sections"]
    }
});