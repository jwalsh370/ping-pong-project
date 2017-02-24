var ping = 3;
var pong = 5;
var pingPong = 15;
var userInput;
var result = [];
//Backend
$(function(){
  $("#form").submit(function(event){
      event.preventDefault();

    var userInput = $("input#ping").val();
    console.log(userInput);


  for(var n = 1; n <= userInput; n++){
    if((n % 15) === 0){
      result.push('Ping Pong');
    }else if((n % 5) === 0){
      result.push('Pong');
    }else if((n %3) === 0){
      result.push('Ping');
    }else{
      result.push(n)
      console.log(result);

    }
  }

  // front end


  $("#outputResult").append(result.join("<br>"));




});
});
$(function() {

function codeLeft() {
    $("#move").animate({left: "-=300"}, 600, "swing", codeRight);
}
function codeRight() {
    $("#move").animate({left: "+=300"}, 600, "swing", codeLeft);
}

codeRight();
});
