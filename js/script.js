var userids = $("input#name1").val();
var text = "";
var userid = function(userids){
    if ((userids !== "mike") && (userids !== "stan")) {
      return text = "Oohps!! Wrong user ID.";
    }
    else {
      $(".login").fadeOut();
      $(".form-1").fadeIn();
      return text = "Success";
    }
  };

  // var income1 = parseInt($("input#income1").val());
  // var reason1 = $("input#reason1").val();
  // var income2 = parseInt($("input#income2").val());
  // var reason2 = $("input#reason2").val();
  //
  // var food = parseInt($("input#food").val());
  // var transport = parseInt($("input#transport").val());
  // var others = parseInt($("input#others").val());
  // var others1 = $("input#others1").val();






$(document).ready(function(){
  $("form#form-a").submit(function(event) {
    var userids = $("input#name1").val();
    var result1 = userid(userids);
      document.getElementById("result1").innerHTML = result1;
      event.preventDefault();
    });

    // Calculating the things

    // Decalring Vaiables
    var income1, income2, food, transport, others, expenses,incomes, evaluation, percentage = 0;
    var reason1, reason2, others1, text2 = ""

    // Creating the function that calculates percentage of income used
    var percentages = function(percentage){
      expenses = food + transport + others;
      incomes = income1 + income2;
      evaluation = incomes - expenses;

      percentage = (evaluation/incomes)*100;

      console.log(incomes);
      console.log(expenses);
      console.log(evaluation);
      console.log(percentage);

      if (percentage > 50) {
        $(".login").hide();
        return text2 = "Oohps!";
      }else {
        $(".login").hide();
        return text2 = "Success";

      }
    };

    $("form#form-1").submit(function(event) {
      income1 = parseInt($("input#income1").val());
      reason1 = $("input#reason1").val();
      income2 = parseInt($("input#income2").val());
      reason2 = $("input#reason2").val();

      food = parseInt($("input#food").val());
      transport = parseInt($("input#transport").val());
      others = parseInt($("input#others").val());
      others1 = $("input#others1").val();


      var result2 = percentages(percentage);
        document.getElementById("result2").innerHTML = result2;
        event.preventDefault();
      });

  });
