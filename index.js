// Code your solutions in this file
function writeCards(names,event) {
  let greetings = [];
  for (let i = 0; i < names.length; i++) {
    greetings[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }

  return greetings;
}

function countdown(i){

  while(i>=0){
    console.log(i);
    i--;
  }

}
