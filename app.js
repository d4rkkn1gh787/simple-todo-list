// Header above input bar
var header = document.createElement('h1');
document.body.appendChild(header);
header.innerHTML = "Todo App";

// Input Bar
var formBody = document.createElement('form');
document.body.appendChild(formBody);
formBody.setAttribute("action", "index.html");
formBody.setAttribute("method", "get");

var bar = document.createElement('input');
bar.setAttribute("type", "text");
bar.id = "textbar";
formBody.appendChild(bar)

// Add Button
var addButton = document.createElement('button');
addButton.id = 'add_todo';
addButton.innerHTML = "Add Todo";

var space = document.createElement('p');
formBody.appendChild(space);
formBody.appendChild(addButton);

// List Area
var list = document.createElement('ul');
document.body.appendChild(list);

// Functionality
addButton.addEventListener('click', function(event) {
    if (document.getElementById("textbar").value !== "") {
        event.preventDefault();
        var text = document.getElementById('textbar').value;
        var addedItem = document.createElement('li');
        addedItem.className = "items";
        addedItem.innerHTML = text;
        list.appendChild(addedItem);
        document.getElementById('textbar').value = "";
    } else {
        event.preventDefault();
    }


})
