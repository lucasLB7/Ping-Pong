//backend
var pong = 0;
var ping = 0;
var pingpong = 0;
function create_ping(num){
var numList = [];



  for (i=1; i<=num; i+=1){
    if(i%3===0 && i%5===0){
      numList.push("pingpong");
      pingpong+=1;
      }
    else if(i%3===0){
      numList.push("Ping");
      ping+=1;
      }
  else if(i%5===0){
    numList.push("pong");
      pong+=1;
  }

  else {
    numList.push(i);

  }
  }
  return numList;
}




$(document).ready(function() {
    $("form#WillitPong").submit(function(event) {
      event.preventDefault();
      $("ul#output").empty();
      var num = parseInt($("input#pongs").val());
      var numList=create_ping(num);
      numList.forEach(function(item){
        $("ul#output").append("<li>"+item+"</li>");


      });
      $("#count").html("<p>The game has begun...Did you guess right???<br>and how many did you guess correctly?<br><br>See with your friends if they can also guess correctly the total abount of divisibles.... </p><ul><li>"+ping+"</li><li>"+pong+"</li><li>"+pingpong+"</li>");
  });
  });
