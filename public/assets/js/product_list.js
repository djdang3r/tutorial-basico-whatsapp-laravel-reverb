//  **------product_list **
  $('#product-Listtable').DataTable(
    {
      responsive:true
    }
  );

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