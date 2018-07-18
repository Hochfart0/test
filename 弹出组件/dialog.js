define(['jquery-1.12.4'],function () {
    var dialog = {
        open:function (arg) {
            defaultArg = {
                width:300,
                height:300
            };
            $container = $('<div id="container"></div>');
            
            var html ='<div id="container">'
                +'<div id="background"></div>'
                +'<div id="lgn">'
                +'<span>登录</span>'
                +'<span id="close">X</span>'
                +'</div>'
                +'</div>';
            var options = $.extend(defaultArg,arg);
            $('body').append(html);
            $('.dialog-content').css({
                width:options.width,
                height:options.height
            });
            $('.dialog')
        },
        close:function () {

        }

    };
    return dialog;
});