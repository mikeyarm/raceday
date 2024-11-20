function raceD() {

  var userAge = prompt('How old are you?');
  if (userAge) {
    userAge = parseInt(userAge); 
    document.getElementById('responseAge').innerHTML = 'Age: ' + userAge;
  } else {
    document.getElementById('responseAge').innerHTML = '';
  }

  var userR = prompt('Are you registered early? (yes/no)');
  var Registered = (userR && userR.toLowerCase() === 'yes');
  if (userR) {
    document.getElementById('responseR').innerHTML = 'Registered: ' + userR;
  } else {
    document.getElementById('responseR').innerHTML = '';
  }

  let raceNumber = Math.floor(Math.random() * 1000);

  if (userAge >= 18 && Registered) {
    raceNumber += 1000;
  }

  let message = '';

   if (userAge === 18) {
    message = 'Please see the Registration desk.';
  } else if (userAge >= 18 && Registered) {
    message = `You will race at 9:30 am. Your race number is ${raceNumber}.`;
  } else if (userAge >= 18 && !Registered) {
    message = `You will race at 11:00 am. Your race number will be ${raceNumber}.`;
  } else if (userAge < 18) {
    message = `You will race at 12:30 pm. Your race number will be ${raceNumber}.`;
  }

  document.getElementById('output').innerHTML = message;
}