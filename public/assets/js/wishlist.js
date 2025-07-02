document.querySelectorAll('.heart-icon').forEach(function(icon) {
    icon.addEventListener('click', function(event) {
        this.classList.toggle('ti-heart'); // Toggle between outline icon
        this.classList.toggle('ti-heart-filled'); // and filled icon
    });
});