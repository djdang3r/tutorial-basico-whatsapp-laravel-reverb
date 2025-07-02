//---- code copy js---- //
document.querySelectorAll(".box-shadow-box").forEach(element => {
    element.addEventListener("click", () => {
        const classNameToCopy = element.classList[1]; // This gets 'box-shadow-2'
        navigator.clipboard.writeText(classNameToCopy)
            
                // Success feedback
                Toastify({
                    text: "Class name copied to the clipboard successfully",
                    duration: 3000,
                    close: true,
                    gravity: "top",
                    position: "right",
                    stopOnFocus: true,
                    style: { background: "rgba(var(--success),1)" },
                    onClick: function () { }
                }).showToast();
        
    });
});