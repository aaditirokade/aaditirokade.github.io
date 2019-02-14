
d3.json('data/newData_dvia_fp.json').then(function(data){
d3.json("https://d3js.org/us-10m.v1.json").then(function(us){
  d3.json('data/newCountryData_dvia_fp.json').then(function(con){





  //*********** CHART 1 **********************

        //margins
         const margin = 80;
         const width = 1000 - 2 * margin;
         const height = 500 - 2 * margin;

        const svg = d3.select('#container').append('svg').attr('id','svg1')
        // const svgContainer = d3.select('#container');

       const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`);

          // var height = 500;
          // var width = 500;

        // range - takes the length that should be divided between the limits of the domain values
        // range - takes the length that should be divided between the limits of the domain values
        const yScale = d3.scaleLinear().range([height, 0]).domain([0, 6000]);

          chart.append('g').call(d3.axisLeft(yScale));

        const xScale = d3.scaleBand()
            .range([0, width])
            // .domain(totals.map((d) => d.day))
            .domain(data.results.map((d) => d.month))
            .padding(0.4)

        chart.append('g')
              .attr('transform', `translate(0, ${height})`)
              .call(d3.axisBottom(xScale))
              .selectAll('text')
              .attr("y", 0)
              .attr("x", -30)
              .attr("transform", "rotate(-45)");

       // Horizontal marker lines
        const makeYLines = () => d3.axisLeft().scale(yScale)

      // grid : ticksize , tickformat
        chart.append('g')
              .attr('class', 'grid')
              .call(makeYLines()
              .tickSize(-width, 0, 0)
              .tickFormat(''))

        const barGroups = chart.selectAll()
            .data(data.results)
            .enter()
            .append('g')


        // BARS
        barGroups.append('rect')
           .attr('class', 'bar')
           .attr('x', (d) => xScale(d.month))
           .attr('y', (d) => yScale(d.n_incidents))
           .attr('height', (d) => height - yScale(d.n_incidents))
           .attr('width', xScale.bandwidth())
           .on('mouseenter', function (actual, i) {
              d3.selectAll('.n_incidents')
                .attr('opacity', 0)

              d3.select(this)
                .transition()
                .duration(300)
                .attr('opacity', 0.6)
                .attr('x', (d) => xScale(d.month) - 5)
                .attr('width', xScale.bandwidth() + 10)

              const y = yScale(actual.n_incidents)

              line = chart.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y)
                .attr('x2', width)
                .attr('y2', y)

              // TEXT
              barGroups.append('text')
                .attr('class', 'divergence')
                .attr('x', (d) => xScale(d.month) + xScale.bandwidth() / 2)
                .attr('y', (d) => yScale(d.n_incidents) + 30)
                .attr('fill', 'white')
                .attr('text-anchor', 'middle')
                .text((d, i) => {
                  const divergence = (d.n_incidents - actual.n_incidents)

                  let text = ''
                  if (divergence > 0) text += '+'
                  text += `${divergence}`

                  return i !== i ? text : '';
                })
              })
              .on('mouseleave', function () {
                     d3.selectAll('.n_incidents')
                       .attr('opacity', 1)

                     d3.select(this)
                       .transition()
                       .duration(300)
                       .attr('opacity', 1)
                       .attr('x', (a) => xScale(a.month))
                       .attr('width', xScale.bandwidth())

                     chart.selectAll('#limit').remove()
                     chart.selectAll('.divergence').remove()
                })


        barGroups.append('text')
            .attr('class', 'value')
            .attr('x', (d) => xScale(d.month) + xScale.bandwidth() / 2)
            .attr('y', (d) => yScale(d.n_incidents) + 30)
            .attr('text-anchor', 'middle')
            .text((d) => `${d.n_incidents}`)

          svg.append('text')
            .attr('class', 'label')
            .attr('x', -(height / 2) - margin)
            .attr('y', margin / 2.4)
            .attr('transform', 'rotate(-90)')
            .attr('text-anchor', 'middle')
            .text('No. of incidents')

          svg.append('text')
            .attr('class', 'label')
            .attr('x', width / 2 + margin)
            .attr('y', height+ margin * 1.7)
            .attr('text-anchor', 'middle')
            .text('Months')

          svg.append('text')
            .attr('class', 'title')
            .attr('x', width / 2 + margin+50)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text('Incidents: 2016-18')




// *************** Whole new page *******************

//************** chart2 *****************


          const svg2 = d3.select('#container2').append('svg').attr('id','svg2')

          const chart2 = svg2.append('g').attr('transform', `translate(${margin}, ${margin})`);
          const yScale2 = d3.scaleLinear().range([height+150, 0]).domain([0, 6000]);
          chart2.append('g').call(d3.axisLeft(yScale2));

          const xScale2 = d3.scaleBand().range([0, width+200]).domain(con.results.map((d) => d.country)).padding(0.4)

          // const xScale2 = d3.scaleBand().range([0, width]).domain(totals.map((d) => d.day)).padding(0.4)
          chart2.append('g').attr('transform', `translate(0, ${height+150})`).call(d3.axisBottom(xScale2))
          .selectAll('text').attr("y", 0).attr("x", -40).attr("transform", "rotate(-45)");

          const makeYLines2 = () => d3.axisLeft().scale(yScale2)
          chart2.append('g').attr('class', 'grid').call(makeYLines2().tickSize(-width, 0, 0).tickFormat(''))
          const barGroups2 = chart2.selectAll().data(con.results).enter().append('g')

          // BARS
          barGroups2.append('rect').attr('class', 'bar2')
                    .attr('x', (d) => xScale2(d.country)).attr('y', (d) => yScale2(d.total_16))
                    .attr('height', (d) => height+150 - yScale2(d.total_16)).attr('width', xScale2.bandwidth())
                    .on('mouseenter', function (actual, i) {

                       d3.selectAll('.total_16').attr('opacity', 0)
                       d3.select(this).transition().duration(300).attr('opacity', 0.6)
                         .attr('x', (d) => xScale2(d.country) - 5).attr('width', xScale2.bandwidth() + 10)

          const y2 = yScale2(actual.total_16)
          line2 = chart2.append('line').attr('id', 'limit2').attr('x1', 0).attr('y1', y2).attr('x2', width).attr('y2', y2)

            // TEXT
            barGroups2.append('text').attr('class', 'divergence')
              .attr('x', (d) => xScale2(d.country) + xScale2.bandwidth()/ 2)
              .attr('y', (d) => yScale2(d.total_16) + 30)
              .attr('fill', '#222').attr('text-anchor', 'middle')
              .text((d, i) => {
                const divergence2 = (d.total_16 - actual.total_16)
                let text2 = ''
                if (divergence2 > 0) text2 += '+'
                text2 += `${divergence2}`
                return i !== i ? text2 : '';
              })
            })
            .on('mouseleave', function () {
                   d3.selectAll('.total_16').attr('opacity', 1)
                   d3.select(this).transition().duration(300).attr('opacity', 1).attr('x', (a) => xScale2(a.country)).attr('width', xScale2.bandwidth())

                   chart2.selectAll('#limit2').remove()
                   chart2.selectAll('.divergence2').remove()

                   .text((d, i) => {
                     return '';
                   })
              });


            barGroups2.append('text').attr('class', 'value').attr('x', (d) => xScale2(d.country) + xScale2.bandwidth() / 2)
                     .attr('y', (d) => yScale2(d.total_16) + 30).attr('text-anchor', 'middle').text((d) => `${d.total_16}`)
                     .attr('fill', '#222')

            svg2.append('text').attr('class', 'label').attr('x', -(height / 2) - margin).attr('y', margin / 2.4)
                       .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('No. of Incidents')

            svg2.append('text').attr('class', 'label').attr('x', width / 2 + margin+100)
                         .attr('y', height+180 + margin * 1.7).attr('text-anchor', 'middle').text('States')

            svg2.append('text').attr('class', 'title').attr('x', width / 2 + margin+50).attr('y', 40).attr('text-anchor', 'middle')
                              .text('Incidents: 2016')



//************** chart3 *****************

console.log(con.results[0]);

              const svg3 = d3.select('#container3').append('svg').attr('id','svg3')

              const chart3 = svg3.append('g').attr('transform', `translate(${margin}, ${margin})`);
              const yScale3 = d3.scaleLinear().range([height+150, 0]).domain([0, 6000]);
              chart3.append('g').call(d3.axisLeft(yScale3));

              const xScale3 = d3.scaleBand().range([0, width+200]).domain(con.results.map((d) => d.country)).padding(0.4)

              // const xScale2 = d3.scaleBand().range([0, width]).domain(totals.map((d) => d.day)).padding(0.4)
              chart3.append('g').attr('transform', `translate(0, ${height+150})`).call(d3.axisBottom(xScale3))
              .selectAll('text').attr("y", 0).attr("x", -30).attr("transform", "rotate(-45)");

              const makeYLines3 = () => d3.axisLeft().scale(yScale3)
              chart3.append('g').attr('class', 'grid').call(makeYLines3().tickSize(-width, 0, 0).tickFormat(''))
              const barGroups3 = chart3.selectAll().data(con.results).enter().append('g')

              // BARS
              barGroups3.append('rect').attr('class', 'bar3')
                        .attr('x', (d) => xScale3(d.country)).attr('y', (d) => yScale3(d.total_17))
                        .attr('height', (d) => height+150 - yScale3(d.total_17)).attr('width', xScale3.bandwidth())
                        .on('mouseenter', function (actual, i) {

                           d3.selectAll('.total_17').attr('opacity', 0)
                           d3.select(this).transition().duration(300).attr('opacity', 0.7)
                             .attr('x', (d) => xScale3(d.country) - 5).attr('width', xScale3.bandwidth() + 10)

              const y3 = yScale3(actual.total_17)
              line3 = chart3.append('line').attr('id', 'limit3').attr('x1', 0).attr('y1', y3).attr('x2', width).attr('y2', y3)

                // TEXT
                barGroups3.append('text').attr('class', 'divergence')
                  .attr('x', (d) => xScale3(d.country) + xScale3.bandwidth()/ 2)
                  .attr('y', (d) => yScale3(d.total_17) + 30)
                  .attr('fill', '#222').attr('text-anchor', 'middle')
                  .text((d, i) => {
                    const divergence3 = (d.total_17 - actual.total_17)
                    let text3 = ''
                    if (divergence3 > 0) text3 += '+'
                    text3 += `${divergence3}`
                    return i !== i ? text3 : '';
                  })
                })
                .on('mouseleave', function () {
                       d3.selectAll('.total_17').attr('opacity', 1)
                       d3.select(this).transition().duration(300).attr('opacity', 1).attr('x', (a) => xScale3(a.country)).attr('width', xScale3.bandwidth())

                       chart3.selectAll('#limit3').remove()
                       chart3.selectAll('.divergence3').remove()

                       .text((d, i) => {
                         return '';
                       })
                  });


                barGroups3.append('text').attr('class', 'value').attr('x', (d) => xScale3(d.country) + xScale3.bandwidth() / 2)
                         .attr('y', (d) => yScale3(d.total_17) + 30).attr('text-anchor', 'middle').text((d) => `${d.total_17}`)
                         .attr('fill', '#123456')

                svg3.append('text').attr('class', 'label').attr('x', -(height / 2) - margin).attr('y', margin / 2.4)
                           .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('No. of Incidents')

                svg3.append('text').attr('class', 'label').attr('x', width / 2 + margin+100)
                             .attr('y', height+180 + margin * 1.7).attr('text-anchor', 'middle').text('States')

                svg3.append('text').attr('class', 'title').attr('x', width / 2 + margin+50).attr('y', 40).attr('text-anchor', 'middle')
                                  .text('Incidents: 2017')





// //************** MAP ***************
//         // var svgMap = d3.select('#mapid').append("svg");
//
//         var color = d3.scaleLinear().range([0, 255])
//                       .domain(con.results.map((d) => d.country));
//
//         console.log(color);
//
//
//         var tooltip = d3.select("body").append("div")
//         .attr("class", "tooltip")
//         .style("opacity", 0);
//
//         var svgMap = d3.select('#mapid').append('svg').attr('width',1000).attr('height',700);
//         var path = d3.geoPath();
//
//
//             svgMap.append("g")
//                 .attr("class", "states")
//                 .selectAll("path")
//                 .data(topojson.feature(us, us.objects.states).features)
//                 .enter().append("path")
//                 .attr("d", path)
//                 // .attr('fill', (d,i) => { return color(i); })
//                 .on("mouseover", function(d) {
//
//                     tooltip.transition()
//                     .duration(200)
//                     .style('fill','skyblue')
//                     .style("opacity", 0.8);
//
//                     tooltip.html(data.results[0].country)
//                     .style("left", (d3.event.pageX) + "px")
//                     .style("top", (d3.event.pageY - 28) + "px");
//                 })
//                 .on("mouseout", function(d) {
//                     tooltip.transition()
//                     .duration(500)
//                     .style("opacity", 0);
//                 })
//                 .on("click", function(d) {
//                   console.log(d);
//                 });
//                 // .attr('mouseenter', (data) =>{
//                 //   console.log(us.objects.states);
//                 //   // console.log(data.results[i].state);
//                 // })
//
//             svgMap.append("path")
//                 .attr("class", "state-borders")
//                 .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));






    // //************ viz 3 **************
    //
    // // var statesNames = states.map(function(d,i) { console.log(d.features[i].properties.name);return d.features[i].properties.name; });
    // // console.log(statesNames.length);
    //
    // var wid = 960,
    // hei = 700,
    // barHeight = hei / 2 - 40;
    //
    // var formatNumber = d3.format("s");
    // //
    // // var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    //
    //
    // console.log(states);
    // // console.log(data.results[0].state);
    //
    // var satteNames= [];
    // var nyCounter=0;
    //
    //
    //
    // for(i=0;i<states.features.length;i++){
    //
    //    console.log(states.features[i].properties.name);
    //    satteNames.push(states.features[i].properties.name);
    //
    // }
    //
    // console.log(satteNames);
    // var numBarsStates = statesNames.length;
    // // console.log(numBarsStates);
    //
    //
    //   // console.log(data.results[i].state);
    //
    //    // var filteredID = states.filter((data) => {
    //    //                         var ct = states.features[i].properties.name;
    //    //                         console.log(ct);
    //    //                         console.log(states);
    //    //                         return data.results[i].state === ct;
    //    //                   });
    // // var nyc = getFrequency('Alabama'); var nj = getFrequency('Alaska'); var nyc = getFrequency('New York');var nj = getFrequency('New Jersey');
    //
    // var incidentCount = [];
    //
    // for(i=0; i<stateNames.length; i++){
    //
    //   incidentCount.push(getFrequency(stateNames[i]));
    // }
    //
    // console.log('incidentCount');  console.log(incidentCount);
    //
    //
    // function getFrequency(stateName){
    //   var counter = 0;
    //   for(i=0;i<states.features.length;i++){
    //
    //         if(data.results[i].state === stateName)
    //           counter+=1;
    //     }
    //     return counter;
    //  }




  });
});
});
