$('#editor').trumbowyg({
    btns: [
        ['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ],
});

document.querySelector('#file-input').addEventListener("change",(evt)=>{
  const rawFile = evt.target.files;
  const file = rawFile[0] ? URL.createObjectURL(rawFile[0]) : null;
  if(file) {
     document.querySelector("#uploaded_image").innerHTML = `
        <div>
           <img src=${file} class="uploaded-image">
           <p>${rawFile[0].name}</p>
        </div>
     `
  }
})