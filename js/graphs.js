//Google API KEY: AIzaSyCJCSElnUyNQo3oiNXGiNnj3HveuE-AKyY


$(document).ready(function() {

    $('#waypoint').waypoint(function(direction) {
        if (direction === 'down') {
            loadGraph();
            // Your current code
        } else {
            // Code to select the previous section
        }

    }, { offset: '50%' });

});


var options = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,

    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth: 2,

    //The percentage of the chart that we cut out of the middle.
    percentageInnerCutout: 60,

    //Boolean - Whether we should animate the chart 
    animation: true,

    //Number - Amount of animation steps
    animationSteps: 100,

    //String - Animation easing effect
    animationEasing: "easeOutQuart",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,

    //Function - Will fire on animation completion.
    onAnimationComplete: null
}
var graph1Data = [{
        value: 75,
        color: "#47a3ff"
    },
    {
        value: 25,
        color: "#e9e9e9"
    },
];
var graph2Data = [{
        value: 60,
        color: "#ff4747"
    },
    {
        value: 40,
        color: "#e9e9e9"
    },
];
var graph3Data = [{
        value: 45,
        color: "#ffd447"
            },
    {
        value: 55,
        color: "#e9e9e9"
    },
];


function loadGraph() {




    var myDoughnut1 = new Chart(document.getElementById("canvas1").getContext("2d")).Doughnut(graph1Data, options);
    var myDoughnut2 = new Chart(document.getElementById("canvas2").getContext("2d")).Doughnut(graph2Data, options);
    var myDoughnut3 = new Chart(document.getElementById("canvas3").getContext("2d")).Doughnut(graph3Data, options);
}
  google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
        var mapOptions = {
            center: new google.maps.LatLng(32.690243,-813.548814),
            zoom: 10,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: true,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
  {
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "geometry",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#000000" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#ffffff" },
      { "visibility": "on" }
    ]
  },{
  }
],
        }
        var mapElement = document.getElementById('google_map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
['CSRA', 'CSRA', '123-123-1234', 'CSRA@CSRA.com', 'CSRA.COM', 32.54047649763387, -93.64214257984008, 'https://mapbuildr.com/assets/img/markers/default.png']
        ];
        for (i = 0; i < locations.length; i++) {
            if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
            if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
            if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
            });
link = '';     }

}