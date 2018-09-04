$(document).ready(function () {
    $("#imcf").hide();
    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('#imcf').fadeIn();
            $("#header_imcf").fadeOut();
        } else {
            $('#imcf').fadeOut();
            $("#header_imcf").fadeIn();
        }
            checkPos();
    });
    var nav = $("#navbar");
    var navh = $("#navbar").offset().top;
    var stickynav = "sticky";
    function checkPos() {

        if ($(this).scrollTop() > navh) {
            nav.addClass(stickynav);
        }
        else {
            nav.removeClass(stickynav);
        }
    };
    
});