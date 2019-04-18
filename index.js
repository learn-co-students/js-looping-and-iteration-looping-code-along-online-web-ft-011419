const employeeNames = ['Ada', 'Brendan', 'Ali']
function printBadges(employeeNames) {
  for (let i=0; i < employeeNames.length; i++){
    console.log("Welcome ${employeeNames[i]}! You are employee #${i + 1}.")
  }
  return employeeNames
}

function tailsNeverFails() {
  let heads = 0;
  while (Math.random() >= 0.5){
    heads++;
  }
  return "You got ${heads} in a row!";
}
