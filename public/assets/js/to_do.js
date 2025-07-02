// todo js
document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Enter Task Name!!!!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="btn btn-sm p-1 border-0  delete">
                          <i class="ti ti-trash text-danger f-s-18"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        document.querySelector('.todo-inputs').value = "";
    }
}

// todo table
var options = {
    valueNames: ['id', 'task','assign', 'notes', 'date', 'status',],
};

// Init list
var contactList = new List('myTodo', options);

var idField = $('#id-field'),
    taskField = $('#task-field'),
    assignField = $('#assign-field'),
    notesField = $('#notes-field'),
    dateField = $('#date-field'),
    statusField = $('#status-field'),
    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

$(document).on("submit", "#add_employee_todo", function (e) {
    e.preventDefault();
    $(this).parent().modal("hide");
    let newItem = {
        id: Math.floor(Math.random() * 110000),
        task:taskField.val(),
        assign: assignField.val(),
        notes: `<span class="text-dark f-s-14"><i class="ti ti-circle-filled me-2 f-s-6"></i>${notesField.val()}</span>`,
        date: dateField.val(),
        status: `<span class="badge text-uppercase f-s-10 bg-${statusField.val()}-subtle bg-${statusField.val()}">${$("#status-field option:selected").text()}</span>`,
    }
    contactList.add(newItem)
    clearFields();
    refreshCallbacks();
})

$(document).on('click', '#edit-btn', function () {
    var item = contactList.get('id', idField.val())[0];
    item.values({
        id: idField.val(),
        task:taskField.val(),
        assign: assignField.val(),
        notes: notesField.val(),
        date: dateField.val(),
        status: `<span class="badge text-uppercase bg-${statusField.val()}-subtle bg-${statusField.val()}">${$("#status-field option:selected").text()}</span>`,
    });
    clearFields();
    editBtn.hide();
    addBtn.show();
});

function refreshCallbacks() {
    // Needed to add new buttons to jQuery-extended object
    removeBtns = $(removeBtns.selector);
    editBtns = $(editBtns.selector);

    $(document).on('click', '.remove-item-btn', function () {
        var itemId = $(this).closest('tr').find('.id').text();
        contactList.remove('id', itemId);
    });

    $(document).on('click', '.edit-item-btn', function () {
        var itemId = $(this).closest('tr').find('.id').text();
        var itemValues = contactList.get('id', itemId)[0].values();
        idField.val(itemValues.id);
        taskField.val(itemValues.task);
        assignField.val(itemValues.assign);
        notesField.val(itemValues.notes);
        dateField.val(itemValues.date);
        statusField.val(itemValues.status);

        editBtn.show();
        addBtn.hide();
    });
}

function clearFields() {
    taskField.val('');
    assignField.val('');
    notesField.val('');
    dateField.val('');
    statusField.val('');
}

// Checkbox JS

document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Get the parent row of the checkbox
        const row = this.closest('tr');
        // Toggle the underline class based on the checkbox state
        if (this.checked) {
            row.classList.add('text-d-line-through');
        } else {
            row.classList.remove('text-d-line-through');
        }
    });
});


