// **------ tab js**
$(document).on('click','.tab-link',function () {
	var tabID = $(this).attr('data-tab');
	
	$(this).addClass('active').siblings().removeClass('active');
	
	$('#tab-'+tabID).addClass('active').siblings().removeClass('active');
});

"use strict";
$(function() {
    var tooltip_init = {
        init: function () {
            $("a").tooltip();
        }
    };
    tooltip_init.init()
});

// Add New Card Js
function projectCardContent() {
  const files = document.querySelector(".file_upload").files;
	return `
				<div class="col-md-6 col-xl-4 project-card">
					<div class="card hover-effect">
           <div class="card-header">
             <div class="d-flex align-items-center">
               <div>
                 <img src=${files.length > 0 ? URL.createObjectURL(files[0]) : "" } alt="image" class="h-40 w-40 d-flex-center b-r-50 overflow-hidden" id="preview">
               </div>
               <a href="project_details.php" target="_blank" class="flex-grow-1 ps-2">
                 <h6 class="m-0 f-w-600">${$('#pName').val()}</h6>
                 <div class="text-muted f-s-14">Admin</div>
               </a>
               <div class="dropdown">
                 <button class="bg-none border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <i class="ti ti-dots-vertical text-dark"></i>
                 </button>
                 <ul class="dropdown-menu dropdown-menu-end">
                   <li>
                     <a class="dropdown-item" href="#">
                       <i class="ti ti-edit text-success"></i> Edit
                     </a>
                   </li>
                   <li>
                     <a class="dropdown-item delete-button" href="#">
                       <i class="ti ti-trash text-danger"></i> Delete
                     </a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div class="card-body">
             <div class="d-flex">
               <div>
                 <h6 class="text-dark f-s-14">Start Date : <span class="text-success">${$('#startDate').val()}</span></h6>
                 <h6 class="text-dark f-s-14">End Date : <span class="text-danger">${$('#endDate').val()}</span></h6>
               </div>
               <div class="flex-grow-1 text-end">
                 <p class="f-w-500 text-secondary">Pricing </p>
                 <h6 class="f-w-600">${$('#pricing').val()}</h6>
               </div>
             </div>
             <p class="text-muted f-s-14 text-secondary">${$('#projectDescription').val()}</p>
             <div class="text-end mb-2" >
               <span class="badge text-light-primary">Progress</span>
             </div>
             <div class="progress w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
               <div class="progress-bar bg-primary" style="width: 50%"> 50% </div>
             </div>
           </div>
           <div class="card-footer">
             <div class="row">
               <div class="col-6">
                 <span class="text-dark f-w-600" ><i class="ti ti-brand-wechat"></i> 20 Members</span>
               </div>
               <div class="col-6">
                 <ul class="avatar-group float-end breadcrumb-start">
                   <li class="h-30 w-30 d-flex-center b-r-50 text-bg-danger b-2-light position-relative"
                     data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                     <img src="../assets/images/avtar/4.png" alt=""
                          class="img-fluid b-r-50 overflow-hidden">
                   </li>
                   <li class="h-30 w-30 d-flex-center b-r-50 text-bg-success b-2-light position-relative"
                     data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                     <img src="../assets/images/avtar/1.png" alt=""
                          class="img-fluid b-r-50 overflow-hidden">
                   </li>
                   <li class="h-30 w-30 d-flex-center b-r-50 text-bg-warning b-2-light position-relative"
                     data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                     <img src="../assets/images/avtar/2.png" alt=""
                          class="img-fluid b-r-50 overflow-hidden">
                   </li>
                   <li class="h-30 w-30 d-flex-center b-r-50 text-bg-info b-2-light position-relative"
                     data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
                     <img src="../assets/images/avtar/3.png" alt=""
                          class="img-fluid b-r-50 overflow-hidden">
                   </li>
                   <li class="text-bg-primary h-30 w-30 d-flex-center b-r-50" data-bs-toggle="tooltip"
                     data-bs-title="5 More">
                     5+
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
			</div>
  `
}

function getActions() {
	document.querySelectorAll('.delete-button').forEach(function (btn) {
		btn.addEventListener('click', function (event) {
			const deletbtn = event.target.closest(".project-card");
			// document.querySelector('#delet-tab-pane .row').appendChild(deletbtn.cloneNode(true));
			deletbtn.closest(".project-card").remove();
		});
	});
}

function resetModalInputs() {
  $('#pName').val('');
  $('#startDate').val('');
  $('#endDate').val('');
  $('#pricing').val('');
  $('#projectDescription').val('');
  document.querySelector(".file_upload").value = '';
}

document.querySelector('#addCard').onclick = function (event) {
	const rowElement = document.querySelector("#tab-1 .row");
	rowElement.insertAdjacentHTML('afterbegin', projectCardContent());
  resetModalInputs();
	$("#projectCard").modal("hide");
	getActions();	
}
getActions();	