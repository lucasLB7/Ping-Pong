## Lucas Lambert Week 3 project

#Ping pong game with javaScript support


Welcome to my __third project__ on week three at Moringa school.

This site was made with intent of demonstrating the content leared in the Week
 of Moringa.

 #The contents:


 We demonstrate the use of javaScript language in a simple loop that determines whether numbers are divisible by 3, 5 or 3 & 5 (both).

 Accordingly it will respond with ping, pong and of course pingpong.

 There were a number of ways to achieve this, either having a loop that return ping, pong or ping follow by pong.
 In my case I decided to create an else if statement for pingpong, instead of simply appending the pong to the ping in case it's divisible by both.

 ##Backend jS

 Here we create a function called create_ping and assign to it num.
 numList is an empty array we create that that will contain the return of the function. ie. Ping, pong or pingpong...

 We create a for loop that increases the value of i, until it reaches the end of the user input num (defined in the front end).
 I stops at each alteration and run three questions (booleans):

 - If divided by 3, is there any balance?
 If yes, push Ping to numList.
 - If divided by 5, is there any balance?
  If yes, push Pong to numList.
 - If divided by 3 and 5, is there any balance?
  If yes, push Pingpong to numList.

  The closing else statement declares that all numbers that do not fit the above requirements are to be returned as they are.


  ##FrontEnd jS

  The front end is what confused me the most..:- 
