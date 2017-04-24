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
    option.value = planets[i];
    sel.appendChild(option);
}