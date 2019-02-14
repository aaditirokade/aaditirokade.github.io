

d3.json("data/us-state-centroids.json").then(function(states){
d3.json("https://d3js.org/us-10m.v1.json").then(function(us){
d3.json('data/GunEvents2018JANshort.json').then(function(data){
  d3.json('data/GunJan2018totals.json').then(function(totals){

// console.log(states);
// console.log(states.features[0].properties.name);


  //*********** CHART 1 **********************

        const svg = d3.select('svg').attr('width', window.innerWidth)
        const svgContainer = d3.select('#container');

        //margins
         const margin = 120;
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
            .attr('y', height-20+ margin * 1.7)
            .attr('text-anchor', 'middle')
            .text('Days of January')

          svg.append('text')
            .attr('class', 'title')
            .attr('x', width / 2 + margin)
            .attr('y', 40)
            .attr('text-anchor', 'middle')
            .text('Gun Violence - JAN 2018')


//************** chart2 *****************

          const chart2 = svg.append('g').attr('transform', `translate(${margin}, ${margin+450})`);
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
                         .attr('y', height+470+ margin * 1.7).attr('text-anchor', 'middle').text('Days of January')



        // // ************* ACCESS DATA using D3JS
        // for(i=0;i<data.results.length;i++){
        //
        //   // console.log((data.results[i].participant_gender));
        //
        //   var regrex = /::/gi; var regrexx = /||/gi; var regrexxx = /1/gi;
        //   // console.log((data.results[i].participant_gender).replace(regrex,'').replace('||','').replace('||','').replace('||','').replace('0','').replace('1',' ').replace('2',' ').split(' '));
        //
        //   // console.log(data.results[i].congressional_district);
        //   // console.log(data.results[i].n_guns_involved);
        //   //
        //   // console.log(data.results[i].state);
        //
        // }


        //************** MAP ***************
        // var svgMap = d3.select('#mapid').append("svg");

        var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

        var svgMap = d3.select('#mapid').append('svg').attr('width',500).attr('height',300);
        var path = d3.geoPath();


            svgMap.append("g")
                .attr("class", "states")
                .selectAll("path")
                .data(topojson.feature(us, us.objects.states).features)
                .enter().append("path")
                .attr("d", path)
                .on("mouseover", function(d) {
                    tooltip.transition()
                    .duration(200)
                    .style("opacity", .9);
                    tooltip.html(data.results[0].state)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
                    tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
                })
                .on("click", function(d) {
                  console.log(d);
                });
                // .attr('mouseenter', (data) =>{
                //   console.log(us.objects.states);
                //   // console.log(data.results[i].state);
                // })

            svgMap.append("path")
                .attr("class", "state-borders")
                .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));

//**************** MAP *********************

var mymap = L.map('map',{
      attributionControl: false, // attribution to leaflet
      zoomControl: false,
      doubleClickZoom: true,
      //renderer: L.canvas()
      //preferCanvas: true,
      // center: [51.505, -0.09],  //centers the map around this while loading
      center: [39.82, -98.58],
      zoom: 4,
      minZoom: 2,
      maxZoom: 19
});


var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoomzoom: 9
}).addTo(mymap);

var svg2 = d3.select("#map").select("svg")
var g = svg2.append("g");


   // console.log(data.results);

    for(var i=0; i<10; i++){

           var circle = L.circle([data.results[i].latitude, data.results[i].longitude], {
              color: 'red',      // the dot stroke color
              fillColor: '#FF2459', // the dot fill color
              fillOpacity: 0.8,  // use some transparency so we can see overlaps
              radius: 20
              // info: table.getRow(i)
            }).addTo(mymap);
    }

    //************ viz 3 **************

    // var statesNames = states.map(function(d,i) { console.log(d.features[i].properties.name);return d.features[i].properties.name; });
    // console.log(statesNames.length);

    var wid = 960,
    hei = 700,
    barHeight = hei / 2 - 40;

    var formatNumber = d3.format("s");
    //
    // var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


    console.log(states);
    // console.log(data.results[0].state);

    var satteNames= [];
    var nyCounter=0;



    for(i=0;i<states.features.length;i++){

       console.log(states.features[i].properties.name);
       satteNames.push(states.features[i].properties.name);

    }

    console.log(satteNames);
    var numBarsStates = statesNames.length;
    // console.log(numBarsStates);


      // console.log(data.results[i].state);

       // var filteredID = states.filter((data) => {
       //                         var ct = states.features[i].properties.name;
       //                         console.log(ct);
       //                         console.log(states);
       //                         return data.results[i].state === ct;
       //                   });
    // var nyc = getFrequency('Alabama'); var nj = getFrequency('Alaska'); var nyc = getFrequency('New York');var nj = getFrequency('New Jersey');

    var incidentCount = [];

    for(i=0; i<stateNames.length; i++){

      incidentCount.push(getFrequency(stateNames[i]));
    }

    console.log('incidentCount');  console.log(incidentCount);


    function getFrequency(stateName){
      var counter = 0;
      for(i=0;i<states.features.length;i++){

            if(data.results[i].state === stateName)
              counter+=1;
        }
        return counter;
     }

     // console.log(nyc);  console.log(nj);










    // var radviz = d3.select('radviz').append('svg').attr('width',960).attr('height',500);

    // var radviz = d3.select('radviz').append("svg")
    // .attr("width", wid)
    // .attr("height", hei)
    // .append("g")
    // .attr("transform", "translate(" + wid/2 + "," + hei/2 + ")");
    //
    //
    // var barScale = d3.scale.linear()
    //   .domain([0, d3.max(data, function(d) { return d3.max(d.killed, function(d) { return d.killed; }); })])
    //   .range([0, barHeight]);




  });
});

});
});
