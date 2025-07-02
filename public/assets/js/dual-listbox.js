//dual listbox js

var dlb1 = new DualListbox(".select1");
var dlb2 = new DualListbox(".select2", {
  availableTitle: "Available numbers",
  selectedTitle: "Selected numbers",
  addButtonText: ">",
  removeButtonText: "<",
  addAllButtonText: ">>",
  removeAllButtonText: "<<",
  searchPlaceholder: "search numbers",
  enableDoubleClick: false,
});
dlb2.addEventListener("added", function(event) {
  document.querySelector(".changed-element").innerHTML = event.addedElement.outerHTML;
});
dlb2.addEventListener("removed", function(event) {
  document.querySelector(".changed-element").innerHTML = event.removedElement.outerHTML;
});
var dlb3 = new DualListbox(".select3", {
  showAddButton: false,
  showAddAllButton: false,
  showRemoveButton: false,
  showRemoveAllButton: false,
});
var dlb4 = new DualListbox(".select4", {
  showSortButtons: true,
});


var sources = document.querySelectorAll(".source");
for (var i = 0; i < sources.length; i++) {
  var source = sources[i];
  source.addEventListener("click", function(event) {
    var code = document.querySelector("." + event.currentTarget.dataset.source);
    code.classList.toggle("open");
  });
}