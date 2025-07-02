//  **------Tabel 1**
$(function() {
    $('#example').DataTable(); 
    $('#example1').DataTable(); 
});
$(function() {
    $('#example2').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
} );
$(function() {
    $('#example3').DataTable({
        createdRow: function (row, data, index) {
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                $('td', row).eq(5).addClass('highlight');
            }
        },
    });
});

    /* Formatting function for row details - modify as you need */
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
}

$(function() {
    // Add event listener for opening and closing details
    $('#example4').on('click', 'tbody td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
        }
    } );
 
    $('#example4').on('requestChild.dt', function(e, row) {
        row.child(format(row.data())).show();
    })
 
    var table = $('#example4').DataTable( {
        "ajax": "../assets/vendor/datatable/ajax/objects.txt",
        "rowId": 'id',
        "columns": [
            {
                "className":      'dt-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']],
        dom: 'Blfrtip',
        buttons:['createState', 'savedStates']
    } );
 
    table.on('stateLoaded', (e, settings, data) => {
        for(var i = 0; i < data.childRows.length; i++) {
            var row = table.row(data.childRows[i]);
            row.child(format(row.data())).show();
        }
    })
} );

// Delete btn js
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to handle delete action
    const handleDelete = (event) => {
        const deleteButton = event.target;
        if (deleteButton.classList.contains('delete-btn')) {
            const row = deleteButton.closest('tr');
            row.remove();
        }
    };
  
    // Add event listener to all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', handleDelete);
    });
  });