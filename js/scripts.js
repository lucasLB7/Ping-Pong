//backend
function create_ping(num){
var numList = [];
  for (i=1; i<=num; i+=1){
    if(i%3===0 && i%5===0){
      numList.push("pingpong");
      }
    else if(i%3===0){
      numList.push("Ping");
      }
  else if(i%5===0){
    numList.push("pong");
  }

  else {
    numList.push(i);

  }
  }
  return numList;
}
// THis is the end of our first function
//
function countPing(numList){
}



$(document).ready(function() {
    $("form#WillitPong").submit(function(event) {
      event.preventDefault();
      $("ul#output").empty();
      var num = parseInt($("input#pongs").val());
      var numList=create_ping(num);
      numList.forEach(function(item){
        $("ul#output").append("<li>"+item+"</li>");
        $("#gameBegin").html("<p>The game has begun...Did you guess right???<br>and how many did you guess correctly?<br><br>See with your friends if they can also guess correctly the total abount of divisibles.... </p>");
      });
  });
  });
