function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const backdrops = document.querySelectorAll('.modal-backdrop');

    if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }

    backdrops.forEach(backdrop => backdrop.remove());
}
