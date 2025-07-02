$('#multiselect').multiselect();

let list1 = [{
    country: "One",
    selected: false
  },
  {
    country: "Two",
    selected: false
  },
  {
    country: "Three",
    selected: false
  },
  {
    country: "Four",
    selected: false
  },
];
let list2 = [{
    country: "Five",
    selected: false
  },
  {
    country: "Six",
    selected: false
  },
  {
    country: "Seven",
    selected: false
  },
  {
    country: "Eight",
    selected: false
  },
  {
    country: "Nine",
    selected: false
  },
  {
    country: "Ten",
    selected: false
  },
];
let selectedOption;

function renderLists(...id) {
  console.log("ids", id[0], id[1])
  let list1Html = "";
  let list2Html = "";

  list1.forEach((item, index) => {
    let selectedClass = item.selected ? "selected" : "";
    list1Html += `<button  onclick="selectOption('list1', ${index})" class="option btn btn-light-primary w-100 ${selectedClass}" data-value="${item.country}">${item.country}</button>`;
  });

  list2.forEach((item, index) => {
    let selectedClass = item.selected ? "selected" : "";
    list2Html += `<button  onclick="selectOption('list2', ${index})" class="option btn btn-light-primary w-100 ${selectedClass}" data-value="${item.country}">${item.country}</button>`;
  });

  console.log(id);
  if(document.querySelector("#" + id[0])){
    document.querySelector("#" + id[0]).innerHTML = list1Html;
  }
  if(document.querySelector("#" + id[1])){
    document.querySelector("#" + id[1]).innerHTML = list2Html;
  }
}

$(".dual_listboxes").each(function () {
  let listitem = $(this).find(".list-box");
  renderLists(listitem[0].id, listitem[1].id);
});

function selectOption(listType, optionIndex) {
  let list = [];
  if (listType == "list1") {
    list1.forEach((option) => (option.selected = false));
    list = list1
  } else {
    list2.forEach((option) => (option.selected = false));
    list = list2
  };

  list[optionIndex].selected = true;
  selectedOption = {
    listType: listType,
    index: optionIndex,
  };
  renderLists();
}

$(".moveup").on('click', function (e) {
  let listitem = $(this).parent().parent().find(".list-box");
  console.log("list1", listitem[0].id);
  console.log("list2", listitem[1].id);

  if (!selectedOption) return false;

  let list = selectedOption.listType == "list1" ? list1 : list2;
  if (selectedOption.index > 0) {
    let optionToMove = list.splice(selectedOption.index, 1)[0];
    let newIndex = selectedOption.index - 1;
    selectedOption.index = newIndex;
    list.splice(newIndex, 0, optionToMove);
  }

  renderLists(listitem[0].id, listitem[1].id);
})

$(".moveDown").on('click', function (e) {
  let listitem = $(this).parent().parent().find(".list-box");
  console.log("list1", listitem[0].id);
  console.log("list2", listitem[1].id);

  if (!selectedOption) return false;

  let list = selectedOption.listType == "list1" ? list1 : list2;
  let lastIndex = list.length - 1;
  if (selectedOption.index != lastIndex) {
    let optionToMove = list.splice(selectedOption.index, 1)[0];
    let newIndex = selectedOption.index + 1;
    selectedOption.index = newIndex;
    list.splice(newIndex, 0, optionToMove);
  }
  renderLists(listitem[0].id, listitem[1].id);
})

$(".moveH").on('click', function (e) {
  let listitem = $(this).parent().parent().find(".list-box");
  console.log("list1", listitem[0].id);
  console.log("list2", listitem[1].id);
  let direction = $(this).data("direction")
  if (!selectedOption) return false;
  if (direction == "left" && selectedOption.listType == "list2") {
    let optionToMove = list2.splice(selectedOption.index, 1)[0];
    list1.push(optionToMove);
    selectedOption = {
      index: list1.length - 1,
      listType: "list1",
    };
  } else if (direction == "right" && selectedOption.listType == "list1") {
    let optionToMove = list1.splice(selectedOption.index, 1)[0];
    list2.push(optionToMove);
    selectedOption = {
      index: list2.length - 1,
      listType: "list2",
    };
  }
  renderLists(listitem[0].id, listitem[1].id);
})

$(".moveAllOptions").on('click', function (e) {
  let listitem = $(this).parent().parent().find(".list-box");
  console.log("list1", listitem[0].id);
  console.log("list2", listitem[1].id);
  let direction = $(this).data("direction")

  if (direction === "left") {
    list1 = [...list1, ...list2];
    list2 = [];

  } else {
    list2 = [...list2, ...list1];
    list1 = [];

  }
  renderLists(listitem[0].id, listitem[1].id);
})


function moveAllOptions(direction) {

  if (direction === "left") {
    list1 = [...list1, ...list2];
    list2 = [];

  } else {
    list2 = [...list2, ...list1];
    list1 = [];

  }
  renderLists();
}
 
$(".removeSelectedOption").on('click', function (e) {
  let listitem = $(this).parent().parent().find(".list-box");
  console.log("list1", listitem[0].id);
  console.log("list2", listitem[1].id);

  let list = selectedOption.listType == "list1" ? list1 : list2;
  list.splice(selectedOption.index, 1);
  selectedOption = undefined;

  renderLists(listitem[0].id, listitem[1].id);
})
