
// ACCESS TO ELECTRICITY : // 2012: #ffe168, 2013: #fbcb43, 2014: #f4b400, 2015: #eca403, 2016: #e49307
// POPULATION : // 2012: #94d8e8, 2013: #4dbfd9, 2014: #11a9cc, 2015: #15a0d9, 2016: #1c91d0
// NET MIGRATION: // F2A181, EE8D71, EC735C, EE6B56, EC5750  



function plot(country){

document.getElementById("overlay").style.visibility = "visible";
    //   document.getElementById('linePlot').style.visibility = "hidden";

      
 var ruEngData = [];
 var ruPopData = [];
 
 var urEngData = [];
 var urPopData = [];
 
 var migData = [];
 var popGapData = [];
 
 var countryName;
 
 
 d3.json('data/allENERGYData.json').then((eng) => {
     d3.json('data/allPOPData1.json').then((pop) => {
         d3.json('data/all_MigData.json').then((mig) => {
     

    //   console.log(mig) ; 
     
     for(var i=0;i<eng.length;i++){
        if (eng[i].countryCode === country){
            
            // % ENERGY ACCESS RURAL DATA
            if(eng[i].eleRural2012==='NA'){eng[i].eleRural2012=0;}ruEngData.push(eng[i].eleRural2012); 
            if(eng[i].eleRural2013==='NA'){eng[i].eleRural2013=0;}ruEngData.push(eng[i].eleRural2013);
            if(eng[i].eleRural2014==='NA'){eng[i].eleRural2014=0;}ruEngData.push(eng[i].eleRural2014);
            if(eng[i].eleRural2015==='NA'){eng[i].eleRural2015=0;}ruEngData.push(eng[i].eleRural2015);
            if(eng[i].eleRural2016==='NA'){eng[i].eleRural2016=0;}ruEngData.push(eng[i].eleRural2016);
            
            // % POPULATION RURAL DATA
            if(pop[i].ppru2012==='NA'){pop[i].ppru2012=0;}ruPopData.push(pop[i].ppru2012);
            if(pop[i].ppru2013==='NA'){pop[i].ppru2013=0;}ruPopData.push(pop[i].ppru2013);
            if(pop[i].ppru2014==='NA'){pop[i].ppru2014=0;}ruPopData.push(pop[i].ppru2014);
            if(pop[i].ppru2015==='NA'){pop[i].ppru2015=0;}ruPopData.push(pop[i].ppru2015);
            if(pop[i].ppru2016==='NA'){pop[i].ppru2016=0;}ruPopData.push(pop[i].ppru2016);
           
           
            // % ENERGY ACCESS URBAN DATA
            if(eng[i].eleUrban2012==='NA'){eng[i].eleUrban2012=0;}urEngData.push(eng[i].eleUrban2012);
            if(eng[i].eleUrban2013==='NA'){eng[i].eleUrban2013=0;}urEngData.push(eng[i].eleUrban2013);
            if(eng[i].eleUrban2014==='NA'){eng[i].eleUrban2014=0;}urEngData.push(eng[i].eleUrban2014);
            if(eng[i].eleUrban2015==='NA'){eng[i].eleUrban2015=0;}urEngData.push(eng[i].eleUrban2015);
            if(eng[i].eleUrban2016==='NA'){eng[i].eleUrban2016=0;}urEngData.push(eng[i].eleUrban2016); 
            
            // % POPULATION URBAN DATA
            if(pop[i].ppur2012==='NA'){pop[i].ppur2012=0;}urPopData.push(pop[i].ppur2012);
            if(pop[i].ppur2013==='NA'){pop[i].ppur2013=0;}urPopData.push(pop[i].ppur2013);
            if(pop[i].ppur2014==='NA'){pop[i].ppur2014=0;}urPopData.push(pop[i].ppur2014);
            if(pop[i].ppur2015==='NA'){pop[i].ppur2015=0;}urPopData.push(pop[i].ppur2015);
            if(pop[i].ppur2016==='NA'){pop[i].ppur2016=0;}urPopData.push(pop[i].ppur2016);
           
            countryName = eng[i].countryName;
            
            // % NET MIGRATION
            if(mig[i].mig2012==='NA'){mig[i].mig2012=0;}migData.push(mig[i].mig2012*10);
            if(mig[i].mig2013==='NA'){mig[i].mig2013=0;}migData.push(mig[i].mig2013*10);
            if(mig[i].mig2014==='NA'){mig[i].mig2014=0;}migData.push(mig[i].mig2014*10);
            if(mig[i].mig2015==='NA'){mig[i].mig2015=0;}migData.push(mig[i].mig2015*10);
            if(mig[i].mig2016==='NA'){mig[i].mig2016=0;}migData.push(mig[i].mig2016*10); 
            
            // % POPULATION GAP
            if(pop[i].ppur2012==='NA'){pop[i].ppur2012=0;} if(pop[i].ppru2012==='NA'){pop[i].ppru2012=0;} var num1 = (pop[i].ppur2012 - pop[i].ppru2012); if(num1<0)num1=-1*num1; popGapData.push(num1);
            if(pop[i].ppur2013==='NA'){pop[i].ppur2013=0;} if(pop[i].ppru2012==='NA'){pop[i].ppru2013=0;} var num1 = (pop[i].ppur2013 - pop[i].ppru2013); if(num1<0)num1=-1*num1; popGapData.push(num1);
            if(pop[i].ppur2014==='NA'){pop[i].ppur2014=0;} if(pop[i].ppru2012==='NA'){pop[i].ppru2014=0;} var num1 = (pop[i].ppur2014 - pop[i].ppru2014); if(num1<0)num1=-1*num1; popGapData.push(num1);
            if(pop[i].ppur2015==='NA'){pop[i].ppur2015=0;} if(pop[i].ppru2012==='NA'){pop[i].ppru2015=0;} var num1 = (pop[i].ppur2015 - pop[i].ppru2015); if(num1<0)num1=-1*num1; popGapData.push(num1);
            if(pop[i].ppur2016==='NA'){pop[i].ppur2016=0;} if(pop[i].ppru2012==='NA'){pop[i].ppru2016=0;} var num1 = (pop[i].ppur2016 - pop[i].ppru2016); if(num1<0)num1=-1*num1; popGapData.push(num1);
            
            
        }
     }
    


     //plotAxis1(eng);
    //  plotAxis(urEngData, urPopData, ruEngData, ruPopData, countryName, migData, popGapData);
     
     // AREA
     areaPlot(urEngData, urPopData, ruEngData, ruPopData, countryName, migData, popGapData);
    //plotAxis1(ruEngData, ruPopData, countryName);
});
});
});


// function plotAxis(eng12, eng13, eng14, eng15, eng16){
function plotAxis(inUrEngData, inUrPopData, inRuEngData, inRuPopData, name, inMigData, inPopGapData){
    

// NUMBER OF DIVISIONS
 var dataXpts= 5; var dataYpts= 100;
 
// SCALE (VALUE OF 1 DIVISION)
var xScale = d3.scaleLinear().domain([0, dataXpts]).range([0, 500]);
var yScale = d3.scaleLinear().domain([0,dataYpts]).range([200,0]);

// SET VALUES FOR LINE GENERATION FOR GRAPH

var line = d3.line()
    .x(function(d, i) { return xScale(i); }) .y(function(d) { return yScale(d.y); })
    .curve(d3.curveMonotoneX)
    
    
// ALL DATASETS
var urEngData = d3.range(dataXpts).map(function(d,i) { return {"y": inUrEngData[i] } });
var urPopData = d3.range(dataXpts).map(function(d,i) { return {"y": inUrPopData[i] } });
var ruEngData = d3.range(dataXpts).map(function(d,i) { return {"y": inRuEngData[i] } });
var ruPopData = d3.range(dataXpts).map(function(d,i) { return {"y": inRuPopData[i] } });

var migData = d3.range(dataXpts).map(function(d,i) { return {"y": inMigData[i] } });
var popGapData = d3.range(dataXpts).map(function(d,i) { return {"y": inPopGapData[i] } });




var svg3 = d3.select("#overlay").append("svg").attr('id','linePlot')                              
    .attr("width", window.innerWidth/2).attr("height", '1500px')
    .attr("transform","translate(" + (window.innerWidth/2)+ ",0)").append("g")
    
    
    let overlay = svg3.append('g').attr('id', 'overlay')
                  .append('rect').attr("x", 0).attr('y', 0)
                  .attr('width', window.innerWidth/2).attr('height', '1500px')
                  .style('fill','#1D1E20')


    // TITLE OVERLAY
    svg3.append('text').attr('id','label3')
      .attr('x','12%').attr('y','60')
      .text('TRENDS IN ACCESS TO ELECTRICITY, NET MIGRATION RATE & POPULATION DISTRIBUTION').attr('fill','#efefef')
      .style("font-size", "18px").style("font-family", "Lato")
      
      
    // VIEW ALL LINK   
    svg3.append('a').attr("xlink:href", "https://htmlpreview.github.io/?https://github.com/aaditirokade/major_studio_1/blob/master/finalProject/page3index.html")
      .append('text').attr('x','600').attr('y','70').text('VIEW ALL').attr('fill','#efefef')
      .style('font-weight','bold').style('text-decoration','underline').style("font-size", "12px").style("font-family", "Lato")
      

    // COUNTRY NAME
   svg3.append('text').attr('x','320').attr('y','100')
      .text(name).attr('fill','white').attr('stroke','white')
      .style("font-size", "18px").style("font-family", "lato")
      
   // PLOT1 NAME : URBAN
   svg3.append('text').attr('x','160').attr('y','150').text('URBAN').attr('fill','white')
      .style("font-size", "12px").style("font-family", "lato")
      
      
    //   var urbanButton3 = d3.select('#overlay').append('button').attr('id','urbtn3').text('URBAN')
    //     urbanButton3.on('click', function() { console.log('here here'); })
    //     var ruralButton3 = d3.select('#overlay').append('button').attr('id','rubtn3').text('RURAL')
    //     ruralButton3.on('click', function() { console.log('here here'); })
    
    // X-AXIS
    // svg3.append("g")
    //     .attr("class", "x axis")
    //     //.attr("transform", "translate(0," + height + ")")
    //     .attr("transform", "translate(120," + (height+180)+ ")")
    //     .call(d3.axisBottom(xScale))
    //     .attr('fill','white').attr('color','#191a1a');


// *********** CHART1 *************
// X-AXIS
svg3.append('line').attr('x1',160).attr('y1',370).attr('x2',565).attr('y2',370)
    .attr('fill','white').attr('stroke','white')
    
// DASHED LINES
var dashed = svg3.append('g').attr('class','dashed'); 
dashed.append('line').attr('x1',160).attr('y1',370-40).attr('x2','565').attr('y2',370-40);
dashed.append('line').attr('x1',160).attr('y1',370-80).attr('x2','565').attr('y2',370-80);
dashed.append('line').attr('x1',160).attr('y1',370-120).attr('x2','565').attr('y2',370-120);
dashed.append('line').attr('x1',160).attr('y1',370-160).attr('x2','565').attr('y2',370-160);
dashed.append('line').attr('x1',160).attr('y1',370-200).attr('x2','565').attr('y2',370-200);
    
// X-AXIS LABELS 
var xlabels = svg3.append('g').attr('class','xlabels'); 
xlabels.append('text').attr('x','140').attr('y','400').text('2012'); 
xlabels.append('text').attr('x','240').attr('y','400').text('2013'); 
xlabels.append('text').attr('x','340').attr('y','400').text('2014'); 
xlabels.append('text').attr('x','440').attr('y','400').text('2015'); 
xlabels.append('text').attr('x','540').attr('y','400').text('2016');
    
    
// Y-AXIS
svg3.append("g").attr("class", "yAxis").attr("transform", "translate(160,170)")
    .call(d3.axisLeft(yScale)).attr('color','white');


// PATHS
// ***LINE GENERATOR : the shape of an SVG Path element is defined by one attribute: d
svg3.append("path").datum(urEngData).attr("class", "line1").attr("d", line).attr("transform", "translate(160,170)").style('stroke-width','2px');
svg3.append("path").datum(urPopData).attr("class", "line2").attr("d", line).attr("transform", "translate(160,170)").style('stroke-width','2px');

// // AREA

// var area = svg3.area()
//     .x(function(d) { return x(d.x); })
//     .y0(height)
//     .y1(function(d) { return y(d.y); });

// ENG DATAPOINT CIRCLES
svg3.selectAll(".dot").data(urEngData).enter().append("circle").attr("class", "dot")
    .attr("cx", function(d, i) { return xScale(i) }).attr("cy", function(d,i) { return yScale(d.y) })
    .attr("r", 3).attr("transform", "translate(160,170)")
    .on("mouseover", function(a, b, c){ })
    .on("mouseout", function() {  });

// POP DATAPOINT CIRCLES
svg3.selectAll(".dot2").data(urPopData).enter().append("circle").attr("class", "dot2")
    .attr("cx", function(d, i) { return xScale(i) }).attr("cy", function(d,i) { return yScale(d.y) })
    .attr("r", 3).attr("transform", "translate(160,170)")
    .on("mouseover", function(a, b, c){ })
	.on("mouseout", function(){  });
	   
 
 

 
 
// *********** CHART 2 *************
 var diff = 300;

// PLOT2 NAME : URBAN
svg3.append('text').attr('x',160).attr('y',150+diff).text('RURAL').attr('fill','white')
      .style("font-size", "12px").style("font-family", "lato")

// X-AXIS
svg3.append('line').attr('x1',160).attr('y1',370+diff).attr('x2',565).attr('y2',370+diff)
    .attr('fill','white').attr('stroke','white')

// DASHED LINES
var dashed2 = svg3.append('g').attr('class','dashed2'); 
dashed2.append('line').attr('x1',160).attr('y1',370-40+diff).attr('x2','565').attr('y2',370-40+diff);
dashed2.append('line').attr('x1',160).attr('y1',370-80+diff).attr('x2','565').attr('y2',370-80+diff);
dashed2.append('line').attr('x1',160).attr('y1',370-120+diff).attr('x2','565').attr('y2',370-120+diff);
dashed2.append('line').attr('x1',160).attr('y1',370-160+diff).attr('x2','565').attr('y2',370-160+diff);
dashed2.append('line').attr('x1',160).attr('y1',370-200+diff).attr('x2','565').attr('y2',370-200+diff);

// X-AXIS LABELS 
var xlabels = svg3.append('g').attr('class','xlabels'); 
xlabels.append('text').attr('x','140').attr('y',400+diff).text('2012'); xlabels.append('text').attr('x','240').attr('y',400+diff).text('2013'); 
xlabels.append('text').attr('x','340').attr('y',400+diff).text('2014'); xlabels.append('text').attr('x','440').attr('y',400+diff).text('2015'); 
xlabels.append('text').attr('x','540').attr('y',400+diff).text('2016');

// // GDP SVG

// svg3.append('svg:image').attr("xlink:href", "same.svg").attr("x", 183).attr("y", 90+diff).attr('width',10)
// svg3.append('svg:image').attr("xlink:href", "down.svg").attr("x", 283).attr("y", 90+diff).attr('width',15)
// svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", 383).attr("y", 90+diff).attr('width',15)
// svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", 483).attr("y", 90+diff).attr('width',15)
// svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", 583).attr("y", 90+diff).attr('width',15)

// Y-AXIS
svg3.append("g").attr("class", "yAxis").attr("transform", `translate(160,${170+diff})`)
    .call(d3.axisLeft(yScale)).attr('color','white');
    
// PATHS
// ***LINE GENERATOR : the shape of an SVG Path element is defined by one attribute: d
svg3.append("path").datum(ruEngData).attr("class", "line1").attr("d", line).attr("transform",`translate(160,${170+diff})`).style('stroke-width','2px');
svg3.append("path").datum(ruPopData).attr("class", "line2").attr("d", line).attr("transform",`translate(160,${170+diff})`).style('stroke-width','2px');


// ENG DATAPOINT CIRCLES
svg3.selectAll(".dot3").data(ruEngData).enter().append("circle").attr("class", "dot3")
    .attr("cx", function(d, i) { return xScale(i) }).attr("cy", function(d,i) { return yScale(d.y) })
    .attr("r", 3).attr("transform",`translate(160,${170+diff})`)
    .on("mouseover", function(a, b, c){ })
    .on("mouseout", function() {  });

// POP DATAPOINT CIRCLES
svg3.selectAll(".dot4").data(ruPopData).enter().append("circle").attr("class", "dot4")
    .attr("cx", function(d, i) { return xScale(i) }).attr("cy", function(d,i) { return yScale(d.y) })
    .attr("r", 3).attr("transform",`translate(160,${170+diff})`)
    .on("mouseover", function(a, b, c){  })
	.on("mouseout", function(){  });




// var svgContainer =svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", "60").attr("y", "60").attr('width',15)


// svgContainer.attr('transform',function(){
//                 var me = svgContainer.node()
//                 var x1 = me.getBBox().x + me.getBBox().width/2;//the center x about which you want to rotate
//                 var y1 = me.getBBox().y + me.getBBox().height/2;//the center y about which you want to rotate

//                 return `rotate(180, ${x1}, ${y1})`;//rotate 180 degrees about x and y
//             }); 



// *********** CHART 3 *************
 var diff = 660;

// PLOT2 NAME : URBAN
svg3.append('text').attr('x',160).attr('y',150+diff).text('NET MIGRATION, POPULATION GAP & %ACCESS TO ELECTRICITY').attr('fill','white')
      .style("font-size", "12px").style("font-family", 'Lato')

// X-AXIS
svg3.append('line').attr('x1',160).attr('y1',370+diff).attr('x2',565).attr('y2',370+diff)
    .attr('fill','white').attr('stroke','white')

// DASHED LINES
var dashed3 = svg3.append('g').attr('class','dashed2'); 
dashed3.append('line').attr('x1',160).attr('y1',370-40+diff).attr('x2','565').attr('y2',370-40+diff);
dashed3.append('line').attr('x1',160).attr('y1',370-80+diff).attr('x2','565').attr('y2',370-80+diff);
dashed3.append('line').attr('x1',160).attr('y1',370-120+diff).attr('x2','565').attr('y2',370-120+diff);
dashed3.append('line').attr('x1',160).attr('y1',370-160+diff).attr('x2','565').attr('y2',370-160+diff);
dashed3.append('line').attr('x1',160).attr('y1',370-200+diff).attr('x2','565').attr('y2',370-200+diff);

// X-AXIS LABELS 
var xlabels3 = svg3.append('g').attr('class','xlabels'); 
xlabels3.append('text').attr('x','140').attr('y',400+diff).text('2012'); 
xlabels3.append('text').attr('x','240').attr('y',400+diff).text('2013'); 
xlabels3.append('text').attr('x','340').attr('y',400+diff).text('2014'); 
xlabels3.append('text').attr('x','440').attr('y',400+diff).text('2015'); 
xlabels3.append('text').attr('x','540').attr('y',400+diff).text('2016');

// // GDP SVG

// svg3.append('svg:image').attr("xlink:href", "same.svg").attr("x", 183).attr("y", 90+diff).attr('width',10)
// svg3.append('svg:image').attr("xlink:href", "down.svg").attr("x", 283).attr("y", 90+diff).attr('width',15)
// svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", 383).attr("y", 90+diff).attr('width',15)
// svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", 483).attr("y", 90+diff).attr('width',15)
// svg3.append('svg:image').attr("xlink:href", "up.svg").attr("x", 583).attr("y", 90+diff).attr('width',15)

// Y-AXIS
svg3.append("g").attr("class", "yAxis").attr("transform", `translate(160,${170+diff})`)
    .call(d3.axisLeft(yScale)).attr('color','white');
    
// PATHS
// ***LINE GENERATOR : the shape of an SVG Path element is defined by one attribute: d
svg3.append("path").datum(migData).attr("class", "line3").attr("d", line).attr("transform",`translate(160,${170+diff})`).style('stroke-width','2px');
svg3.append("path").datum(popGapData).attr("class", "line2").attr("d", line).attr("transform",`translate(160,${170+diff})`).style('stroke-width','2px');
svg3.append("path").datum(ruEngData).attr("class", "line1").attr("d", line).attr("transform",`translate(160,${170+diff})`).style('stroke-width','2px');
svg3.append("path").datum(urEngData).attr("class", "line1").attr("d", line).attr("transform",`translate(160,${170+diff})`).style('stroke-width','2px');


// ENG DATAPOINT CIRCLES
svg3.selectAll(".dot3").data(migData).enter().append("circle").attr("class", "dot3")
    .attr("cx", function(d, i) { return xScale(i) }).attr("cy", function(d,i) { return yScale(d.y) })
    .attr("r", 3).attr("transform",`translate(160,${170+diff})`)
    .on("mouseover", function(a, b, c){})
    .on("mouseout", function() {  });

// POP DATAPOINT CIRCLES
svg3.selectAll(".dot4").data(popGapData).enter().append("circle").attr("class", "dot4")
    .attr("cx", function(d, i) { return xScale(i) }).attr("cy", function(d,i) { return yScale(d.y) })
    .attr("r", 3).attr("transform",`translate(160,${170+diff})`)
    .on("mouseover", function(a, b, c){  })
	.on("mouseout", function(){  });
    }

  }
  
 
  
