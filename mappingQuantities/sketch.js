
var polylinesDepth;
var polylinesMag;

// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

// the dots we'll be adding to the map
var circles = [];
var mou = [];

// table as the data set
var table;

// my leaflet.js map
var mymap;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// *********  SLIDER INPUT *************
slider.oninput = function() {

      output.innerHTML = this.value;
      var sliderValue = this.value;

      if (sliderValue == 1){

        console.log('hellloooooo');
        var data = loadTable("data/all_hour.csv", "csv", "header");
      }else if (sliderValue == 2) {
        var data = loadTable("data/all_day.csv", "csv", "header");
      }else{
         var data = loadTable("data/all_month.csv", "csv", "header");
      }
      table = data;
      //drawDataPoints();
      //return data;

}


// *********  PRELOAD *************
function preload() {
    // table = slider.oninput();
    slider.oninput();
}


// *********  MAP SETUP *************
function setup() {

    // SETUP MAP
    setupMap();

    // CREATE CANVAS AND POINT IT TO SIDE PANEL DIV
    var canvas = createCanvas(400, 6000);
    canvas.parent('info-pane-side');
    background('#222');

    // DRAW ON CANVAS
    drawDataPoints();
}



// *********  map setup *************
function setupMap(){

  // ADD LAYER CONTROL
    // mymap = L.map('quake-map').setView([51.505, -0.09], 2);
    mymap = L.map('quake-map',{
      attributionControl: false, // attribution to leaflet
      zoomControl: false,
      doubleClickZoom: true,
      //renderer: L.canvas()
      //preferCanvas: true,
      center: [51.505, -0.09],  //centers the map around this while loading
      zoom: 2,
      zoomSnap: 1,   //Forces the map's zoom level to always be a multiple of this
      zoomDelta: 0.2,
      trackResize: false,
      maxBoundsViscosity: 0.0,
      crs: L.CRS.EPSG3857,
      minZoom: 2,
      maxZoom: 4
    });


    var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    	subdomains: 'abcd',
    	maxZoomzoom: 9
    }).addTo(mymap);

        // var slider = L.control.range({
        //     position: 'topright',
        //     min: 0,
        //     max: 100,
        //     value: 50,
        //     step: 1,
        //     orient: 'vertical',
        //     iconClass: 'leaflet-range-icon',
        //     icon: true
        // });
        //
        // slider.on('input change', function(e) {
        //     console.log(e.value); // Do something with the slider value here
        // });
        //
        // mymap.addControl(control);


    // call our function (defined below) that populates the maps with markers based on the table contents
    //drawDataPoints();

}


