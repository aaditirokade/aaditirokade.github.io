

d3.json('data/GunEvents2018JANshort.json').then(function(data){
  d3.json('data/GunJan2018totals.json').then(function(totals){
    // if (error) throw error;

    // var svg1 = d3.select('body').append('svg').attr('id','svg').attr('width','1000px').attr('height','1000px')
    // svg.append('text').attr('x','30px').attr('y','20px').text('all').attr('class','labels').style('text-transform','uppercase').attr('fill','white')
    //
    // var bars = svg1.selectAll('.bars1').data(totals).enter().append('rect').attr('class','bars1')
    //               .attr('x', (d,i)=>{return (40+i*4)}).attr('y',(d,i)=>{return 300-d.killed;})
    //               .attr('width', '1px').attr('height',(d,i)=>{return d.killed;}).attr('fill','white')




  //*********** CHART 1 **********************

  const svg = d3.select('svg').attr('width', window.innerWidth)
  const svgContainer = d3.select('#container');

  //margins
   const margin = 80;
   const width = 900 - 2 * margin;
   const height = 500 - 2 * margin;

   const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`);

// var height = 500;
// var width = 500;

  // range - takes the length that should be divided between the limits of the domain values
 // range - takes the length that should be divided between the limits of the domain values
  const yScale = d3.scaleLinear().range([height, 0]).domain([0, 100]);

    chart.append('g').call(d3.axisLeft(yScale));

  const xScale = d3.scaleBand()
      .range([0, width])
      .domain(totals.map((d) => d.day))
      .padding(0.4)

  chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));


  // chart.selectAll()
  //          .data(totals)
  //          .enter()
  //          .append('rect')
  //          .attr('x', (d) => xScale(d.day))
  //          .attr('y', (s) => yScale(d.killed))
  //          .attr('height', (d) => height - yScale(d.killed))
  //          .attr('width', xScale.bandwidth())


 // Horizontal marker lines
  const makeYLines = () => d3.axisLeft().scale(yScale)

// grid : ticksize , tickformat
  chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat(''))

  const barGroups = chart.selectAll()
      .data(totals)
      .enter()
      .append('g')


  // BARS
  barGroups.append('rect')
     .attr('class', 'bar')
     .attr('x', (d) => xScale(d.day))
     .attr('y', (d) => yScale(d.killed))
     .attr('height', (d) => height - yScale(d.killed))
     .attr('width', xScale.bandwidth())
     .on('mouseenter', function (actual, i) {
        d3.selectAll('.killed')
          .attr('opacity', 0)

        d3.select(this)
          .transition()
          .duration(300)
          .attr('opacity', 0.6)
          .attr('x', (d) => xScale(d.day) - 5)
          .attr('width', xScale.bandwidth() + 10)

        const y = yScale(actual.killed)

        line = chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)

        // TEXT
        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (d) => xScale(d.day) + xScale.bandwidth() / 2)
          .attr('y', (d) => yScale(d.killed) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((d, i) => {
            const divergence = (d.killed - actual.killed)

            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`

            return i !== i ? text : '';
          })
        })
        .on('mouseleave', function () {
               d3.selectAll('.killed')
                 .attr('opacity', 1)

               d3.select(this)
                 .transition()
                 .duration(300)
                 .attr('opacity', 1)
                 .attr('x', (a) => xScale(a.day))
                 .attr('width', xScale.bandwidth())

               chart.selectAll('#limit').remove()
               chart.selectAll('.divergence').remove()
          })

  barGroups.append('text')
      .attr('class', 'value')
      .attr('x', (d) => xScale(d.day) + xScale.bandwidth() / 2)
      .attr('y', (d) => yScale(d.killed) + 30)
      .attr('text-anchor', 'middle')
      .text((d) => `${d.killed}`)

    svg.append('text')
      .attr('class', 'label')
      .attr('x', -(height / 2) - margin)
      .attr('y', margin / 2.4)
      .attr('transform', 'rotate(-90)')
      .attr('text-anchor', 'middle')
      .text('No. of people killed')

    svg.append('text')
      .attr('class', 'label')
      .attr('x', width / 2 + margin)
      .attr('y', height+ margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Days of January')

    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Gun Violence - JAN 2018')



//
// var mapsvg = d3.select(mymap.getPanes().overlayPane).append("svg"),
//     g = mapsvg.append("g").attr("class", "leaflet-zoom-hide");

//
// // MAPBOX ACCESS TOKEN
//     mapboxgl.accessToken = 'pk.eyJ1IjoiYWFkaXRpcm9rYWRlMSIsImEiOiJjam5vdHA1NDIwMDl3M2pudmp2N3VnNjFuIn0.365E4Awu0MI2iuzZbYmaSQ';
//
//   // LOAD NEW MAP1
//       let mymap = new mapboxgl.Map({
//           container: 'mapid',
//           style: 'mapbox://styles/aaditirokade1/cjo95e47201fd2stfs0ywz2pq',
//           center: [18.2812, 9.1021], // 9.1021° N, 18.2812° E
//           zoom: 4
//       });


  //
  //     // CONTAINER
  //     let container = mymap.getCanvasContainer();
  //
  //     // let svg2 = d3.select(container).append("svg");
  //     let transform = d3.geoTransform({point: projectPoint});
  //     let path = d3.geoPath().projection(transform);
  //
  //     var scale = new mapboxgl.ScaleControl({
  //               maxWidth: 80,
  //               unit: 'imperial' });
  //     mymap.addControl(scale);
  //     scale.setUnit('metric');
  //
  //     mymap.on("viewreset", update);
  //     mymap.on("movestart", function(){ svg.classed("hidden", true); });
  //     mymap.on("rotate", function(){ svg.classed("hidden", true); });
  //     mymap.on("moveend", function(){ update();svg.classed("hidden", false); });
  //
  //     update();

    	// function projectPoint(lon, lat) {
      //       let point = map.project(new mapboxgl.LngLat(lon, lat));
    	// 	this.stream.point(point.x, point.y);
    	// }



//*********** MAP ENDS ***************

//************** chart2 *****************

    // const svg = d3.select('container').append('svg').attr('id','svg2').attr('width', window.innerWidth)
    // const svgContainer2 = d3.select('#container2');
    const chart2 = svg.append('g').attr('transform', `translate(${margin}, ${margin+500})`);
    const yScale2 = d3.scaleLinear().range([height+50, 0]).domain([0, 150]);
    chart2.append('g').call(d3.axisLeft(yScale2));
    // const xScale2 = d3.scaleBand().range([0, width]).domain(totals.map((d) => d.day)).padding(0.4)
    chart2.append('g').attr('transform', `translate(0, ${height+50})`).call(d3.axisBottom(xScale));

    const makeYLines2 = () => d3.axisLeft().scale(yScale2)
    chart2.append('g').attr('class', 'grid').call(makeYLines().tickSize(-width, 0, 0).tickFormat(''))
    const barGroups2 = chart2.selectAll().data(totals).enter().append('g')
    // BARS
    barGroups2.append('rect').attr('class', 'bar2')
              .attr('x', (d) => xScale(d.day)).attr('y', (d) => yScale2(d.injured))
              .attr('height', (d) => height+50 - yScale2(d.injured)).attr('width', xScale.bandwidth())
              .on('mouseenter', function (actual, i) {
                 d3.selectAll('.injured').attr('opacity', 0)
                 d3.select(this).transition().duration(300).attr('opacity', 0.6)
                   .attr('x', (d) => xScale(d.day) - 5).attr('width', xScale.bandwidth() + 10)

    const y2 = yScale2(actual.injured)
    line2 = chart2.append('line').attr('id', 'limit2').attr('x1', 0).attr('y1', y2).attr('x2', width).attr('y2', y2)

      // TEXT
      barGroups2.append('text').attr('class', 'divergence')
        .attr('x', (d) => xScale(d.day) + xScale.bandwidth() / 2)
        .attr('y', (d) => yScale2(d.injured) + 30)
        .attr('fill', '#222').attr('text-anchor', 'middle')
        .text((d, i) => {
          const divergence2 = (d.killed - actual.injured)
          let text2 = ''
          if (divergence2 > 0) text2 += '+'
          text2 += `${divergence2}`
          return i !== i ? text2 : '';
        })
      })
      .on('mouseleave', function () {
             d3.selectAll('.injured').attr('opacity', 1)
             d3.select(this).transition().duration(300)
               .attr('opacity', 1).attr('x', (a) => xScale(a.day)).attr('width', xScale.bandwidth())

             chart2.selectAll('#limit2').remove()
             chart2.selectAll('.divergence2').remove()
             .text((d, i) => {
               return '';
             })
        });


        barGroups2.append('text').attr('class', 'value').attr('x', (d) => xScale(d.day) + xScale.bandwidth() / 2)
                 .attr('y', (d) => yScale2(d.injured) + 30).attr('text-anchor', 'middle').text((d) => `${d.injured}`)
                 .attr('fill', '#222')//.attr('transform', 'rotate(-90)')

        svg.append('text').attr('class', 'label').attr('x', -(height+610 / 2) - margin).attr('y', margin / 2.4)
                   .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('No. of people Injured')

        svg.append('text').attr('class', 'label').attr('x', width / 2 + margin)
                     .attr('y', height+550+ margin * 1.7).attr('text-anchor', 'middle').text('Days')



  });
});
