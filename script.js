var tweetStart = '<a title="Tweet this!" target="_blank" href="https://twitter.com/intent/tweet?text=';
var tweetEnd = '"><i class="fab fa-twitter social"></i></a>';
// Colors to choose from
var colorArr = [
  "#6BA3FF",
  "#D470FF",
  "#FF87AF",
  "#B5B5B5",
  "#000000",
  "#FF8563",
  "#CC3737",
  "#BF5FFF"
];

$(document).ready(function() {
  var url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

  function getQuote() {
    $.getJSON(url, function(data) {
      $("#quote").text(data.quoteText);
      if (data.quoteAuthor != "") $("#author").text(data.quoteAuthor);
      else $("#author").text("Unknown");
      $("#twitter").html(
        tweetStart + data.quoteText + "-" + data.quoteAuthor + tweetEnd
      );
    });
  }
  // Quote Generator
  getQuote();
  $("#generate").on("click", function(html) {
    var rand = colorArr[Math.floor(Math.random() * 8)];
    $("body").css("background-color", rand);
    $(".icon").css("color", rand);
    getQuote();
  });
});