// *********  draw *************
function drawDataPoints(){

  var polyLatLngDepth =[];
  var polyLatLngMag =[];

  strokeWeight(5);
  stroke(255,0,0);

  var largestLat=[];
  var largestLon=[];
  var combined=[];
  var startpoint;


  // GET ALL REQ VARIABLES

  var time = table.getColumn('time'); var timemax = getColumnMax('time');
  var lat = table.getColumn('latitude'); var latmax = getColumnMax('lat');
  var lon = table.getColumn('longitude'); var lonmax = getColumnMax('lon');
  var depth = table.getColumn('depth'); var depthmax = getColumnMax('depth');
  var mag = table.getColumn('mag'); var magmax = getColumnMax('mag');
  var magType = table.getColumn('magType');


  // CIRCLE FOR EACH EARTHQUAKE
  for(var i=0; i<mag.length; i++){

           var circle = L.circle([lat[i], lon[i]], {
              color: 'transparent',      // the dot stroke color
              fillColor: '#FF2459', // the dot fill color
              fillOpacity: 0.6,  // use some transparency so we can see overlaps
              radius: mag[i] * 10000 * 4,
              info: table.getRow(i)
            }).addTo(mymap);


        // ON-CLICK EVENT FOR EACH EARTHQUAKE CIRCLE
        circle.addEventListener('click',function(){

          if(polylinesDepth !== undefined) {
            polylinesDepth.remove();
            polylinesMag.remove();
            polyLatLngDepth =[];
            polyLatLngMag = [];
          }



          // ****** NOT WORKING : remove existing polylines ************

          // if (polylinesDepth.length != 0 || polylinesMag.length != 0){
          //
          //     removeAllPolylines(pd);
          //     removeAllPolylines(polylinesMag);
          //
          // }

          // ****** NOT WORKING : scrollbar - auto-scoll to top on next selection ************
              //document.getElementById('quake-map').scrollTop = 0;
              // $("#quake-map").animate({ scrollTop: 0 }, "fast");


                // TO CLEAR CANVAS ON EACH CLICK ON EARTHQUAKE
                background('#222');

                noStroke();
                textSize(14);
                fill('white');

                text(`Largest Magnitude: ${getColumnMax("mag")}`, 40, 80);
                text(`Greatest Depth: ${getColumnMax("depth")}`, 40, 100);

                stroke('#efefef');strokeWeight(0.5);line(40,120,350,120);


      //****** SELECTED EVENT ***********

                // SELECTED EARTHQUAKE MAG
                var thisMag = Number(this.options.info.obj.mag);

                  // SELECTED EARTHQUAKE DEPTH
                var thisDepth = Number(this.options.info.obj.depth);

                // SELECTED EARTHQUAKE LAT LONG
                var thisLat = this.options.info.obj.latitude; var thisLng = this.options.info.obj.longitude;

                polyLatLngDepth.push([thisLat,thisLng]);
                polyLatLngMag.push([thisLat,thisLng]);

                 // DEPTH RANGE
                 var depthRange = 0.5;
                 var highDepth = thisDepth + depthRange;
                 if(thisDepth == 0){ var lowDepth = thisDepth;}else{ var lowDepth = thisDepth - depthRange;}

                 // MAG RANGE
                 var magRange = 0.1;

                 var highMag = thisMag + magRange;
                 if(thisMag == 0){ var lowMag = thisMag; }else{ var lowMag = thisMag - magRange;}

                var thisDist = distance(thisLat,thisLng,thisLat,thisLng, 'K');

                textSize(12);strokeWeight(0.75); fill('#efefef');
                text('SELECTED EVENT',50,150);

                // FOR SELECTED EARTHQUAKE
                fill(255,36,89,170); noStroke();
                ellipse(175,180,(thisMag)*10,(thisMag)*10);


                // TEXT
                textSize(12);stroke(0.5);strokeWeight('bold');fill('#efefef');
                text('id: '+this.options.info.obj['id'],50,180);
                text('mag: '+ this.options.info.obj['mag'] +' TKm ',50, 192.5);
                // text('dist: 0 TKm');

                stroke('#efefef');strokeWeight(0.5);line(40,215,350,215);


        //****** RELATED EVENT ***********

        textSize(12); strokeWeight(0.75); fill('#efefef');
        text('RELATED EVENTS (mag +/- 0.1)',50,245);

                 var j = 0;



                 for(i=0;i<this.options.info.table.rows.length;i++){

                        // DEPTH
                         if(this.options.info.table.rows[i].obj['depth'] < highDepth && this.options.info.table.rows[i].obj['depth'] > lowDepth){
                             polyLatLngDepth.push([this.options.info.table.rows[i].obj['latitude'],this.options.info.table.rows[i].obj['longitude']]);
                         }else{}

                          // MAGNITUDE
                          if(this.options.info.table.rows[i].obj['mag'] < highMag && this.options.info.table.rows[i].obj['mag'] > lowMag){

                              // COUNTER FOR Y TRANSLATION
                               j+=1;
                               polyLatLngMag.push([this.options.info.table.rows[i].obj['latitude'],this.options.info.table.rows[i].obj['longitude']]);

                              // DISTANCE BETWEEN TWO POINTS
                              var dist = distance(thisLat,thisLng,this.options.info.table.rows[i].obj['latitude'], this.options.info.table.rows[i].obj['longitude'], 'K');

                             // VERTICAL SHIFT
                              var startY = 230;

                              // MAGNITUDE ELLIPSE
                               fill(255,36,89,95); noStroke();
                               var el = ellipse((175+(dist/75)),(startY+j*60),(this.options.info.table.rows[i].obj['mag'])*10,(this.options.info.table.rows[i].obj['mag'])*10);

                              // DISTANCE LINES
                               stroke('#AACC00'); strokeWeight(1.2);
                               line(175,(startY+(j*60)),175+(dist/75),startY+j*60);

                               // TEXT
                               textSize(12);
                               // noStroke();
                               stroke(0.5);
                               strokeWeight('bold');
                               fill('#efefef');
                               text('id: '+this.options.info.table.rows[i].obj['id'],50,(startY+(j*60)));
                               text('mag: '+ this.options.info.table.rows[i].obj['mag'] +' TKm ',50,(startY+12.5+(j*60)));
                               text('dist: '+(dist/1000).toFixed(2) +' TKm ',50,(startY+25+(j*60)));

                              //  el.bindTooltip(`${popupText}`);
                              // var mmm = mousePressed();
                              // console.log('mmm'); console.log(mmm);
                              // var mDist = distance((150+(dist/75)),(60+j*60),mmm[0],mmm[1]);
                              // if( mDist< (this.options.info.table.rows[i].obj['mag'])*10){
                              //   console.log('im in the mag circle');
                              // }

                          } else{}
                    }


                      // CONNECTIONS BY DEPTH
                         polylinesDepth = L.polyline(polyLatLngDepth, {
                         color: '#00D5FF',
                         weight: 1
                         }).addTo(mymap);

                     // CONNECTIONS BY MAG
                         polylinesMag = L.polyline(polyLatLngMag, {
                         color: '#AACC00',
                         weight: 1
                         }).addTo(mymap);
          });


          // Tooltip
          var popupText = 'Time: '+ time[i] + '<br> Latitude: '+ lat[i]+ '<br> Longitude: '+lon[i] + '<br> Magnitude: '+mag[i];
          //circle.bindPopup(`${popupText}`);
          circle.bindTooltip(`${popupText}`);


          if(mag[i] > (magmax-magmax*25/100)){
               largestLat.push(lat[i]); largestLon.push(lon[i]);
               combined.push([lat[i],lon[i]]);
          }

          var slider = document.getElementById('slider');



      }


}



// REMOVE POLYLINES
function removeAllPolylines(polylines){
    polylines.forEach(function(polylines, i){
        mymap.removeLayer(polylines);
    });
    polylines = [];
}



function getColumnMax(columnName){
    // get the array of strings in the specified column
    var colStrings = table.getColumn(columnName);

    // convert to a list of numbers by running each element through the `float` function
    var colValues = _.map(colStrings, float);

    // find the max value by manually stepping through the list and replacing `m` each time we
    // encounter a value larger than the biggest we've seen so far
    var m = 0.0;
    for(var i=0; i<colValues.length; i++){
        if (colValues[i] > m){
            m = colValues[i];
        }
    }
    return m;

    // or do it the 'easy way' by using lodash:
    // return _.max(colValues);
  }

function drawChart(){var ctx = document.getElementById("myChart1");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'Magnitude',
            data: [9, 11, 10, 5, 2, 3],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
}

// function mousePressed() {
//     mou = [];
//     mou.push(mouseX);
//     mou.push(mouseY);
//     return mou;
// }
