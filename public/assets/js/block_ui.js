$(document).ready(function () {
    $('#myButton').click(function () {
        $.blockUI({
            message:'<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });
    $('#myButton1').click(function () {
        $('.vertical-sidebar').block({
            message:'<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });

    $('#myButton2').click(function () {
        $('.block-ui-card').block({
            message:'<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });

    $('#myButton3').click(function () {
        $('.block-msg-card').block({
            message: '<span class="msg-card"> Custom Message...</span>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });

    $('#myButton4').on('click', function() {
        var message = $('.multiple-msgs');
        $('.block-mutiple-msg-card').block({
            message: message,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            onBlock: function(){
				clearTimeout();
			}
        });

        window.setTimeout(function () {
			message.html('<div class="mutiple-msg"> Loading ...</div>');
        }, 0);

        window.setTimeout(function () {
			message.html('<div class="mutiple-msg">Just a minute...</div>');
        }, 4000);

        window.setTimeout(function () {
            message.html(' <button type="button" class="btn btn-info">Info</button>');
        }, 5000);

        window.setTimeout(function () {
           $('.block-mutiple-msg-card').unblock({
                onUnblock: function(){
                    message.removeClass('bg-success');
                }
           });
        }, 6000);
    });
    
    $('#myButton5').click(function () {
        $('.block-msg-animation-card').block({
            message: '<div class="bolckui-msg-box"><div class="loader-container-box"><div class="loader"></div></div></span>&nbsp; Loading ...</div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });

    $('#myButton6').click(function () {
        $('.unblock-callback').block({
            message: '<div class="feather icon-refresh-cw icon-spin font-medium-2"></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                color: '#333',
                backgroundColor: 'transparent'
            },
            onUnblock: function() {
                alert('Page is now unblocked. FadeOut complete.');
            }
        });
    });
    $('#myButton7').click(function () {
        $('.block-callback').block({
            message: '<div class="feather icon-refresh-cw icon-spin font-medium-2"></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                color: '#333',
                backgroundColor: 'transparent'
            },
            onBlock: function() {
                alert('Page is now blocked, FadeIn complete.');
            }
        });
    });

    $('#myButton8').click(function () {
        $.blockUI({
            message: '<div class="loader-container-box"><div class="loader"></div></div>',
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                color: '#333',
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            onOverlayClick: $.unblockUI
        });
    });

    $('#myButton9').click(function () {
        $('.block-primary-overlay').block({
            message: '<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--primary))',
                borderRadius:'20px',
                borderRadius: 'var(--app-border-radius)',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                color: '#333',
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            
        });
    });

    $('#myButton10').click(function () {
        $('.block-success-overlay').block({
            message: '<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--success))',
                borderRadius: 'var(--app-border-radius)',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                color: '#333',
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            
        });
    });
    $('#myButton11').click(function () {
        $('.block-warning-overlay').block({
            message: '<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--warning))',
                borderRadius: 'var(--app-border-radius)',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                color: '#333',
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            
        });
    });
    $('#myButton12').click(function () {
        $('.block-danger-overlay').block({
            message: '<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--danger))',
                borderRadius: 'var(--app-border-radius)',
                opacity: 0.8,
                cursor: 'wait'
            },
            css: {
                color: '#333',
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            
        });
    });

    $('#myButton13').click(function () {
        $('.block-form-spinner').block({
            message:'<div class="loader-container-box"><div class="loader"></div></div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });

    $('#myButton14').click(function () {
        $('.form-custome-message').block({
            message: '<div class="bolckui-msg-box"><div class="loader-container-box"><div class="loader"></div></div></span>&nbsp; Loading ...</div>',
            timeout: 3000,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            }
        });
    });

    $('#myButton15').on('click', function() {
        var message = $('.multiple-msgs1');
        $('.form-multiple-message').block({
            message: message,
            overlayCSS: {
                backgroundColor: 'rgba(var(--dark), 0.8)',
                opacity: 0.8,
                borderRadius: 'var(--app-border-radius)',
                cursor: 'wait'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'transparent'
            },
            onBlock: function(){
				clearTimeout();
			}
        });

        window.setTimeout(function () {
			message.html('<div class="mutiple-msg"> Loading ...</div>');
        }, 0);

        window.setTimeout(function () {
			message.html('<div class="mutiple-msg">Just a minute...</div>');
        }, 4000);

        window.setTimeout(function () {
            message.html(' <button type="button" class="btn btn-primary">Primary</button>');
        }, 5000);

        window.setTimeout(function () {
           $('.form-multiple-message').unblock({
                onUnblock: function(){
                    message.removeClass('bg-primary');
                }
           });
        }, 6000);
    });
    
});

