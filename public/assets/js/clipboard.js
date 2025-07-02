//  **------clipboard**
let clipboard = (textId,event) => {
  document.getElementById(textId).select();
  document.execCommand(event);
  
};
let copy = (textId) => {
  var text = document.getElementById(textId).innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}
