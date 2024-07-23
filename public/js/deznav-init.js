"use strict"

var dezSettingsOptions = {};

function getUrlParams(dParam) {
    var dPageURL = window.location.search.substring(1),
        dURLVariables = dPageURL.split('&'),
        dParameterName,
        i;

    for (i = 0; i < dURLVariables.length; i++) {
        dParameterName = dURLVariables[i].split('=');

        if (dParameterName[0] === dParam) {
            return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
        }
    }
}

(function($) {

    "use strict"

    var body = $('body');
    var direction = getUrlParams('dir');

    dezSettingsOptions = {
        typography: "poppins",
        version: "light",
        layout: "vertical",
        primary: "color_1",
        headerBg: "color_1",
        navheaderBg: "color_1",
        sidebarBg: "color_1",
        sidebarStyle: "full",
        sidebarPosition: "fixed",
        headerPosition: "fixed",
        containerLayout: "full",
        direction: direction,
        navTextColor: 'color_1',
        navigationBarImg: '' /* image path or null*/
    };

    new dezSettings(dezSettingsOptions);

    jQuery(window).on('resize', function() {
        /*Check container layout on resize */
        dezSettingsOptions.containerLayout = $('#container_layout').val();
        /*Check container layout on resize END */

        new dezSettings(dezSettingsOptions);
    });

    if (direction == 'rtl' || body.attr('direction') == 'rtl') {
        direction = 'rtl';
        jQuery('.main-css').attr('href', 'css/style-rtl.css');
    } else {
        direction = 'ltr';
        jQuery('.main-css').attr('href', 'css/style.css');
    }

})(jQuery);