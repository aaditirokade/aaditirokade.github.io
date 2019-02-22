// load weather data file
d3.json('data/all_day.json')

// after loading, append to
.then((dayData) => {

    // selected element in data array
    let selectedTime = 0;

    // update headline
    d3.select('#graph').append('div').attr('id','title').text( 'time ' + dayData[selectedTime].time ).attr('font-size','40px').style('color','white');

    d3.select('#graph').append('div').attr('id','diagram')


    var svg= d3.select('#diagram').append('svg').attr('width','200').attr('height','1500')

    var labels = svg.selectAll('text')
                    .data(dayData).enter().append('text').text( (d) => { return d['id']; })
                    .attr("x", 5).attr("y", (d,i) => { return 10 + 5*i; }).attr("fill", "white")
                    .attr('strokeWeight','0.5').style('font-size','12px')

    // labels.attr("x", 5).attr("y", (d,i) { return 2 + 5*i; })
    //       .text( (d) => { return d['id']; })
    //       .attr("font-family", "sans-serif").attr("font-size", "20px").attr("fill", "white");

    var bars= svg.selectAll('rect').data(dayData).enter().append('rect')


    bars.attr("width", (d) => { return d['mag']*10; }).attr("height", 0.5)
        .attr("x", 90).attr("y", (d,i) => { return 10 + 5*i; } )
        .attr("fill", "#FF7F50")

    // // append a rectangle for each temperature element (i.e. each month)
    // var bars = svg.selectAll("rect")
    //               .data(dayData[selectedTime].mag)
    //               .enter()
    //               .append("rect");
    //
    // // style rectangles using data
    // bars.attr("width", (d) => { return d; })
    //     .attr("height", 10)
    //     .attr("x", 10)
    //     .attr("y", (d,i) => { return 10 + 25*i; } )
    //     .attr("fill", "#FF7F50")

    // // add event handler for mouse clicks
    // svg.on("click", () => {
    //     // toggle city between 1 and 0
    //     selectedCity = 1 - selectedCity;
    //     // update data and animate attr width
    //     svg.selectAll("rect")
    //         .data(weatherData[selectedCity].temp)
    //         .transition()
    //         .duration(250)
    //         .attr("width", (d) => { return d *2; });
    //     // update headline
    //     d3.select('h2').text( 'Median monthly temperatures in ' + weatherData[selectedCity].city );
    // });
});
