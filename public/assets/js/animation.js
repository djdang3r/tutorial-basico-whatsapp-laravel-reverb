// **--------Animathion
const notes = document.querySelectorAll('.animation-blocks > .animation-card  a')
for(var i=0;i<notes.length;i++){
  notes[i].addEventListener('mouseenter',function(e) {
      const ani = e.target.dataset.ani;
      e.target.classList.add('animate__animated', 'animate__1', 'animate__' + ani);

    window.setTimeout(function(){
      e.target.classList.remove('animate__animated', 'animate__1', 'animate__' + ani);
    }, 1000);
  });
}