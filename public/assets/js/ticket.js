$('.ticket-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  // Function to format the date in "D MMM YYYY"
  function formatDate(date) {
      const d = new Date(date);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const day = d.getDate();
      const month = months[d.getMonth()];
      const year = d.getFullYear();
      return `${day} ${month} ${year}`;
  }


  $(function() {
    $('#ticketdatatable').DataTable(); 
   });

   function tableBodyFun() {
    return `
    <tr>
                            <td>
                                <div class="checkbox-wrapper">
                                    <label class="check-box m-0">
                                        <input type="checkbox">
                                        <span class="checkmark light-secondary"></span>
                                    </label>
                                </div>
                            </td>
                            <td>AR 2044</td>
                            <td>
                           
                                <div class="d-flex align-items-center">
                                    <div class="h-30 w-30 d-flex-center b-r-50 overflow-hidden text-bg-primary me-2">
                                        <img src="../assets/images/avtar//1.png" alt="" class="img-fluid">
                                       </div>
                                       ${$('#clientname').val()}
                                </div>
                            </td>
                           
                            <td> <span class="badge text-outline-warning">${$('#priority').val()}</span></td>
                            <td>${$('#titlename').val()}</td>
                            <td><span class="badge text-outline-primary">${$('#status').val()}</span></td>
                            <td>${formatDate($('#datename').val())}</td>
                            <td>${formatDate($('#duename').val())}</td>  
                            <td>
                                <div class="btn-group dropdown-icon-none">
                                    <button
                                        class="btn border-0 icon-btn b-r-4 dropdown-toggle active"
                                        type="button" data-bs-toggle="dropdown"
                                        data-bs-auto-close="true" aria-expanded="false">
                                        <i class="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="./ticket_details.html"><i
                                                    class="ti ti-eye text-primary me-2"></i> View </a></li>
                                        <li><a class="dropdown-item" href="#" 
                                        data-bs-target="#ticketeditModal"><i
                                                    class="ti ti-edit text-success me-2"></i> Edit </a></li>
                                        <li ><a class="dropdown-item delete-btn" href="#" ><i
                                                    class="ti ti-trash text-danger me-2"></i> Delete </a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
  `
  }
  
  $('#ticketkey').on('click', function () {
    let tableBody = document.querySelector("#ticket_key_body");
        tableBody.innerHTML = tableBodyFun() + tableBody.innerHTML;
        $("#ticketModal").modal("hide");
        $('#clientname').val("");
        $('#priorityname').val("");
        $('#titlename').val("");
        $('#statusname').val("");
        $('#datename').val("");
        $('#duename').val("");
        deletAction();
        // document.querySelector(".api_key_content").classList.toggle("d-none");
      
    
  });
   $('#create_ticket_key').on('click', function () {
    $("#ticketModal").modal("show");
  })


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


