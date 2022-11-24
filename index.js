let person = prompt("Enter your name");
let message;
switch(person){
    case "Chaman":
    case "Chiraag":
    case "Humna":
    case "Charo":

message = person + " is my friend ";
break;
default :
message = "I don't know you " + person;
}
console.log(message);