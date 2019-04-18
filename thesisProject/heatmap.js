

// Global Variables
var svg_temp, boxwidth, canScale, tempScale, comScale, rainScale, comRateScale, svg_rain;

// DIV for TOOLTIP
var div = d3.select('body').append('div').attr('class', 'tooltip');

d3.json('./new/thesis_data1.json').then((data) => {
    
    console.log(data);
    
    //------------------------------- SCALES ------------------------------------
    // Cancellations scale
    var minCan = d3.min(data, function(d) { return d.overall_can_rate; });
    var maxCan = d3.max(data, function(d) { return d.overall_can_rate; });
    // canScale = d3.scaleLinear().domain([0.33, 6.99]).range([ 0,250]);
    // canScale = d3.scaleLinear().domain([minCan, maxCan]).range([ 0,250]);
    canScale = d3.scaleLinear().domain([10, 0]).range([ 0,250]);
    console.log(minCan); console.log(maxCan);

    
    // Temperature scale
    var minTemp = d3.min(data, function(d) { return d.avg_temp; });
    var maxTemp = d3.max(data, function(d) { return d.avg_temp; });
    // tempScale = d3.scaleLinear().domain([minTemp, maxTemp]).range(['#ffffff', '#FD7878']);
    tempScale = d3.scaleLinear().domain([minTemp, maxTemp]).range(['#FEFEFE', '#FD7878']);

    // Rainfall scale
    var minRain = d3.min(data, function(d) { return d.rainfall_actual; });
    var maxRain = d3.max(data, function(d) { return d.rainfall_actual; });
    // rainScale = d3.scaleLinear().domain([minRain, maxRain]).range(['#ffffff', '#00ADF8']);
    rainScale = d3.scaleLinear().domain([minRain, maxRain]).range(['#FEFEFE', '#00ADF8']);
    
    // Complaints (Number) scale
    var minCom = d3.min(data, function(d) { return d.com; });
    var maxCom = d3.max(data, function(d) { return d.com; });
    // comScale = d3.scaleLinear().domain([minCom, maxCom]).range([0, 250]);
    comScale = d3.scaleLinear().domain([2000, 0]).range([0, 250]);
    console.log(minCom); console.log(maxCom);
    
     // Complaints (Rate) scale
    var minComRate = d3.min(data, function(d) { return d.com_rate; });
    var maxComRate = d3.max(data, function(d) { return d.com_rate; });
    comRateScale = d3.scaleLinear().domain([minComRate, maxComRate]).range([0, 250]);
    
    
    // ------------------------------- SVGs ------------------------------------
    // TEMPERATURE heatmap
    svg_temp = d3.select("#temp").append('svg').attr('width','100%').attr('height','250px');
    
    // RAINFALL heatmap
    svg_rain = d3.select("#rain").append('svg').attr('width','100%').attr('height','250px');


    // Width of one container
    boxwidth = (parseInt(svg_temp.style('width')) - 20)/5;
    
    for(i=0; i<5;i++)
    showYear(data, 2014+i, i);
    
    });


function showYear(all_data, year, n){
    
    // filter data per year
    var data = all_data.filter(d => {
        return d.year === year;
    });
    
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
    
    
    // -------------------- Rainfall --------------------------
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
    .style('fill', '#000000')
    
    
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
    .style('fill', '#000000')
    
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
    .attr('stroke', '#000000').style('stroke-width', '0.5px');
    
    
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
    .attr('stroke', '#000000').attr('stroke-width', '0.5px')
    
    
}

