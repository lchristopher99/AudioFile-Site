/*Scroll to top when arrow up clicked BEGIN*/
jQuery_1_7_1(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        jQuery_1_7_1('#back2Top').fadeIn();
    } else {
        jQuery_1_7_1('#back2Top').fadeOut();
    }
});
jQuery_1_7_1(document).ready(function() {
    jQuery_1_7_1("#back2Top").click(function(event) {
        event.preventDefault();
        jQuery_1_7_1("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
