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
debugger;

  for(var n = 1; n <= userInput; n++){
    if((n % 15) === 0){
      result.push('Ping Pong');
    }else if((n % 5) === 0){
      result.push('Pong');
    }else if((n %3) === 0){
      result.push('Ping');
    }else{
      result.push(n)
      alert(result);
    }
  }
});
});
//   if (userInput = 3 || userInput % 3 == 3){
//   for (var n = 0; n<= userInput. length; n++){
//     $("#outputping").append("Ping");
//     console.log("ping");
//     if (n % 3 == 0){
//     }
//   }
//   var digits = 100;
// var result = 0;
// for(n = digits; n > 1; ++n){
//      ++result;
//      n = Math.floor(n/10);
//      console.log(result);
// }
