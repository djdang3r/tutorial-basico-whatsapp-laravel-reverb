function wheather_font(element) {
    copyTextToClipboard(`<i class=${element.children[0].className}></i>`);
    Toastify({
        text: "Copied to the clipboard successfully",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "rgba(var(--success),1)",
        },
        onClick: function () {} // Callback after click
    }).showToast();
}

const input = document.querySelector('div.search-bar input')
const iconContainer = document.querySelector('ul.icon-list')
let icons = []
document.querySelectorAll('li.icon-box').forEach(icon => icons.push({
    el: icon,
    name: icon.querySelector('strong').innerHTML
}))

input.addEventListener('input', search)

function search(evt) {
    let searchValue = evt.target.value
    let iconsToShow = searchValue.length ? icons.filter(icon => {
        const existingName = icon.name.toLowerCase()
        return existingName.includes(searchValue.toLowerCase());
    }) : icons
    iconContainer.innerHTML = ''
    iconsToShow.forEach(icon => iconContainer.appendChild(icon.el))
}

function notify_copy_2() {
    console.log("this");
}

function copyTextToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }