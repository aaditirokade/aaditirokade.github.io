// // Load CSV
// d3.csv("./data/thesis_data.csv").then(function(data) {
// });

// Load JSON
d3.json('./data/thesis_data.json').then((data) => {
    console.log(data);
  

// DIV FOR TOOLTIP
var svg = d3.select(".col-10").append('svg').attr('width','115%').attr('height','130%')

// var rect = svg.append('rect').attr("x", '0%').attr('y', '0%')
//               .attr('width','90%').attr('height','90%')
//               .style('fill','#ffffff'). style('opacity', 0.05)

// DIV for TOOLTIP
var div = svg.append('div').attr('class', 'tooltip');


var col10 = document.getElementById("this");

// SET MARGINS
var margin = {top: 20, right: 20, bottom: 20, left: 20},

//WIDTH AND HEIGHT
width = col10.offsetWidth - margin.left - margin.right,
height = col10.offsetHeight - margin.top - margin.bottom;
var xt = Number(5);
var yt =  Number(0);

var chart = svg.append('g').attr('transform', `translate(${xt}, ${yt})`);

// // FOR TICK FORMAT
// var formatPercent = d3.format(".0f");

// SCALES - ORDINAL (MEASUREMENT LEVEL OF VARIABLE)
// var x = d3.scaleOrdinal().domain(axisMonth).range(0, width)
// const xScale = d3.scaleBand().range([0, width]).domain(data.results.map((d) => d.month)).padding(0.4)
var monthNameFormat = d3.timeFormat("%b");

var xScale = d3.scaleTime()
  .domain([new Date("2014-05-01"), new Date("2018-11-31")])
  .range([margin.left, width]);
  
// const xScale = d3.scaleBand().range([0, width]).domain(data.results.map((d) => d.month)).padding(0.4)

const yScale = d3.scaleLinear().range([height, 0]).domain([0, 8]);
    //   chart.append('g').call(d3.axisLeft(yScale));
       
// const makeYLines = () => d3.axisLeft().scale(yScale)
//       chart.append('g').attr('class', 'grid').attr('transform','translate(0,20)').call(makeYLines().tickSize(-width).tickFormat(''))

// var tickValues = axisMonth.map( function(t) { return t.value; });
// console.log(tickValues);

// var xScale = d3.scaleLinear()
//         .domain([axisMonth[0], axisMonth[axisMonth.length - 1]])
//         .range([margin.left, width]);
  
var xAxis = d3.axisBottom(xScale).tickSize(5)
        .tickPadding(5)
        // .tickValues(axisMonth)
        .tickFormat(function(date){
             return d3.timeFormat('%b %Y')(date)
        });
  
svg.append("g").attr("class", "x axis").attr('transform','translate(0,630)').call(xAxis)

       // DIV FOR TOOLTIP
       var div = d3.select("body").append("div").attr("id", "tooltip").style('visibility','hidden');

      // ROUNDS_AIC
      var rounds_aic = svg.selectAll(".bar_aic").data(data).enter().append("circle").attr("class", "bar_aic")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+height/8; })
                     .attr('r', function(d) { return d.AIC_can*6; }).attr('fill', '#d75b68')
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('AIC : '+ d.month +' '+ d.year +': '+ d.AIC_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
   
     // ROUNDS_JAI
      var rounds_jai = svg.selectAll(".bar_jai").data(data).enter().append("circle").attr("class", "bar_jai")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*2; })
                     .attr('r', function(d) { return d.JAI_can*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('JAI : '+ d.month +' '+ d.year +': '+ d.JAI_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    // ROUNDS_SEG
      var rounds_seg = svg.selectAll(".bar_seg").data(data).enter().append("circle").attr("class", "bar_seg")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*3; })
                     .attr('r', function(d) { return d.SEG_can*5; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('SEG : '+ d.month +' '+ d.year +': '+ d.SEG_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
   
   // ROUNDS_GOW
      var rounds_gow = svg.selectAll(".bar_gow").data(data).enter().append("circle").attr("class", "bar_gow")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*4; })
                     .attr('r', function(d) { return d.GOW_can*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('GOW : '+ d.month +' '+ d.year +': '+ d.GOW_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
    
    // ROUNDS_IGO
      var rounds_igo = svg.selectAll(".bar_igo").data(data).enter().append("circle").attr("class", "bar_igo")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*5; })
                     .attr('r', function(d) { return d.IGO_can*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('IGO : '+ d.month +' '+ d.year +': '+ d.IGO_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
                      
    // ROUNDS_IAD
      var rounds_iad = svg.selectAll(".bar_iad").data(data).enter().append("circle").attr("class", "bar_iad")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*6; })
                     .attr('r', function(d) { return d.IAD_can*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('IAD : '+ d.month +' '+ d.year +': '+ d.IAD_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    // ROUNDS_VTI
      var rounds_vti = svg.selectAll(".bar_vti").data(data).enter().append("circle").attr("class", "bar_vti")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*7; })
                     .attr('r', function(d) { return d.VTI_can*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('VTI : '+ d.month +' '+ d.year +': '+ d.VTI_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    // ROUNDS_TRJ
      var rounds_trj = svg.selectAll(".bar_trj").data(data).enter().append("circle").attr("class", "bar_trj")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return 20+(height/8.5)*8; })
                     .attr('r', function(d) { return d.TRJ_can*5; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : VISIBLE
                            document.getElementById("tooltip").style.visibility='visible';

                            // TOOLTIP : TRANSTITION, OPACITY
                            div.transition().duration(200).style("opacity", 1);

                            // TOOLTIP : CONTENT
                            div.html('TRJ : '+ d.month +' '+ d.year +': '+ d.TRJ_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
    
    
 //---------------------- sidebar highloghts------------------------
//  AIC - Air India
// JAI - Jet Airways
// SEG - SpiceJet
// GOW - GoAir
// IGO - Indigo
// IAD - AirAsia
// VTI - Vistara
// TRJ - TruJet

 // AIC - Air India
 d3.select('#air-india-tab').on('click', (data)=>{
     console.log('Air India selected');
     rounds_aic.attr('fill','#d75b68').attr("stroke", 'none');
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 // JAI - Jet Airways BF98FF
  d3.select('#jet-airways-tab').on('click', (data)=>{
     console.log('Jet Airways selected');
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','#BF98FF').attr("stroke", 'none');
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 // SEG - SpiceJet 93A7FA
  d3.select('#spicejet-tab').on('click', (data)=>{
     console.log("SpiceJet selected");
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','#93A7FA').attr("stroke", 'none');
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 //GOW - GoAir 6CB9AA
  d3.select('#go-air-tab').on('click', (data)=>{
     console.log("GoAir selected");
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','#6CB9AA').attr("stroke", 'none');
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 //IGO - Indigo FF5388
  d3.select('#indigo-tab').on('click', (data)=>{
     console.log("Indigo selected");
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','#FF5388').attr("stroke", 'none');
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 //IAD - AirAsia D1A556
  d3.select('#air-asia-tab').on('click', (data)=>{
     console.log("AirAsia selected");
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','#D1A556').attr("stroke", 'none');
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 // VTI - Vistara A5D672
  d3.select('#vistara-tab').on('click', (data)=>{
     console.log("Vistara selected");
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','#A5D672').attr("stroke", 'none');
     rounds_trj.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
 });
 
 // TRJ - TruJet 92D2F7
  d3.select('#trujet-tab').on('click', (data)=>{
     console.log("TruJet selected");
     rounds_aic.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_jai.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_seg.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_gow.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_igo.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_iad.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
     rounds_vti.attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.5);
     rounds_trj.attr('fill','#92D2F7').attr("stroke", 'none');
 });
});  


// var chart = c3.generate({
//     data: {
//         x: 'x',
//         columns: [
//             ['x', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             ['sample', 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
//         ]
//     },
//     axis: {
//         x: {
//             type: 'category',
//             categories:  ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         }
//     }
// });

