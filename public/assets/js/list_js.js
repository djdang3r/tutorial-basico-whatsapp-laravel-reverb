//  example 1
var options = {
    valueNames: ['id', 'employee', 'email', 'contact', 'date', 'status',],
    page: 4,
    pagination: true
};

// **------ Init list**
var contactList = new List('myTable', options);

var idField = $('#id-field'),
    employeeField = $('#employee-field'),
    emailField = $('#email-field'),
    contactField = $('#contact-field'),
    dateField = $('#date-field'),
    statusField = $('#status-field'),
    addBtn = $('#add-btn'),
    editBtn = $('#edit-btn').hide(),
    removeBtns = $('.remove-item-btn'),
    editBtns = $('.edit-item-btn');

// Sets callbacks to the buttons in the list
refreshCallbacks();

$(document).on("submit", "#add_employee_form", function (e) {
    e.preventDefault();
    $(this).parent().modal("hide");
    let newItem = {
        id: Math.floor(Math.random() * 110000),
        employee: employeeField.val(),
        email: emailField.val(),
        contact: contactField.val(),
        date: dateField.val(),
        status: `<span class="badge text-uppercase bg-${statusField.val()}-subtle text-${statusField.val()}">${$("#status-field option:selected").text()}</span>`,
    }
    contactList.add(newItem)
    clearFields();
    refreshCallbacks();
})
// $("#add_employee_form").on("submit")
// addBtn.click(function () {

// });

$(document).on('click', '#edit-btn', function () {
    var item = contactList.get('id', idField.val())[0];
    console.log(statusField);
    item.values({
        id: idField.val(),
        employee: employeeField.val(),
        email: emailField.val(),
        contact: contactField.val(),
        date: dateField.val(),
        status: `<span class="badge text-uppercase bg-${statusField.val()}-subtle text-${statusField.val()}">${$("#status-field option:selected").text()}</span>`,
    });
    editBtn.hide();
    addBtn.show();
    $('#exampleModal').modal().toggle();
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
        employeeField.val(itemValues.employee);
        emailField.val(itemValues.email);
        contactField.val(itemValues.contact);
        dateField.val(itemValues.date);
        statusField.val(itemValues.status);
        editBtn.show();
        addBtn.hide();
    });
}

function clearFields() {
    employeeField.val('');
    emailField.val('');
    contactField.val('');
    dateField.val('');
    statusField.val('');
}

$(function() {
    $(".checkAll").on("click", function () {
        $(this)
            .closest("table")
            .find("tbody :checkbox")
            .prop("checked", this.checked)
            .closest("tr")
            .toggleClass("selected", this.checked);
    });

    $("tbody :checkbox").on("click", function () {
        // toggle selected class to the checkbox in a row
        $(this)
            .closest("tr")
            .toggleClass("selected", this.checked);

        // add selected class on check all
        $(this).closest("table")
            .find(".checkAll")
            .prop("checked",
                $(this)
                    .closest("table")
                    .find("tbody :checkbox:checked").length ==
                $(this)
                    .closest("table")
                    .find("tbody :checkbox").length
            );
    });

});


// **------ example 2**
var options = {
    valueNames: [
        'name',
        'born',
        {data: ['id']}
    ]
};
var userList = new List('users', options);

//  **------example 3**
var options = {
    valueNames: ['side',]
};

var sidelist = new List('sidelist', options);

//  **------example 4**
var monkeyList = new List('test-list', {
    valueNames: ['name'],
});

// **------ example 5**
var options = {
    valueNames: ['name'],
    page: 3,
    pagination: true
};

var userList = new List('user', options);