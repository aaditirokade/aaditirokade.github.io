
//Global Variables
var svg_temp, boxwidth, canScale, tempScale, comScale, rainScale, comRateScale, svg_rain, svg_pie, div_temp;

// //------------------------- DIV for TOOLTIP ------------------------
var div_main = d3.select('body').append('div').attr('class', 'tooltip').attr('id','tooltip')
.style('background','none').style('color','#efefef').style('text-align','left').style('font-weight','normal');



d3.json('./data/thesis_data.json').then((pie_data) => {
d3.json('./new/thesis_data1.json').then((data) => {
    
    
    //------------------------------- SCALES ------------------------------------
    // Cancellations scale
    var minCan = d3.min(data, function(d) { return d.overall_can_rate; });
    var maxCan = d3.max(data, function(d) { return d.overall_can_rate; });
    // canScale = d3.scaleLinear().domain([0.33, 6.99]).range([ 0,250]);
    // canScale = d3.scaleLinear().domain([minCan, maxCan]).range([ 0,250]);
    canScale = d3.scaleLinear().domain([10, 0]).range([ 0,200]);
    console.log(minCan); console.log(maxCan);

    
    // Temperature scale
    var minTemp = d3.min(data, function(d) { return d.avg_temp; });
    var maxTemp = d3.max(data, function(d) { return d.avg_temp; });
    // tempScale = d3.scaleLinear().domain([minTemp, maxTemp]).range(['#ffffff', '#FD7878']);
    tempScale = d3.scaleLinear().domain([minTemp, maxTemp]).range(['#1B1D2F', '#FD9494']); //FF9090 //FF9090 FD9494

    // Rainfall scale
    var minRain = d3.min(data, function(d) { return d.rainfall_actual; });
    var maxRain = d3.max(data, function(d) { return d.rainfall_actual; });
    // rainScale = d3.scaleLinear().domain([minRain, maxRain]).range(['#ffffff', '#00ADF8']);
    rainScale = d3.scaleLinear().domain([minRain, maxRain]).range(['#1B1D2F', '#88D7FA']); //#A1E0FB 00ADF8
    
    // Complaints (Number) scale
    var minCom = d3.min(data, function(d) { return d.com; });
    var maxCom = d3.max(data, function(d) { return d.com; });
    // comScale = d3.scaleLinear().domain([minCom, maxCom]).range([0, 250]);
    comScale = d3.scaleLinear().domain([2000, 0]).range([0, 200]);
    console.log(minCom); console.log(maxCom);
    
     // Complaints (Rate) scale
    var minComRate = d3.min(data, function(d) { return d.com_rate; });
    var maxComRate = d3.max(data, function(d) { return d.com_rate; });
    comRateScale = d3.scaleLinear().domain([minComRate, maxComRate]).range([0, 200]);
    
    // Labels
    var mylabe =[]
    for(i=14;i<19;i++){
        mylabe.push('jan'+i, 'feb'+i, 'mar'+i, 'apr'+i, 'may'+i,'jun'+i, 'jul'+i, 'aug'+i, 'sep'+i,'oct'+i, 'nov'+i, 'dec'+i);
    }

    
    // ------------------------------- SVGs ------------------------------------
    // TEMPERATURE svg container
    svg_temp = d3.select("#temp").append('svg').attr('width','100%').attr('height','200px');
    
    // //------------------------- DIV for TOOLTIP ------------------------
    // div_temp = svg_temp.append('div').attr('class', 'tooltip').attr('id','tempTooltip');
    
    // RAINFALL heatmap
    svg_rain = d3.select("#rain").append('svg').attr('width','100%').attr('height','200px');


    // Width of one container
    boxwidth = (parseInt(svg_temp.style('width')) - 20)/5;
    
    
    // Axis container
    var svg_labels = d3.select("#labe").append('svg').attr('width','100%').attr('height','40px')   
    
    // Build X scales and axis:
     var x = d3.scaleBand()
          .range([ 0, parseInt(svg_temp.style('width'))])
          .domain(mylabe)
          .padding(0.0001);
    
    // get axis
    var Xaxis = svg_labels.append("g")
          .attr("transform", "translate(0,-5)")
          .call(d3.axisBottom(x).tickSize(0))
          .call(g => g.select(".domain").remove())
    
    // append labels to axis      
    Xaxis.selectAll("text")	
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");
    
    for(i=0; i<5;i++)
       showYear(data, 2014+i, i);
       
       
       //---------------------------- pie chart ----------------------------------
            // SETUP Container 
             svg_pie = d3.select('#pie').append('svg').attr('width', '100%').attr('height','100%')
            
   
    });
});






    //---------------- Function to plot values ---------------------------
    function showYear(all_data, year, n){
        
         
         // Local-global variables
         var rainCan, tempCan, rainCom, tempCom;
        
        //--------- filter data per year--------------------
        var data = all_data.filter(d => {
            return d.year === year;
        });
        
        //-------------- Temperature heatmap--------------------
        // Temperature
        var box = svg_temp.append('g').attr("class", year)
                .attr('transform', `translate(${(boxwidth+5)*n})`)
        
        box.selectAll("rect").data(data).enter()
        .append("rect")
        .attr("x", (d,i)=>{
            return boxwidth/12*i;
        })
        .attr('y', '0%')
        .attr('width',boxwidth/12-1)
        .attr('height','100%')
        .style('fill',(d,i)=>{
            return tempScale(d.avg_temp);
        }).on('mouseover', (d)=>{
            
            // Pie chart
            makePie(d);
        })
        
        
        // -------------------- Rainfall Heatmap --------------------------
        var rainbox = svg_rain.append('g').attr("class", year)
                .attr('transform', `translate(${(boxwidth+5)*n})`)
        
        rainbox.selectAll("rect_rain").data(data).enter()
        .append("rect")
        .attr("x", (d,i)=>{
            return boxwidth/12*i;
        })
        .attr('y', '0%')
        .attr('width',boxwidth/12-1)
        .attr('height','100%')
        .style('fill',(d,i)=>{
            return rainScale(d.rainfall_actual);
        }).on('mouseover', (d)=>{
            
            // Pie chart
            makePie(d);
        })
        
        //--------------------------- Temp Can -----------------------------------
        
        createTempCan();
        
        setTimeout(function() {
            updateTempCan();
        },200);
        
        function createTempCan(){
               
                tempCan = box.selectAll("circle_tempCan").data(data).enter()
                .append("circle")
                .attr("cx", (d,i)=>{
                    return (boxwidth/12*i)+(boxwidth/24);
                })
                .attr('cy', (d,i)=>{
                    return canScale(0);
                })
                // .attr('r','3px')
                .attr('r',(d)=>{
                    if(d.year == '2014'&& d.month=='jan')return 0;
                    else if (d.year == '2014'&& d.month=='feb')return 0;
                    else if (d.year == '2014'&& d.month=='mar')return 0;
                    else if (d.year == '2014'&& d.month=='apr')return 0;
                    else if (d.year == '2014'&& d.month=='may')return 0;
                    else return 3;
                })
                .style('fill', '#efefef')
                .on('mouseover', (d)=>{
                    
                    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                    div_main.html('Temp: <br>'+ d.avg_temp +' °C <br><br> Can:<br> '+ d.overall_can_rate +
                    '%'+ '<br><br> Com:<br>'+d.com) 
                        //   .style("left", (d3.event.pageX) + "px")     
                        //   .style("top", (d3.event.pageY - 28) + "px");
                        .style('left','3%').style('bottom','52%').style('font-size', '14px').style('line-height','1.5')
                   
                })
                .on('mouseout',(d)=>{
                    div_main.style('visibility','hidden');
                });
        }
        
        
          
       function updateTempCan(){
            tempCan.transition().duration(400).attr('cy',(d,i)=>{
                return canScale(d.overall_can_rate);
            })
        }
        
        // -------------------------- Rain Can -----------------------------
        createRainCan();
        
        setTimeout(function() {
            updateRainCan();
        },200);
      
        
        function createRainCan(){
          // Rain_Cancellations
            rainCan = rainbox.selectAll("circle_rainCan").data(data).enter()
            .append("circle")
            .attr("cx", (d,i)=>{
                return (boxwidth/12*i)+(boxwidth/24);
            })
            .attr('cy', (d)=>{
                return canScale(0);
            })
            .attr('r',(d)=>{
                if(d.year == '2014'&& d.month=='jan')return 0;
                else if (d.year == '2014'&& d.month=='feb')return 0;
                else if (d.year == '2014'&& d.month=='mar')return 0;
                else if (d.year == '2014'&& d.month=='apr')return 0;
                else if (d.year == '2014'&& d.month=='may')return 0;
                else return 3;
            })
            .style('fill', '#efefef')
            .on('mouseover', (d)=>{
                    
                    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                    div_main.html('Rain: <br>'+ d.rainfall_actual.toFixed(2) +' mm <br><br> Can:<br> '+ d.overall_can_rate +
                    '%'+ '<br><br> Com:<br>'+d.com) 
                        //   .style("left", (d3.event.pageX) + "px")     
                        //   .style("top", (d3.event.pageY - 28) + "px");
                        .style('left','3%').style('bottom','24%').style('font-size', '14px').style('line-height','1.5')
                   
                })
                .on('mouseout',(d)=>{
                    div_main.style('visibility','hidden');
                });
        }
    
    
        function updateRainCan(){
            rainCan.transition().duration(400).attr('cy',(d,i)=>{
                return canScale(d.overall_can_rate);
            })
        }
    
    
    
        // ------------------------- Temp Com ---------------------------
        
        createTempCom();
        
        setTimeout(function() {
            updateTempCom();
        },800);
       
       function createTempCom(){
                tempCom = box.selectAll("circle_tempCom").data(data).enter()
                .append("circle")
                .attr("cx", (d,i)=>{
                    return (boxwidth/12*i)+(boxwidth/24);
                })
                .attr('cy', (d,i)=>{
                    return comScale(0);
                })
                .attr('r',(d)=>{
                    if(d.year == '2014'&& d.month=='jan')return 0;
                    else if (d.year == '2014'&& d.month=='feb')return 0;
                    else if (d.year == '2014'&& d.month=='mar')return 0;
                    else if (d.year == '2014'&& d.month=='apr')return 0;
                    else if (d.year == '2014'&& d.month=='may')return 0;
                    else return 3;
                }).attr('fill','none')
                .attr('stroke', '#efefef').style('stroke-width', '0.5px')
                .on('mouseover', (d)=>{
                    
                    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                    div_main.html('Temp: <br>'+ d.avg_temp +' °C <br><br> Can:<br> '+ d.overall_can_rate +
                    '%'+ '<br><br> Com:<br>'+d.com) 
                        //   .style("left", (d3.event.pageX) + "px")     
                        //   .style("top", (d3.event.pageY - 28) + "px");
                        .style('left','3%').style('bottom','52%').style('font-size', '14px').style('line-height','1.5')
                   
                })
                .on('mouseout',(d)=>{
                    div_main.style('visibility','hidden');
                });
       }
       
        function updateTempCom(){
            tempCom.transition().duration(400).attr('cy',(d,i)=>{
                return comScale(d.com);
            })
        }
        
        
        // ------------------------- Rain Com ---------------------------
        
        createRainCom();
        
        setTimeout(function() {
            updateRainCom();
        },800);
      
      function createRainCom(){
        rainCom = rainbox.selectAll("circle_rainCom").data(data).enter()
        .append("circle")
        .attr("cx", (d,i)=>{
            return (boxwidth/12*i)+(boxwidth/24);
        })
        .attr('cy', (d,i)=>{
            return comScale(0);
        })
        .attr('r',(d)=>{
            if(d.year == '2014'&& d.month=='jan')return 0;
            else if (d.year == '2014'&& d.month=='feb')return 0;
            else if (d.year == '2014'&& d.month=='mar')return 0;
            else if (d.year == '2014'&& d.month=='apr')return 0;
            else if (d.year == '2014'&& d.month=='may')return 0;
            else return 3;
        }).attr('fill','none')
        .attr('stroke', '#efefef').attr('stroke-width', '0.5px')
        .on('mouseover', (d)=>{
                    
                    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                    div_main.html('Rain: <br>'+ d.rainfall_actual.toFixed(2) +' mm <br><br> Can:<br> '+ d.overall_can_rate +
                    '%'+ '<br><br> Com:<br>'+d.com) 
                        //   .style("left", (d3.event.pageX) + "px")     
                        //   .style("top", (d3.event.pageY - 28) + "px");
                        .style('left','3%').style('bottom','24%').style('font-size', '14px').style('line-height','1.5')
                   
                })
                .on('mouseout',(d)=>{
                    div_main.style('visibility','hidden');
                });
        
        
      }
      
        function updateRainCom(){
            rainCom.transition().duration(400).attr('cy',(d,i)=>{
                return comScale(d.com);
            })
        }
         
    }


