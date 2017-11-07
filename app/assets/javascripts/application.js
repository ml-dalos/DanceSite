// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require rails-ujs
//= require turbolinks
//= require_tree .
//

$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#up').fadeIn();
        } else {
            $('#up').fadeOut();
        }
    });
    $("a[href^='#']").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
    });
    var a=true;
    $(".btn-1").click(function(){
        $(this).parent().prev().slideToggle("slow");
        if(a==false){
            $(this).val("Узнать больше...");
            a=true;
        }else{
            $(this).val("Свернуть");
            a=false;
            
        }
    });

});
