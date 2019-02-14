

d3.json('data/GunEvents2018JAN.json').then(function(data){
  d3.json('data/GunJan2018totals.json').then(function(totals){

    console.log(totals);
    console.log(data);

    // var svg1 = d3.select('body').append('svg').attr('id','svg').attr('width','1000px').attr('height','1000px')
    // svg.append('text').attr('x','30px').attr('y','20px').text('all').attr('class','labels').style('text-transform','uppercase').attr('fill','white')
    //
    // var bars = svg1.selectAll('.bars1').data(totals).enter().append('rect').attr('class','bars1')
    //               .attr('x', (d,i)=>{return (40+i*4)}).attr('y',(d,i)=>{return 300-d.killed;})
    //               .attr('width', '1px').attr('height',(d,i)=>{return d.killed;}).attr('fill','white')




  // create chart

  const svg = d3.select('svg');
  const svgContainer = d3.select('#container');

  //margins
   const margin = 40;
   const width = 900 - 2 * margin;
   const height = 500 - 2 * margin;


// chart
   const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

// var height = 500;
// var width = 500;
  // range - takes the length that should be divided between the limits of the domain values
 // range - takes the length that should be divided between the limits of the domain values
  const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

    chart.append('g')
      .call(d3.axisLeft(yScale));

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

  const makeYLines = () => d3.axisLeft().scale(yScale)

  chart.append('g')
        .attr('class', 'grid')
        .call(makeYLines()
        .tickSize(-width, 0, 0)
        .tickFormat(''))

  const barGroups = chart.selectAll()
      .data(totals)
      .enter()
      .append('g')

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

        barGroups.append('text')
          .attr('class', 'divergence')
          .attr('x', (d) => xScale(d.day) + xScale.bandwidth() / 2)
          .attr('y', (d) => yScale(d.killed) + 30)
          .attr('fill', 'white')
          .attr('text-anchor', 'middle')
          .text((d, idx) => {
            const divergence = (d.killed - actual.killed).toFixed(1)

            let text = ''
            if (divergence > 0) text += '+'
            text += `${divergence}`

            return idx !== i ? text : '';
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
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'middle')
      .text('Days in January')

    svg.append('text')
      .attr('class', 'title')
      .attr('x', width / 2 + margin)
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text('Gun Violence - JAN 2018')

    svg.append('text')
      .attr('class', 'source')
      .attr('x', width - margin / 2)
      .attr('y', height + margin * 1.7)
      .attr('text-anchor', 'start')
      .text('Source: Stack Overflow, 2018')

  });
});
