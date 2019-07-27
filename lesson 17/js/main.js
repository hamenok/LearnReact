$(document).ready(function(){
    let selectTour = $('a[href="#tour"]'),
        giveConsult = $('.main_btn.text-center.contact'),
        raspisanie = $('a[href="#sheldure"]'),

        close = $('.close');

        selectTour.on('click', function(e){
            e.preventDefault();
            $('.overlay').fadeIn("slow");
            $('.modal').slideDown("slow");
        });

        giveConsult.on('click', function(e){
            e.preventDefault();
            $('.overlay').fadeIn("slow");
            $('.modal').slideDown("slow");
        });

        raspisanie.on('click', function(e){
            e.preventDefault();
            $('.overlay').fadeIn("slow");
            $('.modal').slideDown("slow");
        });

        close.on('click', function(e){
            e.preventDefault();
            $('.modal').slideUp("slow");
            $('.overlay').fadeOut("slow");
        });
});