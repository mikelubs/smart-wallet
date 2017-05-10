var userids = $("input#name1").val();
var text = "";
var userid = function(userids){
    if ((userids !== "mike") && (userids !== "irene")) {
      return text = "Oohps!! Wrong user ID. Please Try Again.";
    }
    else {
      $(".login").slideUp();
      $(".form-1").slideDown();
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
    Response.Redirect(Request.Url.ToString(), false);
  });
