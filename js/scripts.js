var userInput;
var result = [];
//Backend
$(function(){
  $("#form").submit(function(event){
      event.preventDefault();

  var userInput = $("input#ping").val();

  for(var j = 1; j <= userInput; j++){
    if((j % 15) === 0){
      result.push('Ping Pong');
    }else if((j % 5) === 0){
      result.push('Pong');
    }else if((j %3) === 0){
      result.push('Ping');
    } else{
      result.push(j);

    }
  }
  // front end
  $("#outputResult").append(result.join("<br>"));
});
});
