$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var sentence = $("input#sentence").val()
    var sentence2 = sentence.split(" ");
    // var sentence3 = sentence2.length(3);

    var sentence3 = [];

    sentence2.forEach(function(word) {
    var wordLength = word.length;
    if (wordLength >= 3) {
      sentence3.push(word);


    } else {

    };

   sentence3.reverse();
   // sentence3.join('   '));
   $("#results").text(sentence3.join(" "));

  });
    event.preventDefault();
  });
});
