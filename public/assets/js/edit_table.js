//  **------Edit_tabel js**

var editor; // use a global for the submit and return data rendering in the examples

$(function() {
    editor = new $.fn.dataTable.Editor( {
        ajax: "https://editor.datatables.net/examples/php/staff.php?_=1679316739526",
        table: "#example5",
        fields: [{
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"   
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn"
            }, {
                label: "Start date:",
                name: "start_date"
            }, {
                label: "Salary:",   
                name: "salary"
            }
        ]
    } );
 
    var table = $('#example5').DataTable( {
        dom: "Bfrtip",
        ajax: "https://editor.datatables.net/examples/php/staff.php?_=1679316739526",
        columns: [
            { data: "name" },
            { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, '$' ) }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            {
                extend: "selectedSingle",
                text: "Salary +250",
                action: function ( e, dt, node, config ) {
                    // Immediately add `250` to the value of the salary and submit
                    editor
                        .edit( table.row( { selected: true } ).index(), false )
                        .set( 'salary', (editor.get( 'salary' )*1) + 250 )
                        .submit();
                }
            },
            { extend: "remove", editor: editor }
        ]
    } );
} );