// notify-js //

function material_icon(element) {
    setTimeout(()=> {
        console.log(element.firstChild.innerHTML);
        copyTextToClipboard(element.firstChild.innerHTML);
        Toastify({
            text: "Copied to the clipboard successfully",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: { background: "rgba(var(--success),1)" },
            onClick: function () {}
        }).showToast();
    },100)
}

const input = document.querySelector('div.search-bar input')
const iconContainer = document.querySelector('ul.icon-list')
      let icons = []
document.querySelectorAll('li.icon-box').forEach(icon => icons.push({
  el: icon,
  name: icon.querySelector('strong').innerHTML
}))

// search-icon-js// 

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
    console.log("this")
}

function copyTextToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }