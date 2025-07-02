function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


//  **------tab link js**
$(document).on('click', '.tab-link', function () {
  var tabID = $(this).attr('data-tab');

  $(this).addClass('active').siblings().removeClass('active');

  $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});

//  **------chart js**
var options = {
  series: [76],
  chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true
    }
  },
  colors: ['rgba(var(--primary),1)'],
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: 2,
          left: 0,
          color: '#999',
          opacity: 1,
          blur: 2,
        }
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -4,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -20
    }
  },
  fill: {
    type: '',
    gradient: {
      shade: '',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 60, 73, 108]
    },
  },
  labels: ['Average Results'],
};

var chart = new ApexCharts(document.querySelector("#polar2"), options);
chart.render();

function getActionsFeture() {
  document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", () => {
      $("#apiDeletModal").modal("show");
      const confirmButton = document.getElementById("confirmDelete");
      confirmButton.onclick = () => {
        const container = button.closest(".col-xxl-3");
        document.querySelector(".documents-sections .card-body .row").appendChild(container.cloneNode(true));
        container.remove();
        $("#apiDeletModal").modal("hide");
        confirmButton.onclick = null; // Clear event after use
      };
    });
  }); 

  document.querySelectorAll('.fav-icon').forEach(function (icon) {
    icon.addEventListener('click', function (event) {
      this.classList.toggle('ph-bold'); // Toggle between outline icon
      this.classList.toggle('ph-fill'); // and filled icon
      const favBtn = this.closest(".col-xxl-3 ").cloneNode(true);
      if (event.target.classList.contains("ph-fill")) {
        document.querySelector('#tab-2 .row').appendChild(favBtn.cloneNode(true));
      } else {
        const existingElements = document.querySelectorAll('#tab-3 .row .col-xl-3');
        existingElements.forEach(child => {
          if (child.dataset.originalId === favBtn.dataset.originalId) {
            child.remove()
          }
        })
      }
    });
  });


  document.querySelectorAll('.star-icon').forEach(function (icon) {
    icon.addEventListener('click', function (event) {
      this.classList.toggle('ph-bold'); // Toggle between outline icon and bold icon
      this.classList.toggle('ph-fill'); // Toggle between outline icon and filled icon
      const favRow = this.closest("tr").cloneNode(true); // Clone the entire table row
      if (event.target.classList.contains("ph-fill")) {
        // Add to a separate favorites table
        document.querySelector('#favorites-table tbody').appendChild(favRow);
      } else {
        // Remove from the favorites table
        const existingRows = document.querySelectorAll('#favorites-table tbody tr');
        existingRows.forEach(row => {
          if (row.firstChild.textContent === favRow.firstChild.textContent) {
            row.remove();
          }
        });
      }
    });
  });

}


//-------- folder rename start-----//
function renameFolder() {
  const renameKeyButton = document.querySelector("#renamekey");

  document.querySelectorAll(".edit-folder-list").forEach((element) => {
    element.addEventListener("click", (event) => {
      const card = event.target.closest(".card-body");
      console.log(card);
      $("#renameModal").modal("show");
      document.querySelector("#titlename").value = card.querySelector("p.text-center").textContent;

      function handleRename() {
        card.querySelector("p.text-center").textContent = document.querySelector("#titlename").value;
        $("#renameModal").modal("hide");
        renameKeyButton.removeEventListener('click', handleRename);
      }

      renameKeyButton.removeEventListener('click', handleRename);
      renameKeyButton.addEventListener('click', handleRename);
    });
  });
}
renameFolder();
//-------- folder rename end -----//


//---- add to file function start---- //
function tableBodyFun() {
  return `
  <tr>
                                <td>
                                  <div>
                                    <img src="../assets/images/icons/file.png" class="w-20 h-20" alt="">
                                    ${$('#recentname').val()}
                                  </div>
                                </td>
                                <td>17</td>
                                <td>120MB</td>
                                <td>21 May,2024</td>
                                <td class="d-flex">
                                  <div class="dropdown folder-dropdown">
                                    <a class="" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                      <i class="ti ti-dots-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li><a class="dropdown-item view-item-btn" href=""><i
                                            class="ti ti-file-export"></i>
                                          view</a></li>
                                      <li><a class="dropdown-item edit-folder-list" href="" data-bs-toggle="modal"
                                          role="button"><i class="ti ti-edit"></i> Rename</a></li>
                                      <li><a class="dropdown-item" href="" data-bs-toggle="modal" role="button"><i
                                            class="ti ti-trash"></i> Delete</a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="starreddiv favBtn ms-3">
                                    <i class="ph-bold  ph-star text-warning f-s-18 fav-icon"></i>
                                  </div>
                                </td>
                              </tr>
`
}
//----- add to file function end---- //