// ----------------- Function makePie --------------------------

    function makePie(pie_data){
            
            // REMOVE ALL GROUPS TO UPDATE NEW
            // svg_pie.selectAll('svg > g > *').remove();
            svg_pie.selectAll('svg > *').remove();
      
            var margin =10;
            var pie_width= parseInt(svg_pie.style('width'))/2.8, pie_height =parseInt(svg_pie.style('width'))/2.8, pie_radius = Math.min(pie_width, pie_height) / 2;
            var g = svg_pie.append("g")
            // .attr("transform", "translate(" + pie_width / 2 + ","+ pie_height / 2 + ")");
            .attr("transform", "translate("+ ((pie_width/1.5)+20)+","+pie_width/1.5+")");
            const pie_colors = d3.scaleOrdinal().range(["#A9A9A9", "#BEBEBE", "#FFFFFF", "#D0D0D0", "#909090"]);
            
            // Generate the pie
            var pie = d3.pie();
            
            // Generate the arcs
            var arc = d3.arc()
                        .innerRadius(0)
                        .outerRadius(pie_radius);
        
   
            var data_array=[];
            data_array.push(pie_data.can_r1, pie_data.can_r2, pie_data.can_r3, pie_data.can_r5, pie_data.can_r5);
            
            
            //Generate groups
            var arcs = g.selectAll("arc")
                        .data(pie(data_array))
                        .enter()
                        .append("g")
                        .attr("class", "arc")
                        
        
            //Draw arc paths
            arcs.append("path")
                .attr("fill", function(d, i) {
                    return pie_colors(i);
                }).attr('opacity', 0.8)
                .attr("d", arc);
            
            
            
            //------------------ legends ---------------------------------------------------
            var g_text = svg_pie.append('g')
            
            var x_text = pie_width*1.5;
            var y_text = pie_width/1.5;
            
            // don't show text for 2014 (jan-may)
            
           
                g_text.append('text').attr('class', 'legends').text((pie_data.month).toUpperCase() +' '+ pie_data.year)
                .attr('x', x_text).attr('y', y_text-40).attr("fill", '#FFFFFF').style('font-size','18px')
               
                g_text.append('text').attr('class', 'legends').text('Weather: '+ data_array[0] +'%')
                .attr('x', x_text).attr('y', y_text-5).attr("fill", '#FFFFFF').style('font-size','18px')
                
                g_text.append('text').attr('class', 'legends').text('Technical: '+ data_array[1] +'%')
                .attr('x', x_text).attr('y', y_text+20).attr("fill", '#999999')
                
                g_text.append('text').attr('class', 'legends').text('Operational: '+ data_array[2] +'%')
                .attr('x', x_text).attr('y', y_text+40).attr("fill", '#999999')
                
                g_text.append('text').attr('class', 'legends').text('Commercial: '+ data_array[3] +'%')
                .attr('x', x_text).attr('y', y_text+60).attr("fill", '#999999')
                
                g_text.append('text').attr('class', 'legends').text('Misc: '+ data_array[4] +'%')
                .attr('x', x_text).attr('y', y_text+80).attr("fill", '#999999')
            
     
    }
            
            