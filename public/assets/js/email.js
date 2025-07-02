//email js

$(document).on('click', '.tab-link', function () {
    var tabID = $(this).attr('data-tab');

    $(this).addClass('active').siblings().removeClass('active');

    $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});

document.querySelector('.toggle-btn').addEventListener('click', () => {
    var mailbox = document.querySelector(".mailbox");
    mailbox.classList.toggle("mailtoggle");
});

document.querySelector('.close-toggle').addEventListener('click', () => {
    var chatcontainer = document.querySelector(".mailbox");
    chatcontainer.classList.remove("mailtoggle");
});

document.querySelectorAll('.star-icon').forEach(function (icon) {
    icon.addEventListener('click', function () {
        this.classList.toggle('ti-star');
        this.classList.toggle('ti-star-filled');
    });
});


// add new mail

function emailBoxContent() {
    // const files = document.querySelector(".file_upload").files;
    return `
	 <div class="mail-box">
       <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
       <span class="ms-2 me-2">
         <i class="ti ti-star text-warning star-icon fs-5"></i>
       </span>
       <div class="flex-grow-1 position-relative">
         <div
           class="mail-img h-35 w-35 b-r-50 overflow-hidden text-bg-primary position-absolute mt-1">
           <img src="../assets/images/avtar/14.png" alt="" class="img-fluid">
         </div>
         <div class="mg-s-45">
           <h6 class="mb-0 f-w-600">${$('#userName').val()}</h6>
           <a href="./read_email.html"><span class="f-s-13 text-secondary">${$('#subject').val()}</span></a>
         </div>
       </div>
       <div>
         <p class="text-center">sep 23</p>
         <span class="badge text-light-success">${$('#status').val()}</span>
       </div>
       <div>
         <div class="btn-group dropdown-icon-none">
           <button class="btn border-0 icon-btn b-r-4 dropdown-toggle" type="button"
             data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
             <i class="ti ti-dots-vertical"></i>
           </button>
           <ul class="dropdown-menu">
             <li><a class="dropdown-item" href="#"><i class="ti ti-archive"></i> Archive </a></li>
             <li><a class="dropdown-item" href="#"><i class="ti ti-trash"></i> Delete </a></li>
             <li><a class="dropdown-item" href="#"><i class="ti ti-mail-opened"></i> Read Mali </a>
             </li>
           </ul>
         </div>
       </div>
     </div>
  `
}

// function getActions() {
//     document.querySelectorAll('.delete-button').forEach(function (btn) {
//         btn.addEventListener('click', function (event) {
//             const deletbtn = event.target.closest(".project-card");
//             // document.querySelector('#delet-tab-pane .row').appendChild(deletbtn.cloneNode(true));
//             deletbtn.closest(".project-card").remove();
//         });
//     });
// }

// function resetModalInputs() {
// 	$('#pName').val('');
// 	$('#startDate').val('');
// 	$('#endDate').val('');
// 	$('#pricing').val('');
// 	$('#projectDescription').val('');
// 	document.querySelector(".file_upload").value = '';
// }

document.querySelector('#addEmail').onclick = function (event) {
    const rowElement = document.querySelector("#tab-1 .mail-table");
    rowElement.insertAdjacentHTML('afterbegin', emailBoxContent());
    // resetModalInputs();
    $("#emailBox").modal("hide");
    // getActions();
}
// getActions();