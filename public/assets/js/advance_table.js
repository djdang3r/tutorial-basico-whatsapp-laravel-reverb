// dragebal tabel 
let shadow
function dragit(e){
  shadow=e.target;
}
function dragover(e){
  let children=Array.from(e.target.parentNode.parentNode.children);
if(children.indexOf(e.target.parentNode)>children.indexOf(shadow))
  e.target.parentNode.after(shadow);
  else e.target.parentNode.before(shadow);
}

// checkbox js
document.getElementById('select-all').onclick = function() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
  }
}

// project table js
$(function() {
  $('#projectTable').DataTable();
});

function deletAction() {
  document.querySelectorAll(".delete-btn").forEach((element) => {
    element.addEventListener("click", () => {
      $("#apiDeleteModal").modal("show");
      document.querySelector("#confirmDelete").addEventListener("click", function () {
        element.closest("tr").remove();
        $("#apiDeleteModal").modal("hide");
      })
    })
  })
}
deletAction();