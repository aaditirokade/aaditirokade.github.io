
d3.json('data/newData_dvia_fp.json').then(function(data){
d3.json("https://d3js.org/us-10m.v1.json").then(function(us){
  d3.json('data/newCountryData_dvia_fp.json').then(function(con){
      d3.json('data/CountryNode.json').then(function(piechart){





//*********** PIE CHART1 **********************


var text_chart = "";

var width_chart = 600;
var height_chart = 600;
var thickness_chart = 60;
var duration_chart = 750;

var radius_chart = Math.min(width_chart, height_chart) / 2;
var color_chart = d3.scaleLinear()
          .domain([50, 0])
          .range(['#000000', '#99001a']);


var svg_chart = d3.select("#container_tree").append('svg').attr('id','svg_chart')
                  .attr('class', 'pie')
                  .attr('width', width_chart)
                  .attr('height', height_chart);


var g = svg_chart.append('g')
                 .attr('transform', 'translate(' + (width_chart/2)+ ',' + (height_chart/2) + ')');


var arc = d3.arc()
            .innerRadius(radius_chart - thickness_chart)
            .outerRadius(radius_chart);

var pie = d3.pie()
            .value((d,i) => { return +d.total_16; })
            .sort(function(a, b) { return b.total_16 - a.total_16; });


var path = g.selectAll('path')
            .data(pie(piechart.results))
            .enter()
            .append("g")
            .on("mouseover", function(d) {
                let g = d3.select(this)
                  .style("cursor", "pointer")
                  .style("fill", "black")
                  .append("g")
                  .attr("class", "text-group");

                  g.append("text")
                    .attr("class", "name-text")
                    .text(`${d.data.country}`)
                    .attr('text-anchor', 'middle')
                    .attr('dy', '-1.2em');

                  g.append("text")
                    .attr("class", "value-text")
                    .text(`${d.data.total_16}`)
                    .attr('text-anchor', 'middle')
                    .attr('dy', '.6em');
              })
              .on("mouseout", function(d) {
                  d3.select(this)
                    .style("cursor", "none")
                    .style("fill", color_chart(this._current))
                    .select(".text-group").remove();
                  })
              .append('path')
              .attr('d', arc)
              .attr('fill', (d,i) => color_chart(i))
              .style('stroke', 'transparent')
              .style('opacity',0.8)
              .on("mouseover", function(d) {
                  d3.select(this)
                    .style("cursor", "pointer")
                    .style("fill", "black");
              })
              .on("mouseout", function(d) {
                  d3.select(this)
                    .style("cursor", "none")
                    .style("fill", color_chart(this._current));
              })
              .each(function(d, i) { this._current = i; });

              g.append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', '.20em')
                .text('GUN VIOLENCE 2016')
                .attr('transform','translate(0,60)')


  //*********** CHART 1 **********************


      //margins
       const margin = 80;
       const width = 1000 - 2 * margin;
       const height = 500 - 2 * margin;


       const svg = d3.select('#container').append('svg').attr('id','svg1');

       const chart = svg.append('g').attr('transform', `translate(${margin}, ${margin})`);

       const yScale = d3.scaleLinear().range([height, 0]).domain([0, 6000]);
       chart.append('g').call(d3.axisLeft(yScale));

       const xScale = d3.scaleBand().range([0, width]).domain(data.results.map((d) => d.month)).padding(0.4)
       chart.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale))
                        .selectAll('text').attr("y", 0).attr("x", -30).attr("transform", "rotate(-45)");

      const makeYLines = () => d3.axisLeft().scale(yScale)
      chart.append('g').attr('class', 'grid').call(makeYLines().tickSize(-width, 0, 0).tickFormat(''))

      const barGroups = chart.selectAll().data(data.results).enter().append('g')
      barGroups.append('rect').attr('class', 'bar').attr("data-legend",function(d) { return d.country})
           .attr('x', (d) => xScale(d.month)).attr('y', (d) => yScale(d.n_incidents))
           .attr('height', (d) => height - yScale(d.n_incidents)).attr('width', xScale.bandwidth())
           .on('mouseenter', function (actual, i) {

                d3.selectAll('.n_incidents').attr('opacity', 0)

                d3.select(this).transition().duration(300)
                .attr('opacity', 0.6).attr('x', (d) => xScale(d.month) - 5).attr('width', xScale.bandwidth() + 10)

                const y = yScale(actual.n_incidents)

                line = chart.append('line').attr('id', 'limit')
                            .attr('x1', 0).attr('y1', y)
                            .attr('x2', width).attr('y2', y)

                barGroups.append('text').attr('class', 'divergence')
                .attr('x', (d) => xScale(d.month) + xScale.bandwidth()/2).attr('y', (d) => yScale(d.n_incidents) + 30)
                .attr('fill', 'white').attr('text-anchor', 'middle')
                .text((d, i) => {
                    const divergence = (d.n_incidents - actual.n_incidents);
                    let text = '';

                    if (divergence > 0) text += '+'
                    text += `${divergence}`
                    return i !== i ? text : '';
                })
            })
            .on('mouseleave', function () {
                     d3.selectAll('.n_incidents').attr('opacity', 1)

                     d3.select(this).transition().duration(300)
                       .attr('opacity', 1).attr('x', (a) => xScale(a.month)).attr('width', xScale.bandwidth())

                     chart.selectAll('#limit').remove()
                     chart.selectAll('.divergence').remove()
            })

          barGroups.append('text').attr('class', 'value')
                 .attr('x', (d) => xScale(d.month) + xScale.bandwidth() / 2)
                 .attr('y', (d) => yScale(d.n_incidents) + 30).attr('text-anchor', 'middle')
                 .text((d) => `${d.n_incidents}`)

         // LABELS
          svg.append('text').attr('class', 'label').attr('x', -(height / 2) - margin).attr('y', margin/2.4-20)
            .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('No. of incidents')

          svg.append('text').attr('class', 'label').attr('x', width / 2 + margin).attr('y', height+ margin+50 * 1.7)
             .attr('text-anchor', 'middle').text('Months')

          svg.append('text').attr('class', 'title').attr('x', width / 2 + margin).attr('y', 40)
            .attr('text-anchor', 'middle').text('Incidents: 2016-18')


//*********** CHART 2 : INJURED **********************

          const svg_injured = d3.select('#container_injured').append('svg').attr('id','svg_injured')
          const chart_injured = svg_injured.append('g').attr('transform', `translate(${margin}, ${margin})`);

          const yScale_injured = d3.scaleLinear().range([height, 0]).domain([0, 4000]);
          chart_injured.append('g').call(d3.axisLeft(yScale_injured));

          const xScale_injured = d3.scaleBand().range([0, width]).domain(data.results.map((d) => d.month)).padding(0.4)

          chart_injured.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale_injured))
                                  .selectAll('text').attr("y", 0).attr("x", -30).attr("transform", "rotate(-45)");

          const makeYLines_injured = () => d3.axisLeft().scale(yScale_injured)

          chart_injured.append('g').attr('class', 'grid').call(makeYLines_injured().tickSize(-width, 0, 0).tickFormat(''))
          const barGroups_injured = chart_injured.selectAll().data(data.results).enter().append('g')

          barGroups_injured.append('rect').attr('class', 'bar_injured')
                       .attr('x', (d) => xScale_injured(d.month)).attr('y', (d) => yScale_injured(d.n_injured))
                       .attr('height', (d) => height - yScale_injured(d.n_injured)).attr('width', xScale_injured.bandwidth())
                       .on('mouseenter', function (actual, i) {

                            d3.selectAll('.n_injured').attr('opacity', 0)
                            d3.select(this).transition().duration(300)
                              .attr('opacity', 0.6)
                              .attr('x', (d) => xScale_injured(d.month) - 5)
                              .attr('width', xScale_injured.bandwidth() + 10)

                            const y_injured = yScale_injured(actual.n_injured)
                            line_injured = chart_injured.append('line').attr('id', 'limit_injured')
                                                        .attr('x1', 0).attr('y1', y_injured)
                                                        .attr('x2', width).attr('y2', y_injured)

                            barGroups_injured.append('text').attr('class', 'divergence')
                            .attr('x', (d) => xScale_injured(d.month) + xScale_injured.bandwidth()/2).attr('y', (d) => yScale_injured(d.n_injured) + 30)
                            .attr('fill', 'white').attr('text-anchor', 'middle')
                            .text((d, i) => {

                                const divergence_injured = (d.n_injured - actual.n_injured)
                                let text_injured = ''
                                if (divergence_injured > 0) text_injured += '+'
                                text_injured += `${divergence_injured}`
                                return i !== i ? text_injured : '';
                            })
                          })
                          .on('mouseleave', function () {

                                 d3.selectAll('.n_injured').attr('opacity', 1)

                                 d3.select(this).transition().duration(300)
                                   .attr('opacity', 1).attr('x', (a) => xScale_injured(a.month))
                                   .attr('width', xScale_injured.bandwidth())

                                 chart_injured.selectAll('#limit_injured').remove()
                                 chart_injured.selectAll('.divergence').remove()
                            })

      barGroups_injured.append('text').attr('class', 'value')
              .attr('x', (d) => xScale_injured(d.month) + xScale_injured.bandwidth() / 2)
              .attr('y', (d) => yScale_injured(d.n_injured) + 30)
              .attr('text-anchor', 'middle').text((d) => `${d.n_injured}`)


          //*********** CHART 2 : KILLED **********************
          barGroups_injured.append('rect').attr('class', 'bar_killed')
              .attr('x', (d) => xScale_injured(d.month)).attr('y', (d) => yScale_injured(d.n_killed))
              .attr('height', (d) => height - yScale_injured(d.n_killed)).attr('width', xScale_injured.bandwidth()/2)
              .on('mouseenter', function (actual, i) {

                        d3.selectAll('.n_killed').attr('opacity', 0)
                        d3.select(this).transition().duration(300).attr('opacity', 0.6)
                          .attr('x', (d) => xScale_injured(d.month) - 5)
                          .attr('width', xScale_injured.bandwidth() + 10)

                      const y_killed = yScale_injured(actual.n_killed)
                      line_killed = chart_injured.append('line').attr('id', 'limit_killed')
                        .attr('x1', 0).attr('y1', y_killed)
                        .attr('x2', width).attr('y2', y_killed)

                      barGroups_injured.append('text').attr('class', 'divergence_killed')
                        .attr('x', (d) => xScale_injured(d.month) + xScale_injured.bandwidth()/2)
                        .attr('y', (d) => yScale_injured(d.n_killed) + 30)
                        .attr('fill', 'white').attr('text-anchor', 'middle')
                        .text((d, i) => {

                            const divergence_killed = (d.n_killed - actual.n_killed)
                            let text_killed = ''
                            if (divergence_killed > 0) text_killed += '+'
                            text_killed += `${divergence_killed}`
                            return i !== i ? text_killed : '';
                        })
                    })
                    .on('mouseleave', function () {

                             d3.selectAll('.n_killed').attr('opacity', 1)
                             d3.select(this).transition().duration(300).attr('opacity', 1)
                               .attr('x', (a) => xScale_injured(a.month))
                               .attr('width', xScale_injured.bandwidth()/2)

                             chart_injured.selectAll('#limit_killed').remove()
                             chart_injured.selectAll('.divergence_killed').remove()
                        })


          barGroups_injured.append('text').attr('class', 'value')
                  .attr('x', (d) => xScale_injured(d.month) + xScale_injured.bandwidth() / 2)
                  .attr('y', (d) => yScale_injured(d.n_killed) + 30)
                  .attr('text-anchor', 'middle').text((d) => `${d.n_killed}`)

          svg_injured.append('text').attr('class', 'label').attr('x', -(height / 2) - margin)
                  .attr('y', margin / 2.4-20).attr('transform', 'rotate(-90)')
                  .attr('text-anchor', 'middle').text('Injured-Killed')

          svg_injured.append('text').attr('class', 'label').attr('x', width / 2 + margin)
                  .attr('y', height+40+ margin * 1.7).attr('text-anchor', 'middle').text('Months')

          svg_injured.append('text').attr('class', 'title').attr('x', width / 2 + margin+50).attr('y', 40)
                        .attr('text-anchor', 'middle').text('Aftermath: 2016-18')



// *********************** CHART 3 : GENDER *******************************

//*********** CHART 3 : MALE **********************

          const svg_gender = d3.select('#container_gender').append('svg').attr('id','svg_gender')
          const chart_gender = svg_gender.append('g').attr('transform', `translate(${margin}, ${margin})`);

          const yScale_gender = d3.scaleLinear().range([height, 0]).domain([0, 8000]);
          chart_gender.append('g').call(d3.axisLeft(yScale_gender));

          const xScale_gender = d3.scaleBand().range([0, width]).domain(data.results.map((d) => d.month)).padding(0.4)

          chart_gender.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale_gender))
                                  .selectAll('text').attr("y", 0).attr("x", -30).attr("transform", "rotate(-45)");

          const makeYLines_gender = () => d3.axisLeft().scale(yScale_gender)

          chart_gender.append('g').attr('class', 'grid').call(makeYLines_gender().tickSize(-width, 0, 0).tickFormat(''))
          const barGroups_gender = chart_gender.selectAll().data(data.results).enter().append('g')

          barGroups_gender.append('rect').attr('class', 'bar_gender')
                       .attr('x', (d) => xScale_gender(d.month)).attr('y', (d) => yScale_gender(d.male))
                       .attr('height', (d) => height - yScale_gender(d.male)).attr('width', xScale_gender.bandwidth())
                       .on('mouseenter', function (actual, i) {

                            d3.selectAll('.male').attr('opacity', 0)
                            d3.select(this).transition().duration(300)
                              .attr('opacity', 0.6)
                              .attr('x', (d) => xScale_gender(d.month) - 5)
                              .attr('width', xScale_gender.bandwidth() + 10)

                            const y_gender = yScale_gender(actual.male)
                            line_gender = chart_gender.append('line').attr('id', 'limit_gender')
                                                        .attr('x1', 0).attr('y1', y_gender)
                                                        .attr('x2', width).attr('y2', y_gender)

                            barGroups_gender.append('text').attr('class', 'divergence')
                            .attr('x', (d) => xScale_gender(d.month) + xScale_gender.bandwidth()/2).attr('y', (d) => yScale_gender(d.male) + 30)
                            .attr('fill', 'white').attr('text-anchor', 'middle')
                            .text((d, i) => {

                                const divergence_gender = (d.male - actual.male)
                                let text_gender = ''
                                if (divergence_gender > 0) text_gender += '+'
                                text_gender += `${divergence_gender}`
                                return i !== i ? text_gender : '';
                            })
                          })
                          .on('mouseleave', function () {

                                 d3.selectAll('.male').attr('opacity', 1)

                                 d3.select(this).transition().duration(300)
                                   .attr('opacity', 1).attr('x', (a) => xScale_gender(a.month))
                                   .attr('width', xScale_gender.bandwidth())

                                 chart_gender.selectAll('#limit_gender').remove()
                                 chart_gender.selectAll('.divergence').remove()
                            })

          barGroups_gender.append('text').attr('class', 'value')
                  .attr('x', (d) => xScale_gender(d.month) + xScale_gender.bandwidth() / 2)
                  .attr('y', (d) => yScale_gender(d.male) + 30)
                  .attr('text-anchor', 'middle').text((d) => `${d.male}`)


          //*********** CHART 3 : FEMALE **********************
          barGroups_gender.append('rect').attr('class', 'bar_female')
              .attr('x', (d) => xScale_gender(d.month)).attr('y', (d) => yScale_gender(d.female+d.male))
              .attr('height', (d) => height - yScale_gender(d.female)).attr('width', xScale_gender.bandwidth())
              .on('mouseenter', function (actual, i) {

                        d3.selectAll('.female').attr('opacity', 0)
                        d3.select(this).transition().duration(300).attr('opacity', 0.6)
                          .attr('x', (d) => xScale_gender(d.month) - 5)
                          .attr('width', xScale_gender.bandwidth() + 10)

                      const y_female = yScale_gender(actual.female)
                      line_female = chart_gender.append('line').attr('id', 'limit_female')
                        .attr('x1', 0).attr('y1', y_female)
                        .attr('x2', width).attr('y2', y_female)

                      barGroups_gender.append('text').attr('class', 'divergence_female')
                        .attr('x', (d) => xScale_gender(d.month) + xScale_gender.bandwidth()/2)
                        .attr('y', (d) => yScale_gender(d.female) + 30)
                        .attr('fill', 'white').attr('text-anchor', 'middle')
                        .text((d, i) => {

                            const divergence_female = (d.female - actual.female)
                            let text_female = ''
                            if (divergence_female > 0) text_female += '+'
                            text_female += `${divergence_female}`
                            return i !== i ? text_female : '';
                        })
                    })
                    .on('mouseleave', function () {

                             d3.selectAll('.female').attr('opacity', 1)
                             d3.select(this).transition().duration(300).attr('opacity', 1)
                               .attr('x', (a) => xScale_gender(a.month))
                               .attr('width', xScale_gender.bandwidth())

                             chart_gender.selectAll('#limit_female').remove()
                             chart_gender.selectAll('.divergence_female').remove()
                        })


          barGroups_gender.append('text').attr('class', 'value')
                  .attr('x', (d) => xScale_gender(d.month) + xScale_gender.bandwidth() / 2)
                  .attr('y', (d) => yScale_gender(d.female+d.male) + 30)
                  .attr('text-anchor', 'middle').text((d) => `${d.female}`)

          svg_gender.append('text').attr('class', 'label').attr('x', -(height / 2) - margin)
                  .attr('y', margin / 2.4-20).attr('transform', 'rotate(-90)')
                  .attr('text-anchor', 'middle').text('males-females')

          svg_gender.append('text').attr('class', 'label').attr('x', width / 2 + margin)
                  .attr('y', height+40+ margin * 1.7).attr('text-anchor', 'middle').text('Months')

          svg_gender.append('text').attr('class', 'title').attr('x', width / 2 + margin).attr('y', 40)
                        .attr('text-anchor', 'middle').text('Participants\': GENDER')



// *********************** CHART 4 : AGE  *******************************

      //*********** CHART 4 : ADULTS **********************

          const svg_age = d3.select('#container_age').append('svg').attr('id','svg_age')
          const chart_age = svg_age.append('g').attr('transform', `translate(${margin}, ${margin})`);

          const yScale_age = d3.scaleLinear().range([height, 0]).domain([0, 8000]);
          chart_age.append('g').call(d3.axisLeft(yScale_age));

          const xScale_age = d3.scaleBand().range([0, width]).domain(data.results.map((d) => d.month)).padding(0.4)

          chart_age.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(xScale_age))
                                  .selectAll('text').attr("y", 0).attr("x", -30).attr("transform", "rotate(-45)");

          const makeYLines_age = () => d3.axisLeft().scale(yScale_age)

          chart_age.append('g').attr('class', 'grid').call(makeYLines_age().tickSize(-width, 0, 0).tickFormat(''))
          const barGroups_age = chart_age.selectAll().data(data.results).enter().append('g')

          barGroups_age.append('rect').attr('class', 'bar_age')
                       .attr('x', (d) => xScale_age(d.month)).attr('y', (d) => yScale_age(d.adult))
                       .attr('height', (d) => height - yScale_age(d.adult)).attr('width', xScale_age.bandwidth())
                       .on('mouseenter', function (actual, i) {

                            d3.selectAll('.adult').attr('opacity', 0)
                            d3.select(this).transition().duration(300)
                              .attr('opacity', 0.6)
                              .attr('x', (d) => xScale_age(d.month) - 5)
                              .attr('width', xScale_age.bandwidth() + 10)

                            const y_age = yScale_age(actual.adult)
                            line_age = chart_age.append('line').attr('id', 'limit_age')
                                                        .attr('x1', 0).attr('y1', y_age)
                                                        .attr('x2', width).attr('y2', y_age)

                            barGroups_age.append('text').attr('class', 'divergence')
                            .attr('x', (d) => xScale_age(d.month) + xScale_age.bandwidth()/2).attr('y', (d) => yScale_age(d.adult) + 30)
                            .attr('fill', 'white').attr('text-anchor', 'middle')
                            .text((d, i) => {

                                const divergence_age = (d.adult - actual.adult)
                                let text_age = ''
                                if (divergence_age > 0) text_age += '+'
                                text_age += `${divergence_age}`
                                return i !== i ? text_age : '';
                            })
                          })
                          .on('mouseleave', function () {

                                 d3.selectAll('.male').attr('opacity', 1)

                                 d3.select(this).transition().duration(300)
                                   .attr('opacity', 1).attr('x', (a) => xScale_age(a.month))
                                   .attr('width', xScale_age.bandwidth())

                                 chart_age.selectAll('#limit_age').remove()
                                 chart_age.selectAll('.divergence').remove()
                            })

          barGroups_age.append('text').attr('class', 'value')
                  .attr('x', (d) => xScale_age(d.month) + xScale_age.bandwidth() / 2)
                  .attr('y', (d) => yScale_age(d.adult) + 30)
                  .attr('text-anchor', 'middle').text((d) => `${d.adult}`)


  //*********** CHART 4 : TEEN **********************

          barGroups_age.append('rect').attr('class', 'bar_teen')
              .attr('x', (d) => xScale_age(d.month)).attr('y', (d) => yScale_age(d.teen+d.adult))
              .attr('height', (d) => height - yScale_age(d.teen)).attr('width', xScale_age.bandwidth())
              .on('mouseenter', function (actual, i) {

                        d3.selectAll('.teen').attr('opacity', 0)
                        d3.select(this).transition().duration(300).attr('opacity', 0.6)
                          .attr('x', (d) => xScale_gender(d.month) - 5)
                          .attr('width', xScale_age.bandwidth() + 10)

                      const y_teen = yScale_age(actual.teen)
                      line_teen = chart_age.append('line').attr('id', 'limit_teen')
                        .attr('x1', 0).attr('y1', y_teen)
                        .attr('x2', width).attr('y2', y_teen)

                      barGroups_age.append('text').attr('class', 'divergence_age')
                        .attr('x', (d) => xScale_age(d.month) + xScale_age.bandwidth()/2)
                        .attr('y', (d) => yScale_age(d.teen) + 30)
                        .attr('fill', 'white').attr('text-anchor', 'middle')
                        .text((d, i) => {

                            const divergence_teen = (d.teen - actual.teen)
                            let text_teen = ''
                            if (divergence_teen > 0) text_teen += '+'
                            text_teen += `${divergence_teen}`
                            return i !== i ? text_teen : '';
                        })
                    })
                    .on('mouseleave', function () {

                             d3.selectAll('.teen').attr('opacity', 1)
                             d3.select(this).transition().duration(300).attr('opacity', 1)
                               .attr('x', (a) => xScale_age(a.month))
                               .attr('width', xScale_age.bandwidth())

                             chart_age.selectAll('#limit_teen').remove()
                             chart_age.selectAll('.divergence_teen').remove()
                        })


          barGroups_age.append('text').attr('class', 'value')
                  .attr('x', (d) => xScale_age(d.month) + xScale_age.bandwidth() / 2)
                  .attr('y', (d) => yScale_age(d.teen+d.adult+300) + 30)
                  .attr('text-anchor', 'middle').text((d) => `${d.teen}`)



  //*********** CHART 4 : CHILD **********************

                  barGroups_age.append('rect').attr('class', 'bar_child')
                      .attr('x', (d) => xScale_age(d.month)).attr('y', (d) => yScale_age(d.child+d.teen+d.adult))
                      .attr('height', (d) => height - yScale_age(d.child)).attr('width', xScale_age.bandwidth())
                      .on('mouseenter', function (actual, i) {

                                d3.selectAll('.child').attr('opacity', 0)
                                d3.select(this).transition().duration(300).attr('opacity', 0.6)
                                  .attr('x', (d) => xScale_gender(d.month) - 5)
                                  .attr('width', xScale_age.bandwidth() + 10)

                              const y_child = yScale_age(actual.child)
                              line_child = chart_age.append('line').attr('id', 'limit_child')
                                .attr('x1', 0).attr('y1', y_child)
                                .attr('x2', width).attr('y2', y_child)

                              barGroups_age.append('text').attr('class', 'divergence_age')
                                .attr('x', (d) => xScale_age(d.month) + xScale_age.bandwidth()/2)
                                .attr('y', (d) => yScale_age(d.child) + 30)
                                .attr('fill', 'white').attr('text-anchor', 'middle')
                                .text((d, i) => {

                                    const divergence_child = (d.child - actual.child)
                                    let text_child = ''
                                    if (divergence_child > 0) text += '+'
                                    text_child += `${divergence_child}`
                                    return i !== i ? text_child : '';
                                })
                            })
                            .on('mouseleave', function () {

                                     d3.selectAll('.child').attr('opacity', 1)
                                     d3.select(this).transition().duration(300).attr('opacity', 1)
                                       .attr('x', (a) => xScale_age(a.month))
                                       .attr('width', xScale_age.bandwidth())

                                     chart_age.selectAll('#limit_child').remove()
                                     chart_age.selectAll('.divergence_child').remove()
                                })


                  barGroups_age.append('text').attr('class', 'value_child')
                          .attr('x', (d) => xScale_age(d.month) + xScale_age.bandwidth() / 2)
                          .attr('y', (d) => yScale_age(d.child+d.teen+d.adult+700) + 30)
                          .attr('text-anchor', 'middle').text((d) => `${d.child}`)

                  svg_age.append('text').attr('class', 'label').attr('x', -(height / 2) - margin)
                          .attr('y', margin / 2.4-20).attr('transform', 'rotate(-90)')
                          .attr('text-anchor', 'middle').text('Adults-teens-children')

                  svg_age.append('text').attr('class', 'label').attr('x', width / 2 + margin)
                          .attr('y', height+40+ margin * 1.7).attr('text-anchor', 'middle').text('Months')

                  svg_age.append('text').attr('class', 'title').attr('x', width / 2 + margin).attr('y', 40)
                                .attr('text-anchor', 'middle').text('Participants\': AGE')


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

            svg2.append('text').attr('class', 'label').attr('x', -(height / 2) - margin).attr('y', margin / 2.4-20)
                       .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('No. of Incidents')

            svg2.append('text').attr('class', 'label').attr('x', width / 2 + margin+100)
                         .attr('y', height+180 + margin * 1.7).attr('text-anchor', 'middle').text('States')

            svg2.append('text').attr('class', 'title').attr('x', width / 2 + margin+50).attr('y', 40).attr('text-anchor', 'middle')
                              .text('Incidents: 2016')



//************** chart3 *****************


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

                svg3.append('text').attr('class', 'label').attr('x', -(height / 2) - margin).attr('y', margin / 2.4-20)
                           .attr('transform', 'rotate(-90)').attr('text-anchor', 'middle').text('No. of Incidents')

                svg3.append('text').attr('class', 'label').attr('x', width / 2 + margin+100)
                             .attr('y', height+180 + margin * 1.7).attr('text-anchor', 'middle').text('States')

                svg3.append('text').attr('class', 'title').attr('x', width / 2 + margin+50).attr('y', 40).attr('text-anchor', 'middle')
                                  .text('Incidents: 2017')



  });
});
});
});
