$(document).ready(function() {
  // random computer variable array
  var rand = [];

  for (var r = 19; r < 121; r++) {
    rand.push(r);
  }

  // crystal numbers array
  var crystals = [];

  for (var c = 1; c < 13; c++) {
    crystals.push(c);
  }

  // random variables selected by computer
  var randNumber; // number to match
  var crystalNumbers = []; // for array of random crystal values

  var c1;
  var c2;
  var c3;
  var c4;

  var totalScore = 0; // user's score

  var wins = 0;
  var losses = 0;

  // pick a random number
  function pickRandomNumber(arr) {
    var x = arr[Math.floor(Math.random() * arr.length)];
    randNumber = x;
    $("#randomNumber").html(randNumber);

    console.log("random number: " + randNumber);
  }

  // pick random numbers for crystals

  function pickRandomCrystals(arr) {
    for (var y = 0; y < 4; y++) {
      var a = arr[Math.floor(Math.random() * arr.length)];

      crystalNumbers.push(a);
    }
    // check which numbers have been picked
    console.log("crystal numbers: " + crystalNumbers);
  }

  function crystalValues(arr) {
    // change value of each crystal button according to array
    for (i = 0; i < arr.length; i++) {
      $("#button-" + (i + 1)).attr("value", arr[i]);
      console.log(this);
    }
    c1 = arr[0];
    c2 = arr[1];
    c3 = arr[2];
    c4 = arr[3];
  }

  function gameReset(x) {
    crystalNumbers = []; // clears crystal number values

    pickRandomNumber(rand);

    pickRandomCrystals(crystals);

    crystalValues(crystalNumbers);

    totalScore = 0;
    $("#totalNumber").html(totalScore);

    alert(x);
  }

  pickRandomNumber(rand); // random number to match
  pickRandomCrystals(crystals); // array of random crystal values
  crystalValues(crystalNumbers);

  // button functions on click

  $("#button-1").on("click", function() {
    totalScore += c1;
    $("#totalNumber").html(totalScore);
  });

  $("#button-2").on("click", function() {
    totalScore += c2;
    $("#totalNumber").html(totalScore);
  });

  $("#button-3").on("click", function() {
    totalScore += c3;
    $("#totalNumber").html(totalScore);
  });

  $("#button-4").on("click", function() {
    totalScore += c4;
    $("#totalNumber").html(totalScore);
  });

  $("button").on("click", function() {
    // if the user wins...
    if (totalScore == randNumber) {
      wins++;
      console.log(totalScore);
      $("#totalNumber").html(totalScore);
      $("#wins").html("Wins: " + wins);

      setTimeout(function() {
        gameReset("YOU WIN!!");
      }, 200);
    } else if (totalScore > randNumber) {
      losses++;
      $("#totalNumber").html(totalScore);
      $("#losses").html("Losses: " + losses);

      setTimeout(function() {
        gameReset("WOMP-WOMP...YOU LOSE!");
      }, 200);
    }
  });
});
