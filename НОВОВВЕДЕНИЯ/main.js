$(document).ready(function(){  
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
            } else {
                $('#up').fadeOut();
            }
        });

    $("#up").click(function(){
            $("body").animate({"scrollTop":0},"slow");
    });
    $("a[href^='#']").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
  });
    //ВСТАВИТЬ ТО, ЧТО НИЖЕ И ТОЛЬКО ЭТО!!! ГЫЫ
  
    $(".im").click(function(){
        $(this).children(".imt").fadeToggle();
    })
});
