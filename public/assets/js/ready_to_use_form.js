// filepond
  const pondInput = FilePond.create(
    document.querySelector('#id'),
    {
      labelIdle: `<i class="ti ti-cloud-upload fs-4"></i> <div class="filepond--label-action text-decoration-none">Upload Your Deparment Images</div>`,
    }
  );
  
  // image uplode 
function readURL(input) {
  if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
          $('#imgPreview').css('background-image', 'url('+e.target.result +')');
          $('#imgPreview').hide();
          $('#imgPreview').fadeIn(650);
      }
      reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUpload").change(function() {
  readURL(this);
});