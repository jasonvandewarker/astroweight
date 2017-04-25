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


var sel = document.getElementById('planets');
for(var i = 0; i < planets.length; i++) {
    var option = document.createElement('option');
    option.innerHTML = planets[i][0];
    option.value = planets[i][1];
    sel.appendChild(option);
}

function calculateWeight() {
  document.getElementById('singlebutton').onclick = function handleClickEvent(e) {
  e.preventDefault();
  var choose = document.getElementById('planets').selectedIndex;
  var gravity = document.getElementById('planets')[choose].value;
  var userWeight = document.getElementById('userWeight').value;
  var result = Math.round(userWeight * gravity);
  document.getElementById('output').append("On that planet you would weigh " + result + " lbs. Geeeeeez.");
    //alert(weight * gravity);
}}

calculateWeight();
