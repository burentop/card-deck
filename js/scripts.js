var suits = ["spades", "diamonds", "clubs", "hearts"];
var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

$(document).ready(function () {
  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
      $("#results").append("<li>" + rank + " of " + suit + "</li>");
    });
  });
});