// ******** AREA PLOT ************

  function areaPlot(inUrEngData, inUrPopData, inRuEngData, inRuPopData, name, inMigData, inPopGapData){
      
      
      // HIDE LINEPLOT , SHOW AREA PLOT
      //document.getElementById('area').style.visibility = "hidden";
    //   document.getElementById('linePlot').style.visibility = "hidden";
    
    d3.selectAll('g').remove();
      
      
      // ******** URBAN ************
      

                // NO. OF DIVISIONS & DATA
                var dataXpts= 5; var dataYpts= 100;    
                var data = d3.range(dataXpts).map(function(d,i) { return {"y": inUrEngData[i], "x": 2012+i } });   
                var data11 = d3.range(dataXpts).map(function(d,i) { return {"y": inUrPopData[i], "x": 2012+i } });
              
                // MARGIN
                const margin = 10; const width = 450-2*margin; const height = 200-2*margin;
                
                // SCALES
                const xScale = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data, function(d) { return d.x; })]);
                const xScale11 = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data11, function(d) { return d.x; })]);

                
                const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);
               
                // TICK VALUES, FORMAT
                var formatxAxis = d3.format('.0f');
                var xAxis = d3.axisBottom(xScale).tickValues([2012,2013,2014,2015,2016]).tickFormat(formatxAxis);
                var yAxis = d3.axisLeft(yScale).tickValues([0,10,20,30,40,50,60,70,80,90,100]).tickFormat(formatxAxis);
                
                // AREA
                var area = d3.area() .x(function(d){ return xScale(d.x); }).y0(height).y1(function(d) { return yScale(d.y); });
                var area11 = d3.area() .x(function(d){ return xScale11(d.x); }).y0(height).y1(function(d) { return yScale(d.y); });

                // SVG
                var svg =  d3.select("#overlay").append("svg").attr('id','areasvg')
                    .attr("width", window.innerWidth/2).attr("height", '1000px')
                    .attr("transform","translate(" + (window.innerWidth/2)+ ",0)")
                    
                    
                // TITLE OVERLAY
                svg.append('text').attr('id','label3')
                  .attr('x','7%').attr('y','50')
                  .text('TRENDS IN ACCESS TO ELECTRICITY, NET MIGRATION RATE & POPULATION DISTRIBUTION').attr('fill','#efefef')
                  .style("font-size", "12px").style("font-family", "Lato")
      
      
                // VIEW ALL LINK   
                svg.append('g').append('a').attr("xlink:href", "https://htmlpreview.github.io/?https://github.com/aaditirokade/major_studio_1/blob/master/finalProject/page3index.html")
                  .append('text').attr('x','600').attr('y','80').text('VIEW ALL').attr('fill','#efefef')
                  .style('font-weight','bold').style('text-decoration','underline').style("font-size", "10px").style("font-family", "Lato")
      

                // COUNTRY NAME
               svg.append('g').attr('id', 'countryName').append('text').attr('x','300').attr('y','100')
                  .text(name).attr('fill','#efefef').style("font-size", "16px").style('text-align','center')
                    
                
                var yh = 150;
                
                // CHART CONTAINER
                var chart = svg.append('g').attr('id','chart').attr("transform","translate(140,"+ yh +")")

                // GRIDS
                // chart.append('g').attr('class', 'grid').attr('transform', `translate(0, ${height})`).call(d3.axisBottom().scale(xScale).tickSize(-height, 0, 0).tickFormat(''))
                chart.append('g').attr('class', 'grid').call(d3.axisLeft().scale(yScale).tickSize(-width, 0, 0).tickFormat('')).attr('stroke','darkgray')
                
                // PATH
                chart.append("path").datum(data).attr("class", "area").attr("d", area).attr('stroke','#e49307');
                chart.append("path").datum(data11).attr("class", "area2").attr("d", area).attr('stroke','#1c91d0');

                // AXES
                chart.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
                chart.append("g").attr("class", "y axis").call(yAxis);
                 
                // AXES LABELS    
                svg.append('g').append('text').attr('class', 'label').attr('x', -(yh+70)).attr('y',100).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('% VALUE : URBAN')
                // svg.append('text').attr('class', 'label').attr('x',370).attr('y', 300).attr('text-anchor', 'middle').text('YEARS')
                  
                    
     
     // ******** RURAL ************
      
                var yhh = yh+300
                
                // NO. OF DIVISIONS & DATA
                var data2 = d3.range(dataXpts).map(function(d,i) { return {"y": inRuEngData[i], "x": 2012+i } }); 
                var data21 = d3.range(dataXpts).map(function(d,i) { return {"y": inRuPopData[i], "x": 2012+i } });
                
                // SCALES
                const xScale2 = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data2, function(d) { return d.x; })]);
                const xScale21 = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data21, function(d) { return d.x; })]);

                
                // AREA
                var area2 = d3.area().x(function(d){ return xScale2(d.x); }).y0(height).y1(function(d) { return yScale(d.y); });
                var area21 = d3.area().x(function(d){ return xScale21(d.x); }).y0(height).y1(function(d) { return yScale(d.y); });

               // CHART CONTAINER
                var chart2 = svg.append('g').attr('id','chart2').attr("transform","translate(140,"+ yhh +")")
                
                // GRIDS
                // chart.append('g').attr('class', 'grid').attr('transform', `translate(0, ${height})`).call(d3.axisBottom().scale(xScale).tickSize(-height, 0, 0).tickFormat(''))
                chart2.append('g').attr('class', 'grid').call(d3.axisLeft().scale(yScale).tickSize(-width, 0, 0).tickFormat('')).attr('stroke','darkgray')
                
                // PATH
                chart2.append("path").datum(data2).attr("class", "area").attr("d", area).attr('stroke','#e49307');
                chart2.append("path").datum(data21).attr("class", "area2").attr("d", area).attr('stroke','#1c91d0');

                // AXES
                chart2.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
                chart2.append("g").attr("class", "y axis").call(yAxis);
                 
                // AXES LABELS    
                svg.append('g').append('text').attr('class', 'label').attr('x', -(yhh+70)).attr('y',100).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('% VALUE : RURAL')
                // svg.append('text').attr('class', 'label').attr('x',370).attr('y', 300).attr('text-anchor', 'middle').text('YEARS')                   
                

// ******** GAP IN ACCESS TO ELECTRICITY, POPULATION DISTRIBUTION, NET MIGRATION RATE ************

                var yhhh = yhh +300;
      
                var diffEng =[];
                var diffPop =[];
                
                
                for(i=0;i<inUrEngData.length;i++){
                    diffEng.push(inUrEngData[i]-inRuEngData[i]);
                    diffPop.push(inUrPopData[i]-inRuPopData[i]);
                }
                // console.log(inRuPopData); console.log(inPopGapData);
                
                // NO. OF DIVISIONS & DATA
                var data3 = d3.range(dataXpts).map(function(d,i) { return {"y": diffEng[i], "x": 2012+i } }); 
                var data31 = d3.range(dataXpts).map(function(d,i) { return {"y": inPopGapData[i], "x": 2012+i } });
                var data32 = d3.range(dataXpts).map(function(d,i) { return {"y": inMigData[i], "x": 2012+i } });

                
                // SCALES
                const xScale3 = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data3, function(d) { return d.x; })]);
                const xScale31 = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data31, function(d) { return d.x; })]);
                const xScale32 = d3.scaleLinear().range([0, width]).domain([2012, d3.max(data32, function(d) { return d.x; })]);

                var xAxis1 = d3.axisBottom(xScale).tickValues([0,2013,2014,2015,2016]).tickFormat(formatxAxis);

                const yScale3 = d3.scaleLinear().range([-height,0]).domain([0, -100]);
                var yAxis3 = d3.axisLeft(yScale3).tickValues([-100,-90 ,-80, -70,-60,-50,-40,-30,-20,-10 ,0]).tickFormat(formatxAxis);

                
                // AREA
                var area31 = d3.area().x(function(d){ return xScale31(d.x); }).y0(height).y1(function(d) { return yScale(d.y); });
                var area3 = d3.area().x(function(d){ return xScale3(d.x); }).y0(height).y1(function(d) { return yScale(d.y); });
                var area32 = d3.area().x(function(d){ return xScale32(d.x); }).y0(height).y1(function(d) { return yScale3(d.y); });


               // CHART CONTAINER
                var chart3 = svg.append('g').attr('id','chart3').attr("transform","translate(140,"+ yhhh +")")
                
                // GRIDS
                // chart.append('g').attr('class', 'grid').attr('transform', `translate(0, ${height})`).call(d3.axisBottom().scale(xScale).tickSize(-height, 0, 0).tickFormat(''))
                chart3.append('g').attr('class', 'grid').call(d3.axisLeft().scale(yScale).tickSize(-width, 0, 0).tickFormat('')).attr('stroke','darkgray')
                chart3.append('g').attr('class', 'grid').call(d3.axisLeft().scale(yScale3).tickSize(-width, 0, 0).tickFormat('')).attr('stroke','darkgray').attr("transform","translate(0,360)")
               
 
                // PATH
                chart3.append("path").datum(data31).attr("class", "area2").attr("d", area).attr('stroke','#1c91d0');
                chart3.append("path").datum(data3).attr("class", "area").attr("d", area).attr('stroke','#e49307');
                chart3.append("path").datum(data32).attr("class", "area3").attr("d", area).attr('stroke','#EC5750');


                // AXES
                chart3.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis1);
                chart3.append("g").attr("class", "y axis").call(yAxis);
                chart3.append("g").attr("class", "y axis").call(yAxis3).attr("transform","translate(0,360)");

                 
                // AXES LABELS    
                svg.append('g').append('text').attr('class', 'label').attr('x',-(yhhh+120)).attr('y',100).attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('% GAP, NET MIGRATION')

                // MAX-MIN VALUES
                
                // ACCESS TO ELECTRICITY : URBAN
                var maxUrEngData = Math.max(...inUrEngData); var minUrEngData = Math.min(...inUrEngData);
                var maxUrEngYear = yearr(maxUrEngData, inUrEngData); var minUrEngYear = yearr(minUrEngData, inUrEngData);
                
                // ACCESS TO ELECTRICITY : RURAL
                var maxRuEngData = Math.max(...inRuEngData); var minRuEngData = Math.min(...inRuEngData);     
                var maxRuEngYear = yearr(maxRuEngData, inRuEngData); var minRuEngYear = yearr(minRuEngData, inRuEngData);
                
                // POPULATION : RURAL
                var maxRuPopData = Math.max(...inRuPopData); var minRuPopData = Math.min(...inRuPopData);     
                var maxRuPopYear = yearr(maxRuPopData, inRuPopData); var minRuPopYear = yearr(minRuPopData, inRuPopData);
                
                // POPULATION : URBAN
                var maxUrPopData = Math.max(...inUrPopData); var minUrPopData = Math.min(...inUrPopData);     
                var maxUrPopYear = yearr(maxUrPopData, inUrPopData); var minUrPopYear = yearr(minUrPopData, inUrPopData);
                           
               // NET MIGRATION
               var maxMigData = Math.max(...inMigData); var minMigData = Math.min(...inMigData);
               var maxMigYear = yearr(maxMigData, inMigData); var minMigYear = yearr(minMigData, inMigData);

                
               // SUMMARY TEXT
               
               var sumy=1150;
               var sumx = 140;
               
            //   svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy).text('SUMMARY').attr('fill','#cecece').style('font-size','14px')
               
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+75).text('URBAN').attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx+300).attr('y',sumy+75).text('RURAL').attr('fill','#cecece').style('font-size','14px')
               
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+40).text('% ACCESS TO ELECTRICITY').attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+110).text('MAX:  '+ maxUrEngData.toFixed(2) +' in '+ maxUrEngYear).attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+135).text('MIN:  '+ minUrEngData.toFixed(2) +' in '+ minUrEngYear).attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx+300).attr('y',sumy+110).text('MAX:  '+ maxRuEngData.toFixed(2) +' in '+ maxRuEngYear).attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx+300).attr('y',sumy+135).text('MIN:  '+ minRuEngData.toFixed(2) +' in '+ minRuEngYear).attr('fill','#cecece').style('font-size','14px')

               
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+200).text('% POPULATION').attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+235).text('MAX:  '+ maxUrPopData.toFixed(2) +' in '+ maxUrPopYear).attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx).attr('y',sumy+265).text('MIN:  '+ minUrPopData.toFixed(2) +' in '+ minUrPopYear).attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx+300).attr('y',sumy+235).text('MAX:  '+ maxRuPopData.toFixed(2) +' in '+ maxRuPopYear).attr('fill','#cecece').style('font-size','14px')
               svg.append('g').append('text').attr('class', 'sum').attr('x', sumx+300).attr('y',sumy+265).text('MIN:  '+ minRuPopData.toFixed(2) +' in '+ minRuPopYear).attr('fill','#cecece').style('font-size','14px')


                
}
  
  
  // YEAR based on index
  function yearr(inValue, inArray){
      var indx = inArray.indexOf(inValue);
      if(indx===0)return '2012';else if(indx===1)return '2013';else if(indx===2)return '2014';
      else if(indx===3)return '2015';else if(indx===4)return '2016';
  }
