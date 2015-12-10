<?php
if(!class_exists('msdlabMaps')){
    class msdlabMaps{
        function __construct(){
            add_action('wp_enqueue_scripts', array(&$this,'add_scripts'));
        }
        
        function add_scripts(){
            wp_enqueue_script('google-maps','//maps.googleapis.com/maps/api/js');
            add_action('wp_footer',array(&$this,'map_scripts'));
        }
        
        function map_scripts(){
            $lat = get_option('msdsocial_lat')!=''?get_option('msdsocial_lat'):'23.835027';
            $lng = get_option('msdsocial_lng')!=''?get_option('msdsocial_lng'):'90.368574';
            $ret = '<script>
        jQuery(function () {
            google.maps.event.addDomListener(window, \'load\', init);
            function init() {
                var myLatlng = new google.maps.LatLng('.$lat.','.$lng.' );
                var maptooltipbold = "MSDLab";
                var maptooltip = "MSDlab Content";
                
                
                //---------------------------------------------------------//
                
                
                var mapOptions = {
                    zoom: 16,
                    scrollwheel: false,
                    center: myLatlng,
                    styles: [
                    {featureType:"landscape", stylers:[{saturation:-100},{lightness:0},{visibility:"on"}]},
                    {featureType:"poi", stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},
                    {featureType:"road.highway", stylers:[{saturation:-100},{visibility:"simplified"}]},
                    {featureType:"road.arterial", stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},
                    {featureType:"road.local", stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},
                    {featureType:"transit", stylers:[{saturation:-100},{visibility:"simplified"}]},
                    {featureType:"administrative.province", stylers:[{visibility:"off"}]},
                    {featureType:"administrative.neighborhood", stylers:[{saturation:-100},{lightness:-25}]}
                    ]
                };

                var mapElement = document.getElementById(\'map\');
                var map = new google.maps.Map(mapElement, mapOptions);
                var image = "'.get_stylesheet_directory_uri().'/lib/img/pin.png";
                var content = document.createElement(\'div\');
                content.innerHTML = "<div class="+"map-tooltip"+"><h4><strong>"+maptooltipbold+"</strong></h4><hr>"+"<h5>"+maptooltip+"</h5></div>";
                var infowindow = new google.maps.InfoWindow({
                 content: content
                });
                
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                    draggable:false,
                    scrollwheel: false,
                    icon: image,
                });
                    google.maps.event.addListener(marker, \'click\', function() {
                      infowindow.open(map, marker);
                    });

            }
        });
        </script>';
        print $ret;
        }
    }
    $msdlabMaps = new msdlabMaps;
}