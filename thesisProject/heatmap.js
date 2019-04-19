

//Global Variables
var svg_temp, boxwidth, canScale, tempScale, comScale, rainScale, comRateScale, svg_rain;

//------------------------- DIV for TOOLTIP ------------------------
    var div = d3.select('body').append('div').attr('class', 'tooltip');


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
    
    // var myLabels = ["jan14", "feb14", "mar14", "apr14", "may14", "jun14", "jul14", "aug14", "sep14", "oct14", "nov14", "dec14","jan15", "feb15", "mar15", "apr15", "may15", "jun15", "jul15", "aug15", "sep15", "oct15", "nov15", "dec15",
    //                 "jan16", "feb16", "mar16", "apr16", "may16", "jun16", "jul16", "aug16", "sep16", "oct16", "nov16", "dec16",
    //                 "jan17", "feb17", "mar17", "apr17", "may17", "jun17", "jul17", "aug17", "sep17", "oct17", "nov17", "dec17",
    //                 "jan18", "feb18", "mar18", "apr18", "may18", "jun18", "jul18", "aug18", "sep18", "oct18", "nov18", "dec18",]
     
    
    var mylabe =[]
    for(i=14;i<19;i++){
        mylabe.push('jan'+i, 'feb'+i, 'mar'+i, 'apr'+i, 'may'+i,'jun'+i, 'jul'+i, 'aug'+i, 'sep'+i,'oct'+i, 'nov'+i, 'dec'+i);
    }

    
    // ------------------------------- SVGs ------------------------------------
    // TEMPERATURE svg container
    svg_temp = d3.select("#temp").append('svg').attr('width','100%').attr('height','200px');
    
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
    });


//---------------- Plot values ---------------------------
function showYear(all_data, year, n){
    
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
    })
    // .style('opacity', 0.05);
    
    // var can_plot = svg_temp.append('g').attr("class", year)
    //         .attr('transform', `translate(${(boxwidth+5)*n})`)
    
    
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
    })
    
    
    // -------------------- CanPlot --------------------------
    // Temp
    box.selectAll("circle_tempCan").data(data).enter()
    .append("circle")
    .attr("cx", (d,i)=>{
        return (boxwidth/12*i)+(boxwidth/24);
    })
    .attr('cy', (d,i)=>{
        return canScale(d.overall_can_rate);
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
    
    // createRain();
    // setTimeout(function() {
    //     updateRain();
    // },3000)
    
    
    
        // Rain
        rainbox.selectAll("circle_rainCan").data(data).enter()
        .append("circle")
        .attr("cx", (d,i)=>{
            return (boxwidth/12*i)+(boxwidth/24);
        })
        .attr('cy', (d,i)=>{
            return canScale(d.overall_can_rate);
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
        
    function createRain() {
    }
    
    function updateRain() {
        //select your rain
        //tranisiotn/duration
        //cx cy **new**
        
    }

    
    // -------------------- ComPlot --------------------------
    // Temp
    box.selectAll("circle_tempCom").data(data).enter()
    .append("circle")
    .attr("cx", (d,i)=>{
        return (boxwidth/12*i)+(boxwidth/24);
    })
    .attr('cy', (d,i)=>{
        return comScale(d.com);
    })
    .attr('r',(d)=>{
        if(d.year == '2014'&& d.month=='jan')return 0;
        else if (d.year == '2014'&& d.month=='feb')return 0;
        else if (d.year == '2014'&& d.month=='mar')return 0;
        else if (d.year == '2014'&& d.month=='apr')return 0;
        else if (d.year == '2014'&& d.month=='may')return 0;
        else return 3;
    }).attr('fill','none')
    .attr('stroke', '#efefef').style('stroke-width', '0.5px');
    
    
    // Rain
    rainbox.selectAll("circle_rainCom").data(data).enter()
    .append("circle")
    .attr("cx", (d,i)=>{
        return (boxwidth/12*i)+(boxwidth/24);
    })
    .attr('cy', (d,i)=>{
        return comScale(d.com);
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
    
    
}

