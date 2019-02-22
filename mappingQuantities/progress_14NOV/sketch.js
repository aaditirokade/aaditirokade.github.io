// minimum and maximum values for magnitude and depth
var magnitudeMin, magnitudeMax;
var depthMin, depthMax;

// the dots we'll be adding to the map
var circles = [];

// table as the data set
var table;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("data/all_day.csv", "csv", "header");
}


// *********  map setup *************
function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // next, draw our p5 diagram that complements it
    createCanvas(windowWidth, 300);
    background(222);

    fill(0)
    noStroke()
    textSize(16)
    text(`Plotting seismic events`, 20, 40);
    text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60);
    text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80);


}



// *********  map setup *************
function setupMap(){

  // ADD LAYER CONTROL
    // mymap = L.map('quake-map').setView([51.505, -0.09], 2);
    mymap = L.map('quake-map',{
      attributionControl: false, // attribution to leaflet
      // zoomControl: false,
      doubleClickZoom: false,
      //renderer: L.canvas()
      //preferCanvas: true,
      center: [51.505, -0.09],  //centers the map around this while loading
      zoom: 2,
      zoomSnap: 1,   //Forces the map's zoom level to always be a multiple of this
      zoomDelta: 0.2,
      trackResize: false,
      maxBoundsViscosity: 0.0,
      crs: L.CRS.EPSG3857,
      minZoom: 1,
      maxZoom: 7
    });


    // var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    //  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    //  subdomains: 'abcd',
    //  minZoom: 0,
    //  maxZoom: 20,
    //  ext: 'png'
    // }).addTo(mymap);

    var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mymap);


    // call our function (defined below) that populates the maps with markers based on the table contents
    drawDataPoints();


}


