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
bar.setAttribute('placeholder', "Add task here");
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
function listItem() {
    event.preventDefault();
    var text = document.getElementById('textbar').value;
    var addedItem = document.createElement('li');
    var removeButton = document.createElement('button')
    var edit = document.createElement('button')

    addedItem.innerHTML = text;

    removeButton.setAttribute('type', 'button');
    removeButton.className = "rButton";
    removeButton.innerHTML = "X";
    edit.innerHTML = "Edit";
    edit.className = "edit"

    list.appendChild(addedItem);
    addedItem.appendChild(removeButton);
    addedItem.appendChild(edit);

    document.getElementById('textbar').value = "";

    removeButton.addEventListener("click", function() {
        addedItem.parentNode.removeChild(addedItem)
    })

    edit.addEventListener('click', function() {
            var editText = "<input type='text' id='editText' value=" + text + "><button id='update' type='submit'>Update</button>");

        addedItem.innerHTML = editText;
        var update = document.getElementById("update")
        update.addEventListener("click", function() {
            text = document.getElementById("editText").value;
            addedItem.innerHTML = text;
            addedItem.appendChild(edit);
            addedItem.appendChild(removeButton)

        })
    })
}


addButton.addEventListener('click', function(event) {
    if (document.getElementById("textbar").value !== "") {
        listItem();
    } else {
        event.preventDefault();
    }
})
