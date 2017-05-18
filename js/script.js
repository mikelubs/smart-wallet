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
    var reason1, reason2, others1, text2 = "";

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

      if (percentage >=70) {
        $(".login").hide();
        return text2 = "Yeah, you saved a good amount. We look foward to a great day Tomorrow";
      }else if (50 <= percentage < 70) {
        $(".login").hide();
        return text2 = "Yeah, you saved more than half your income";
      } else {
        $(".login").hide();
        return text2 = "Put in more effort tomorrow";
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

      $(".income1").text(income1);
      $(".reason1").text(reason1);
      $(".income2").text(income2);
      $(".reason2").text(reason2);
      $(".food").text(food);
      $(".transport").text(transport);
      $(".others").text(others);
      $(".others1").text(others1);

      var result2 = percentages(percentage);
        document.getElementById("result2").innerHTML = result2;
        event.preventDefault();
      });

  });
