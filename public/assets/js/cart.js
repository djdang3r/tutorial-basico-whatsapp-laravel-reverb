$(function() {
  $('#example').DataTable();
  $('#example1').DataTable();
});

$(document).on('click', '.decrement, .increment', function (e) {
  let input = $(this).parent().find('.count');
  let count = input.val();
  const min = 1;
  const max = 7;

  if (count === '') {
    count = 0;
  }
  $(this).hasClass('decrement') ? count-- : count++;
  if (count >= min && count <= max)
    input.val(count)
});

// scratch card js
document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.scratch-card');
  const scratchOverlay = card.querySelector('.scratch-overlay');
  
  // Function to reveal the scratch card
  function revealScratchCard() {
    scratchOverlay.style.display = 'none';
  }

  // Event listener for scratching
  card.addEventListener('mousemove', function(e) {
    if (e.buttons === 1) { // If the left mouse button is pressed
      revealScratchCard();
    }
  });

  // Event listener for copying the code
  const copyBtn = document.getElementById('copyBtn');
  copyBtn.addEventListener('click', function() {
    const code = card.querySelector('h6').innerText;
    navigator.clipboard.writeText(code)
      .then(() => {
        alert('Code copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  });
});

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
