$(document).ready(function(){

    // Smooth scrolling using jQuery easing
    $('#MainMenu li a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
            scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
        }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#MainMenu li a').click(function() {
        $('.navbar-collapse').collapse('show');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#MainMenu',
        offset: 56
    });
    

    $(window).on("scroll", function () {
        var qScroll = $(this).scrollTop();
        if (qScroll > 1) {
            $("#MainMenu").addClass("menu-fixed");
        } else {
            $("#MainMenu").removeClass("menu-fixed");
        };
    });

    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
    new WOW().init();


    $('.testimonials-slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });


    $('.sbp-slider').owlCarousel({
        loop: true,
        margin: 30,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });

    $('#MainMenu .drop-down').hover(function () {
        $(this).find('.my-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.my-menu').first().stop(true, true).slideUp(105)
    });
    

    $(".profile-list-tab").on("click", function () { 
        var data_tab = $(this).attr("data-tabs");

        $(".profile-list-tab").removeClass("current");
        $(".tab-content").removeClass("current");
        $(this).addClass("current");
        $("#" + data_tab).addClass("current");
    });


    $(".conditions-btn li").on("click", function () { 
        var data_tab = $(this).attr("data-tabs");

        $(".conditions-btn li").removeClass("active");
        $(".conditions-tab-content").removeClass("active");
        $(this).addClass("active");
        $("#" + data_tab).addClass("active");
    });


     //hide all tabs first
     $('.tab-operation').hide();
     //show the first tab content
     $('#tab-1').show();

     $('#select-box').change(function () {
     dropdown = $('#select-box').val();
     //first hide all tabs again when a new option is selected
     $('.tab-operation').hide();
     //then show the tab content of whatever option value was selected
     $('#' + "tab-" + dropdown).show();                                    
     });


    // var wow = new WOW(
    //     {
    //       boxClass:     'wow',      // animated element css class (default is wow)
    //       animateClass: 'animated', // animation css class (default is animated)
    //       offset:       0,          // distance to the element when triggering the animation (default is 0)
    //       mobile:       false,       // trigger animations on mobile devices (default is true)
    //       live:         true,       // act on asynchronously loaded content (default is true)
    //       callback:     function(box) {
    //         // the callback is fired every time an animation is started
    //         // the argument that is passed in is the DOM node being animated
    //       },
    //       scrollContainer: null,    // optional scroll container selector, otherwise use window,
    //       resetAnimation: true,     // reset animation on end (default is true)
    //     }
    //   );
    //   wow.init();


    if ($('.google-map').length) {

        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
    
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 15,
    
                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
    
                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                //styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
    
                // How you would like to style the map. 
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{ "featureType": "poi.medical", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "labels.text.fill", "stylers": [{ "visibility": "on" }, { "gamma": "1.50" }, { "weight": "1.00" }, { "color": "#35414d" }] }, { "featureType": "poi.medical", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.medical", "elementType": "labels.icon", "stylers": [{ "color": "#35414d" }, { "gamma": "1.50" }] }]
            };
    
            // Get the HTML DOM element that will contain your map 
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');
    
            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);
    
            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Welcome Desh',
            });
        }
      }

   


  });