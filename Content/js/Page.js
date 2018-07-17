$(function () {
    $("#modes").click(function () {
        $("#showmodes").slideToggle();
    });

});


var fixed = false;
if ($(window).width() <= 960) {
    $(document).scroll(function () {
        if ($(this).scrollTop() > 0) {
            if (!fixed) {
                fixed = true;
                $('.mobil-sidemenu').css({
                    position: 'fixed',
                    display: 'block',
                    right: '0',
                });
            }
        }
    });
}


var header = $('.header');
$(window).scroll(function (e) {
    if (header.offset().top !== 0) {
        if (!header.hasClass('shadow')) {
            header.addClass('shadow');
        }
    } else {
        header.removeClass('shadow');
    }
});


if ($(window).width() > 1300) {
    $('#toggle-mobile').removeClass('col-md-12');
}
else {
    $('#toggle-mobile').addClass('col-md-12');
}


if ($(window).width() > 960) {
    $('#mobile-extra-menu-toogle').remove();
}


