
// ------------------add new card js-------------- //
function bookmarkContent() {
	const files = document.querySelector(".file_upload").files;
	return `
				  <div class="col-xxl-4">
					<div class="card book-mark-card draggable-card ">
					  <div class="card-body">
						  <div class="draggable-card-img"> 
							  <img src=${files ? URL.createObjectURL(files[0]) : "" } alt="image" class="img-fluid" id="preview">
							  <div class="video-transparent-box"></div>
							  <div class="draggable-card-icon">
								  <span class="bg-white h-35 w-35 mb-2 d-flex-center b-r-50 me-3">
									<i class="ph-bold  ph-heart f-s-18 text-danger hearticon"></i>
								  </span>
								 <span class="bg-white h-35 w-35 d-flex-center b-r-50 me-3 shareBtn mb-2 dropend">
                                                                <a role="button" href="#" class="" data-bs-toggle="dropdown"
                                                                aria-expanded="false">
                                                                <i class="ph-bold  ph-share-network f-s-18 text-primary shareicon d-flex"></i>
                                                                </a>
                                                                <ul class="dropdown-menu dropdown-menu-end ms-3"
                                                                data-popper-placement="bottom-end">
                                                                <li class="d-flex justify-content-around">
                                                                    <i class="ph-duotone  ph-whatsapp-logo f-s-20 text-primary"></i>
                                                                    <i class="ph-duotone  ph-instagram-logo f-s-20 text-success"></i>
                                                                    <i class="ph-duotone  ph-facebook-logo f-s-20 text-info"></i>
                                                                    <i class="ph-duotone  ph-messenger-logo f-s-20 text-danger"></i>
                                                                </li>
                                                            </ul>
                                                            </span>
								  <div class="star-bookmark">
									<span class="bg-white h-35 w-35 mb-2 d-flex-center b-r-50 importantBtn">
									   <i class="ph-bold  ph-star f-s-18 text-warning staricon"></i>
									</span>
								  </div> 
							  </div>
							  <div class="dropdown action-icon">
								<span class="" data-bs-toggle="dropdown" aria-expanded="false">
								  <i class="ph-bold  ph-dots-three-vertical text-white f-s-18"></i>
								</span>
								<ul class="dropdown-menu">
								<li>
								<a class="dropdown-item" href="#" data-bs-toggle="modal"
								data-bs-target="#editCardModal">
								  <i class="ti ti-edit text-success"></i> Edit
								</a>
							  </li>
								  <li>
                                    <a class="dropdown-item deletbtn" href="#">
                                      <i class="ti ti-trash text-danger"></i> Delete
                                    </a>
                                  </li>
								  </ul>
							  </div>
						  </div>
						  <div class="draggable-card-content pt-4">
							  <h5 class="mb-2 f-w-500">${$('#title').val()}</h5>
							  <p class="f-s-16  text-secondary">${$('#weburl').val()}</p>
						  </div>
					  </div>
					  </div>
				  </div>
			</div>
  `
}
// <---------on click icon fill js -------->//
function getActionsFeture() {
	document.querySelectorAll('.deletbtn').forEach(function (btn) {
		btn.addEventListener('click', function (event) {
			const deletbtn = event.target.closest(".col-xxl-4");
			document.querySelector('#delet-tab-pane .row').appendChild(deletbtn.cloneNode(true));
			deletbtn.closest(".col-xxl-4").remove();
		});
	});
	document.querySelectorAll('.hearticon').forEach(function(icon) {
		icon.addEventListener('click', function(event) {
			this.classList.toggle('ph-bold'); // Toggle between outline icon
			this.classList.toggle('ph-fill'); // and filled icon
			const heartBtn = this.closest(".col-xxl-4").cloneNode(true);
			if (event.target.classList.contains("ph-fill")) {
				document.querySelector('#favourite-tab-pane .row').appendChild(heartBtn.cloneNode(true));
			} else {
				const existingElements = document.querySelectorAll('#favourite-tab-pane .row .col-xxl-4');
				existingElements.forEach(child => {
					if (child.dataset.originalId === heartBtn.dataset.originalId) {
						child.remove()
					}
				})
			}
		});
	});
	document.querySelectorAll('.shareicon').forEach(function(icon) {
		icon.addEventListener('click', function(event) {
			this.classList.toggle('ph-bold'); // Toggle between outline icon
			this.classList.toggle('ph-fill'); // and filled icon
			const shareBtn = this.closest(".col-xxl-4").cloneNode(true);
			if (event.target.classList.contains("ph-fill")) {
				document.querySelector('#share-tab-pane .row').appendChild(shareBtn.cloneNode(true));
			} else {
				const existingElements = document.querySelectorAll('#share-tab-pane .row .col-xxl-4');
				existingElements.forEach(child => {
					if (child.dataset.originalId === shareBtn.dataset.originalId) {
						child.remove()
					}
				})

			}
		});
	});
	document.querySelectorAll('.staricon').forEach(function(icon) {
		icon.addEventListener('click', function(event) {
			this.classList.toggle('ph-bold'); // Toggle between outline icon
			this.classList.toggle('ph-fill'); // and filled icon
			const starBtn = this.closest(".col-xxl-4").cloneNode(true);
			if (event.target.classList.contains("ph-fill")) {
				document.querySelector('#important-tab-pane .row').appendChild(starBtn.cloneNode(true));
			} else {
				const existingElements = document.querySelectorAll('#important-tab-pane .row .col-xxl-4');
				existingElements.forEach(child => {
					if (child.dataset.originalId === starBtn.dataset.originalId) {
						child.remove()
					}
				})

			}
		});
	});
}

document.querySelector('#bookkey').onclick = function (event) {
	const rowElement = document.querySelector("#bookmark-tab-pane .row");
	rowElement.insertAdjacentHTML('afterbegin', bookmarkContent());
	$("#bookmarkAddModal").modal("hide");
	getActionsFeture();	

}


getActionsFeture()



