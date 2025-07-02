//  **------file_upload js**

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function () {
  realFileBtn.click();
});
realFileBtn.addEventListener("change", function () {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});

// filepond

const pond = FilePond.create(
  document.querySelector('.filepond-file'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.registerPlugin(FilePondPluginFileValidateType);
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginFileEncode);
FilePond.registerPlugin(FilePondPluginFileValidateSize);
FilePond.registerPlugin(FilePondPluginImageExifOrientation);

const pondInput = FilePond.create(
  document.querySelector('#id'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#fileupload-2'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});

//  **------solid 1**

const pondInput1 = FilePond.create(
  document.querySelector('#solid1'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondsolid1'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});


//  **------solid 2**

const pondInput2 = FilePond.create(
  document.querySelector('#solid2'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondsolid2'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});


// **------solid 3** 

const pondInput3 = FilePond.create(
  document.querySelector('#solid3'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondsolid3'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});


//  **------solid 4**

const pondInput4 = FilePond.create(
  document.querySelector('#solid4'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondsolid4'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});

//  **------light 1**

const pondInput5 = FilePond.create(
  document.querySelector('#light1'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondlight1'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});

// **------ light 2**

const pondInput6 = FilePond.create(
  document.querySelector('#light2'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondlight2'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});


//  **------light 3**

const pondInput7 = FilePond.create(
  document.querySelector('#light3'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondlight3'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});


//  **------light 4**

const pondInput8 = FilePond.create(
  document.querySelector('#light4'),
  {
    labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-25"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  }
);

FilePond.create(document.querySelector('#filepondlight4'), {
  labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-10 text-secondary"></i> <div class="filepond--label-action text-decoration-none">Upload Your Files</div>`,
  imagePreviewHeight: 170,
  imageCropAspectRatio: '1:1',
  imageResizeTargetWidth: 100,
  imageResizeTargetHeight: 100,
  stylePanelLayout: 'compact circle',
  styleLoadIndicatorPosition: 'center bottom',
  styleProgressIndicatorPosition: 'right bottom',
  styleButtonRemoveItemPosition: 'left bottom',
  styleButtonProcessItemPosition: 'right bottom'
});

