//touch spin

$(document).on('click','.decrement, .increment',function(e){
    let input = $(this).parent().find('.count');
    let count = input.val();
  
    if(count===''){
      count = 0;
    }
    $(this).hasClass('decrement') ? count-- : count++;
    if(count)
      input.val(count)
  });