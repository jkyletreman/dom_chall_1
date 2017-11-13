// Adding header + content
var header = document.createElement('h1')
header.textContent = 'Kyle';
document.querySelector('body').appendChild(header);


// Adding List
var list = document.createElement('ul');
document.querySelector('h1').appendChild(list);

// Add List content

var listItem = document.createElement('li');
function addName(name) {
  listItem.textContent = name;
  document.querySelector('ul').appendChild(listItem);
}


// adding names to list

var names = ['Jon', 'Po', 'Mona', 'Davia', 'David', 'Don'];
function printNames(array, cb) {
  for  (let i = 0; i < array.length; i++) {
    let name = array[i];
    addName(name);
  }
}
printNames(names, addName());
