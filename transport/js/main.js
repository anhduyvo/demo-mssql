(function ($) {
	"use strict";
    jQuery(window).load(function(){
        // Preloader
        $("#preloader").fadeOut(500);
    });
}(jQuery));

// init wow 
new WOW().init(); 
var wowInittialize = function(){ 
    return new WOW().init(); 
};

// init app 
(function ($) { 
    "use strict";
    // load modules 
    angular.module('transport', [ 
        'transport.appCommon',
        //'transport.controllers',
        //'transport.directives'  
        //'transport.services'
        'transport.components.mainMenu'
    ]); 
    
    // boostrap
    angular.element(function() {angular.bootstrap(document, ['transport']);});
}());