
$(document).ready(function() {

    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.slideout-nav');

    // Hamburger button

    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('nav-show');
    });

    $(".nav-item").on('click', function() {
        $menuWrap.toggleClass('nav-show');
        $toggleButton.toggleClass('button-open');
    })

});