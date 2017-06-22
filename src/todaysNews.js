
(function(exports){

  function TodaysNews() {
    this.news = [];
  };

  TodaysNews.prototype.callAPI = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    return JSON.parse(xhr.responseText);
  }

  // TodaysNews.news = callAPI("https://content.guardianapis.com/search?api-key=6211c929-454e-45c6-b48e-eaa58111aa69")

  exports.TodaysNews = TodaysNews;

})(this);
