/**
 * Created by Owner on 4/2/2017.
 */

$(document).ready(function () {    //this loads jQuery
  //Set options
    var speed = 500; // the speed of the transitions in ms
    var autoswitch = true; // we'll set this up for auto-switching enable/disable
    var autoswitch_speed = 4000; // auto slider speed in ms

    // add initial active class
    $('.slide').first().addClass('active');
    //Apparently in jQuery you literally have a .first method

    // Hide all slides
    $('.slide').hide();

    // show first slide
    $('.active').show();

    $('#next').on('click', function() {
       $('.active').removeClass('active').addClass('oldActive'); // take the active class off
        if ($('.oldActive').is(':last-child')) {
           $('.slide').first().addClass('active'); // bring the 1st one back in
        } else {
            ('.oldActive').next().addClass('active');
        }
        $('oldActive').removeClass('oldActive');
       $('slide').fadeOut(speed);
       $('.active').fadeIn(speed);
    });

    $('#previous').on('click', function() {
       $('.active').removeClass('active').addClass('oldActive'); // take the active class off
        if ($('.oldActive').is(':first-child')) {
           $('.slide').first().addClass('active'); // bring the 1st one back in
        } else {
            ('.oldActive').prev().addClass('active');
        }
        $('oldActive').removeClass('oldActive');
       $('slide').fadeOut(speed);
       $('.active').fadeIn(speed);
    });
});
