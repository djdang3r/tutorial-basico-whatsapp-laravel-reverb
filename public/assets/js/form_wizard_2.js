//  **------ Tabs js**
$(document).on('click','.tabs-step .tab',function () {
    var tab_id = $(this).attr('data-tab');
    $('.tabs-step.tab').removeClass('current');
    $('.tab-contents').removeClass('current');
    $('.tab').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
})

//  **------Vertical Tabs**
$(document).on('click','.vertical-tabs .tab',function () {
    var tab_id = $(this).attr('data-tab');
    $('.vertical-tabs.tab').removeClass('current-tab');
    $('.tab-contents').removeClass('current-tab');
    $('.tab').removeClass('current-tab');
    $(this).addClass('current-tab');
    $("#" + tab_id).addClass('current-tab');
})

//  **------Vertical Tabs**
$(document).on('click','.checkout-tab .tabs',function () {
    var tab_id = $(this).attr('data-tab');
    $('.checkout-tab.tabs').removeClass('current-checkout-tab');
    $('.tab-checkout-content').removeClass('current-checkout-tab');
    $('.tabs').removeClass('current-checkout-tab');
    $(this).addClass('current-checkout-tab');
    $("#" + tab_id).addClass('current-checkout-tab');
})