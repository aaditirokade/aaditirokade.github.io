var circle = [];
var mymap;
var table;

function preload(){
 table = loadTable('data/all_day.csv', "csv", "header");
}

function setup(){


  setupMap()

  createCanvas(windowWidth, 300);
  background(222);

  fill(0)
  noStroke()
  textSize(16)
  text(`Plotting seismic events`, 20, 40);
  text(`Largest Magnitude: ${getColumnMax("mag")}`, 20, 60);
  text(`Greatest Depth: ${getColumnMax("depth")}`, 20, 80);


// PAN to a particular location on zoom in
//mymap.panTo([20, 20]);
//draw();



}

function setupMap(){

  // INITIALIZE - map on the map div
  var mymap = L.map('quake-map', {
    attributionControl: false, // attribution to leaflet
    zoomControl: false,
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
  })

 // MAP TILE  L.tilelayer(<String> urlTemplate, <TileLayer options> options?)

 var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(mymap);

// POPUP
 var latlng = L.latLng(50.5, 30.5);
 var popup = L.popup()
              .setLatLng(latlng)
              .setContent('<p>Hello world!<br />This is a nice popup.</p>')
              .openOn(mymap);


// RECT
var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
var rect = L.rectangle(bounds,{
  color: "#ff7800",
  weight: 1,
  stroke: false,
  fillOpacity: 1.0
}).addTo(mymap);

drawDataPoints();

}

function drawDataPoints(){

  var time = table.getColumn('time'); //console.log('time'); console.log(time);
  var timemax = getColumnMax('time'); //console.log('timemax: '+ timemax);

  var lat = table.getColumn('latitude'); //console.log('lat'); console.log(lat);
  var latmax = getColumnMax('lat'); //console.log('latmax: '+ latmax);

  var lon = table.getColumn('longitude'); //console.log('lon'); console.log(lon);
  var lonmax = getColumnMax('lon'); //console.log('lonmax: '+ lonmax);

  var depth = table.getColumn('depth'); //console.log('depth'); console.log(depth);
  var depthmax = getColumnMax('depth'); //console.log('depthmax: '+ depthmax);

  var mag = table.getColumn('mag'); //console.log('mag'); console.log(mag);
  var magmax = getColumnMax('mag'); //console.log('magmax: '+ magmax);

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


    // cycle through the parallel arrays and add a dot for each event
    for(var i=0; i<depth.length; i++){

        var circle = L.circle([lat[i], lon[i]], {
            color: 'transparent',      // the dot stroke color
            //fillColor: '#f03', // the dot fill color
            fillColor: 'red', // the dot fill color
            fillOpacity: 0.6,  // use some transparency so we can see overlaps
            radius: mag[i] * 10000*4
        }).addTo(mymap);;

          //circle.addTo(mymap);
          circle.push(circle)

      // var popupText = 'Time: '+ time[i] + '\n Latitude: '+ lat[i]+ '\n Longitude: '+lon[i];
      // //circle.bindPopup(`${popupText}`);
      // circle.bindTooltip(`${popupText}`).openTooltip();
      //
      //
      // // layers
      // var popup = L.popup()
      // .setLatLng([51.5, -0.09])
      // .setContent("I am a standalone popup.")
      // .openOn(mymap);
      }

   //var polygon = L.polygon([lat[i], lon[i]]).addTo(mymap);

}

// GET MAX

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
