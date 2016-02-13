module.exports = {
    get: function(url, callback){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);

        xhr.onload = function (e) {
            if (this.status == 200) {
                callback(this.response);
            }
        };
        xhr.send();
    }
};