// *********  draw *************
function drawDataPoints(){
  console.log("hiiiiiiii");
  strokeWeight(5);
  stroke(255,0,0);

  var largestLat=[];
  var largestLon=[];
  var combined=[];
  var startpoint;


  // get all parameters

  var time = table.getColumn('time'); //console.log('time'); console.log(time);
  var timemax = getColumnMax('time'); //console.log('timemax: '+ timemax);

  var lat = table.getColumn('latitude'); //console.log('lat'); console.log(lat);
  var latmax = getColumnMax('lat'); //console.log('latmax: '+ latmax);

  var lon = table.getColumn('longitude'); //console.log('lon'); console.log(lon);
  var lonmax = getColumnMax('lon'); //console.log('lonmax: '+ lonmax);

  var depth = table.getColumn('depth'); //console.log('depth'); console.log(depth);
  var depthmax = getColumnMax('depth'); //console.log('depthmax: '+ depthmax);

  var mag = table.getColumn('mag'); //console.log('mag'); console.log(mag);
  var magmax = getColumnMax('mag'); console.log('magmax: '+ magmax);

  var magType = table.getColumn('magType'); //console.log('magType'); console.log(magType);
  //var magmax = getColumnMax('mag'); console.log('magmax: '+ magmax);

  var nst = table.getColumn('nst'); //console.log('nst'); console.log(nst);
  var nstmax = getColumnMax('nst'); //console.log('nstmax: '+ nstmax);

  var gap = table.getColumn('gap'); //console.log('gap');  console.log(gap);
  var gapmax = getColumnMax('gap'); //console.log('gapmax: '+ gapmax);

  var dmin = table.getColumn('dmin'); //console.log('dmin');  console.log(dmin);
  var dminmax = getColumnMax('dmin'); //console.log('dminmax: '+ dminmax);

  var rms = table.getColumn('rms'); //console.log('rms'); console.log(rms);
  var rmsmax = getColumnMax('rms'); //console.log('rmsmax: '+ rmsmax);

  var net = table.getColumn('net'); //console.log('net'); console.log(net);
  var netmax = getColumnMax('net'); //console.log('netmax: '+ netmax);

  var id = table.getColumn('id'); //console.log('id'); console.log(id);
  var idmax = getColumnMax('id'); //console.log('idmax: '+ idmax);

  var updated = table.getColumn('updated'); //console.log('updated'); console.log(updated);
  var updatedmax = getColumnMax('updated'); //console.log('updatedmax: '+ updatedmax);

  var place = table.getColumn('place'); //console.log('place'); console.log(place);
  var type = table.getColumn('type'); //console.log('type'); console.log(type);

  var horizontalError = table.getColumn('horizontalError'); //console.log('horizontalError'); console.log(horizontalError);
  var depthError = table.getColumn('depthError'); //console.log('depthError'); console.log(depthError);
  var magError = table.getColumn('magError'); //console.log('magError'); console.log(magError);

  var magNst = table.getColumn('magNst'); //console.log('magNst'); console.log(magNst);
  var magNstmax = getColumnMax('magNst'); //console.log('magNstmax: '+ magNstmax);

  var status = table.getColumn('status'); //console.log('status'); console.log(status);
  var locationSource = table.getColumn('locationSource'); //console.log('locationSource'); console.log(locationSource);
  var magSource = table.getColumn('magSource'); //console.log('magSource'); console.log(magSource);


    // get minimum and maximum values for both
    //   magnitudeMin = 0.0;
    //   magnitudeMax = getColumnMax("mag");
    //   console.log('magnitude range:', [magnitudeMin, magnitudeMax])
    //
    //   depthMin = 0.0;
    //   depthMax = getColumnMax("depth");
    //   console.log('depth range:', [depthMin, depthMax])

    //var bounds = map.getBounds().pad(0.25); // slightly out of screen
    // console.log(mag);

    // CIRCLE FOR EACH EARTHQUAKE
    for(var i=0; i<mag.length; i++){

        // create a new dot
        //console.log('magnitude:' + mag[i]);
        // draw a circle

         var circle = L.circle([lat[i], lon[i]], {
            color: 'transparent',      // the dot stroke color
            //fillColor: '#f03', // the dot fill color
            fillColor: 'red', // the dot fill color
            fillOpacity: 0.6,  // use some transparency so we can see overlaps
            radius: mag[i] * 10000*4
          }).addTo(mymap);

          var popupText = 'Time: '+ time[i] + '\n Latitude: '+ lat[i]+ '\n Longitude: '+lon[i];
          //circle.bindPopup(`${popupText}`);
          circle.bindTooltip(`${popupText}`);

          if(mag[i] > (magmax-magmax*25/100)){
               largestLat.push(lat[i]); largestLon.push(lon[i]);
               combined.push([lat[i],lon[i]]);
          }
      }




        // POLYLINE

        //var polyline = L.polygon(combined, {color: 'darkgray'}).addTo(mymap);
        //mymap.fitBounds(polyline.getBounds());

        //console.log('combined');console.log(combined);


        for(i=0;i<largestLat.length;i++){

            // BLUE
            L.circle([largestLat[i], largestLon[i]], {
               //color: 'transparent',      // the dot stroke color
               fillColor: 'transparent', // the dot fill color
               stroke: 'violet', // the dot fill color
               weight: 1.5,
               //fillOpacity: 0.4,  // use some transparency so we can see overlaps
               radius: mag[i] * 10000*10
             }).addTo(mymap);
           }



          // d3.select('body').append('svg').attr('width','400').attr('height','800').attr('fill','black')
          //   .append('rect').attr('x', '20').attr('y','300')
          //   .attr('width', '40').attr('height','40').attr('fill','white').attr('id','rect')

  // mymap.on('click', function(e, combined){
  //       for(i=0;i<combined.length;i++)
  //       {
  //         console.log(mag[i]);
  //           var endpoint=[];
  //           // CONNECT SIMILAR MAGS
  //
  //             startpoint= e.latlng;
  //             endpoint.push(startpoint);
  //             endpoint.push(combined[i]);
  //             console.log(combined[i]);
  //             //L.polyline(endpoint, {color: 'red'}).addTo(mymap);
  //
  //
  //       }
  // });

myData = combined;

mymap.on('click', L.bind(onClick, this, myData));


function onClick(myData, e) {




    for(i=0;i<myData.length;i++)
          {
              var endpoint=[];
              // CONNECT SIMILAR MAGS

                startpoint= e.latlng;
                endpoint.push(startpoint);
                endpoint.push(myData[i]);

                var polylines = L.polyline(endpoint, {
                  color: 'blueviolet',
                  weight: 0.5
                }).addTo(mymap);
          }
            mymap.removeLayer(polylines);
            polylines = [];
//removeAllPolylines(polylines);
}

function removeAllPolylines(polylines){
  console.log(polylines);
    // polylines.forEach(function(polylines, i){
        // mymap.removeLayer(polylines);
    // })
    // polylines = [];
}

// // *********  additional functions *************
// function removeAllCircles(){
//   // remove each circle from the map and empty our array of references
//   circles.forEach(function(circle, i){
//       mymap.removeLayer(circle);
//   })
//   circles = [];
//
//     }
//
//
//
// *********  additional functions *************



// get the maximum value within a column

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
