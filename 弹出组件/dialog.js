define(['jquery-1.12.4'],function () {
    var dialog = {
        open:function () {
            var html ='<div id="container">'
                +'<div id="background"></div>'
                +'<div id="lgn">登录'
                +'<span id="close">X</span>'
                +'</div>'
                +'</div>';
            $('body').append(html);
        },
        close:function () {

        }

    }
    return dialog;
})