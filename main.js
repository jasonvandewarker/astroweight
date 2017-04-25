//This array is the data for the projects, containing
//a planet and the gravity relative to Earth.

var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.64],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

//This block sets up the drop down menu.
var sel = document.getElementById('planets');
/*This loop goes through the array and appends the first value in the array,
the planet name, to the select menu but keeps the
gravity */
for (var i = 0; i < planets.length; i++) {
  var option = document.createElement('option'); //makes the option element
  option.innerHTML = planets[i][0]; //selects the first item in the array
  option.value = planets[i][1]; //stores the gravity
  sel.appendChild(option);  // puts the options into the select menu
}

//This function takes the weight the user inputs, the gravity of the
//planet the user selects from the select menu, multiplies them
//together, and prints the result to the webpage after the
//calculate button is clicked.
function calculateWeight() {
  document.getElementById('singlebutton').onclick = function handleClickEvent(e) {
    e.preventDefault(); //binds click even to the calculate button
    var choose = document.getElementById('planets').selectedIndex; //gets planet from select menu
    var gravity = document.getElementById('planets')[choose].value; //takes gravity from planet selected
    var userWeight = document.getElementById('userWeight').value; //stores weight inputed by user
    var result = Math.round((userWeight * gravity) * 100) / 100; //multiplies the two numbers together
    document.getElementById('output').append("On that planet you would weigh " + result + " lbs. Geeeeeez. ");
    //the last one takes the result and prints it to the webpage.
  }
}

calculateWeight();
