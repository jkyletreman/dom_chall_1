// Adding header + content
var header = document.createElement('h1')
header.textContent = 'Kyle';
document.querySelector('body').appendChild(header);


// Adding List
var list = document.createElement('ul');
document.querySelector('h1').appendChild(list);


// Create list element and add List content

function addName(name) {
  var listItem = document.createElement('li');
  listItem.textContent = name;
  document.querySelector('ul').appendChild(listItem);
}


// adding names to list via loop

var names = ['Jon', 'Po', 'Mona', 'Davia', 'David', 'Don'];
function printNames(array) {
  for  (let i = 0; i < array.length; i++) {
    let name = array[i];
    addName(name);
  }
}
printNames(names);