// -------recent modal open and hide start------ //
$('#resentkey').on('click', function () {
  let tableBody = document.querySelector("#recent_key_body");
  tableBody.innerHTML = tableBodyFun() + tableBody.innerHTML;
  $("#resentModal").modal("hide");
  deletAction();
});

$('#create_recent_key').on('click', function () {
  $("#resentModal").modal("show");
})
// -------recent modal open and hide end------ //


function generateUUID() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now();
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
getActionsFeture()

// recent table deleted start//
function deletAction() {
  document.querySelectorAll(".delete-btn").forEach((element) => {
    element.addEventListener("click", () => {
      $("#apiDeletModal").modal("show");
      document.querySelector("#confirmDelete").addEventListener("click", function () {
        element.closest("tr").remove();
        $("#apiDeletModal").modal("hide");
      })
    })
  })
}
deletAction();
// recent table deleted end//


//------- recent-table-rename start---- //
function renameTableEntry() {
  const renameKeyButton = document.querySelector("#renamekey");
  document.querySelectorAll(".edit-folder-button").forEach((element) => {
    element.addEventListener("click", (event) => {
      const row = event.target.closest("tr");
      const nameCell = row.querySelector(".name"); // Fixed variable naming
      console.log(nameCell); // Check if this logs correctly
      $("#renameModal").modal("show");
      document.querySelector("#titlename").value = nameCell.querySelector(".table-text").textContent; // Ensure this is correct

      function handleRename() {
        nameCell.querySelector(".table-text").textContent = document.querySelector("#titlename").value;
        $("#renameModal").modal("hide");
        renameKeyButton.removeEventListener('click', handleRename);
      }

      renameKeyButton.removeEventListener('click', handleRename); // Cleanly remove any previous listeners
      renameKeyButton.addEventListener('click', handleRename); // Add the new listener
    });
  });
}
renameTableEntry();
// recent-table-rename end //



function folderContent() {
  return `
  <div class="col-sm-6 col-md-4 col-xl-3">
                       <div class="card">
                        <div class="card-body folder-card">
                          <div class="starreddiv favBtn">
                            <i class="ph-bold  ph-star text-warning f-s-18 fav-icon"></i>
                          </div>

                          <div class="dropdown folder-dropdown">
                            <a class="" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                              <i class="ti ti-dots-vertical"></i>
                            </a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item view-item-btn" href=""><i
                                    class="ti ti-file-export text-primary"></i>
                                  view</a></li>
                              <li><a class="dropdown-item edit-folder-list" href="" data-bs-toggle="modal"
                                  role="button"><i class="ti ti-edit text-success"></i> Rename</a></li>
                              <li><a class="dropdown-item delete-btn" href="" data-bs-toggle="modal" role="button"><i
                                    class="ti ti-trash text-danger"></i> Delete</a>
                              </li>
                            </ul>
                          </div>
                          <div class="fileimage mb-2">
                            <img src="../assets/images/icons/folder.png" alt="" class="img-fluid">
                            <p class="mb-0 mt-2 f-s-16 text-center">${$('#title').val()}</p>
                          </div>
                          <div class="d-flex justify-content-between">
                            <p class="f-s-12 text-secondary">25.67GB</p>
                            <p class="f-s-12 text-secondary text-end">50GB</p>
                          </div>
                        </div>
                       </div>
                        </div>
  `
}

  document.querySelector('#folderadd').onclick = function (event) {
    const rowElement = document.querySelector("#newFolder .row");
    rowElement.insertAdjacentHTML('afterbegin', folderContent());
    $("#folderModal").modal("hide");
    getActionsFeture();
    renameFolder();
    
    
  }

// table data rename 
function renameTableEntry() {
  const renameKeyButton = document.querySelector("#renamekey");
  document.querySelector("#recentdatatable").addEventListener("click", function(event) {
    if (event.target.closest(".edit-folder-name")) {
      const row = event.target.closest("tr");
      const nameCell = row.querySelector("td:first-child .table-text");
      if (nameCell) {
        // Show the modal
        $("#renameModal").modal("show");
        document.querySelector("#titlename").value = nameCell.textContent;
        function handleRename() {
          // Set the new name in the table
          nameCell.textContent = document.querySelector("#titlename").value;
          // Hide the modal
          $("#renameModal").modal("hide");
          // Remove the event listener after renaming
          renameKeyButton.removeEventListener('click', handleRename);
        }
        // Clean up any previous event listener
        renameKeyButton.removeEventListener('click', handleRename);
        // Add the new event listener for renaming
        renameKeyButton.addEventListener('click', handleRename);
      } else {
        console.error("Name cell not found");
      }
    }
  });
}
// Initialize the function
renameTableEntry();