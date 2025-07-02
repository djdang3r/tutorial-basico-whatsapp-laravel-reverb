$(document).on('click','.checkout-tabs-step .tab',function () {
    var tab_id = $(this).attr('data-tab');
    $('.checkout-tabs-step.tab').removeClass('checkout-current-step');
    $('.tabs-contents').removeClass('checkout-current-step');
    $('.tab').removeClass('checkout-current-step');
    $(this).addClass('checkout-current-step');
    $("#" + tab_id).addClass('checkout-current-step');
})