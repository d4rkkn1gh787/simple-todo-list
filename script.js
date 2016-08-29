$(document).ready(function() {

    var $header = $("<h1>Todo App</h1>")
    $('body').append($header);

    var $formBody = $('<form>');
    $('body').append($formBody);
    $($formBody).attr('action', 'index.html');
    $($formBody).attr('method', 'get');

    var $bar = $('<input>');
    $($formBody).append($bar);
    $($bar).attr('type', 'text');
    $($bar).attr('placeholder', 'Add task here');
    $($bar).attr('id', 'textbar');

    var $addButton = $('<button>');
    $($addButton).attr('id', 'add_todo');
    $($addButton).html('Add Todo');
    var $space = $('<p>');
    $($formBody).append($space);
    $($formBody).append($addButton);

    var $list = $('<ul>');
    $('body').append($list);

    function listItem() {
        event.preventDefault();
        var $text = $('#textbar').val();
        var $addedItem = $('<li>');
        var $removeButton = $('<button>');
        var $edit = $('<button>');

        $addedItem.html($text);

        $removeButton.attr('type', 'button');
        $removeButton.addClass("rButton")
        $removeButton.html("X");
        $edit.html("Edit");

        $list.append($addedItem);
        $addedItem.append($removeButton);
        $addedItem.append($edit);

        // $text = $(" ");
        $('#textbar').val("");

        $removeButton.click(function() {
            $addedItem.remove();
        });

        $edit.click(function() {
            var $editText = $('<input type="text" id = "editText" ><button id = "update" type = "submit"> Update </button>');

            $addedItem.html($editText);
            var $update = $('#update');

            $update.click(function() {
                $text = $('#editText').val();
                $addedItem.html($text);
                $addedItem.append($edit);
                $addedItem.append($removeButton);


            });

        });
    }

    $addButton.click(function() {
        if ($('#textbar').val() !== "") {
            listItem();
        } else {
            event.preventDefault();
        }
    });
});
