//backend code. The function create_pin is the logic end with no user end elements.
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


//FrontEnd of the program, this will append to the unorganied list Ul.

$(document).ready(function() {
    $("form#WillitPong").submit(function(event) {
      event.preventDefault();
      $("ul#output").empty();
      var num = parseInt($("input#pongs").val());
      var numList=create_ping(num);
      numList.forEach(function(item){
        $("ul#output").append("<li>"+item+"</li>");
      });


  });

  });
