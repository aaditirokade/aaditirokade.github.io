
// MAIN SKETCH : INDEX HTML 

  // GET BOTH DATA FILES
  d3.json('africa.geo.json').then((geojson) => {
        d3.json('data/allENERGYData.json').then((eng) => {
           d3.json('data/allPOPData1.json').then((pop) => {
            
            // MAPBOX ACCESS TOKEN
            mapboxgl.accessToken = 'pk.eyJ1IjoiYWFkaXRpcm9rYWRlMSIsImEiOiJjam5vdHA1NDIwMDl3M2pudmp2N3VnNjFuIn0.365E4Awu0MI2iuzZbYmaSQ';

            
            // LOAD NEW MAP1
            let map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/aaditirokade1/cjo95e47201fd2stfs0ywz2pq',
                center: [18.2812, 9.1021], // 9.1021° N, 18.2812° E
                zoom: 2
            });
        
            // NAV CONTROLS FOR NEW MAP (+,- and rotate buttons)
            //map.addControl(new mapboxgl.NavigationControl());
            
            // CONTAINER
            let container = map.getCanvasContainer()
            
            // ADD SVG TO CONTAINER
            let svg = d3.select(container).append("svg")
        
        
            // https://bl.ocks.org/Andrew-Reid/496078bd5e37fd22a9b43fd6be84b36b
        	// https://github.com/d3/d3-geo/blob/master/README.md
        	let transform = d3.geoTransform({point: projectPoint}); 
        
            // https://github.com/d3/d3-3.x-api-reference/blob/master/Geo-Paths.md
        	let path = d3.geoPath().projection(transform); 
        
            // TOOLTIP DIV
            var div = d3.select('body').append('div').attr('class','tooltip');
                         
            // MAP SCALE
            var scale = new mapboxgl.ScaleControl({
                maxWidth: 80, 
                unit: 'imperial' });
                map.addControl(scale);
                scale.setUnit('metric');
             
            // SVG OVERLAY   
         	let featureElement = svg.selectAll("path")
        		.data(geojson.features).enter()
                .append("path").attr("d", d3.geoPath().projection(transform))
                .attr("stroke", "none").attr("fill", "lightgray")
                // .attr("fill-opacity", (d)=> {return (d.properties.pop_est/20000000).toFixed(2)})
                .attr("fill-opacity", 0.2)
                .on('mouseover', function(d) {
                    
                    // FILTER    
                       var filteredPop = pop.filter((singleEng) => {
                            var ct = d.properties.name;
                            return singleEng.countryName === ct;
                        });
     
                   d3.select(this).attr("fill", "#11a9cc")
                   d3.select(this).attr("fill-opacity", 0.5)
  
                        // TOOLTIP
                        div.transition().duration(150).style("opacity", 1).style("visibility", 'visible');
                        
                        // var text = d.properties.name.toUpperCase()+'\n'+(filteredPop[0].ppur2016).toFixed(2)+' % <br>';
                        // text += 'world';
                        
                            div.html( filteredPop[0].countryName.toUpperCase() + '<br> RURAL : '+ filteredPop[0].pru2016 + '<br>URBAN : '+ filteredPop[0].pur2016)
                           .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                })
                .on('click', function(e, i) {
                     
                     map.flyTo({
                        //  center: e.geometry.coordinates[0][0],
                         center: e.lngLat,
                         zoom: 4
                     });

                    d3.select('body').attr('id','detail');
                    plot(e.properties.brk_a3);
                    
                    document.getElementById('labell').style.visibility = "hidden";
                    document.getElementById('map2').style.visibility = "hidden";
                      
                })
                .on('mouseout', function() {
                    
                    d3.select(this).attr("fill", "lightgray");
                    d3.select(this).attr("fill-opacity", 0.2);
                    //d3.select("#hover").text()
                    
                    div.transition().duration(300).style("opacity", 1).style("visibility", 'hidden');
                    
                })
                .on('mousemove', function(d) {
                    d3.select("#hover")
                        .attr('x', function() { return d3.mouse(this)[0] + 20; })
                        .attr('y', function() { return d3.mouse(this)[1] + 10; });
                        
                     div.transition().duration(300).style("opacity", 1).style("visibility", 'visible');
                });
                
            
            // UPDATES SVG (map overlay) with the base map
            function update() {featureElement.attr("d", path);}
        
            
            map.on("viewreset", update);
            map.on("movestart", function(){ svg.classed("hidden", true); });
            map.on("rotate", function(){ svg.classed("hidden", true); });
            map.on("moveend", function(){ update();svg.classed("hidden", false); });
        
            update();
        
        	function projectPoint(lon, lat) {
                let point = map.project(new mapboxgl.LngLat(lon, lat));
        		this.stream.point(point.x, point.y);
        	}
  
        
        // // MAP1 TOGGLE BUTTONS
        // var urbanButton = d3.select("#map").append('button').attr('id','urbtn1').text('URBAN')
        // urbanButton.on('click', function() { console.log('here here'); })
        // var ruralButton = d3.select("#map").append('button').attr('id','rubtn1').text('RURAL')
        // ruralButton.on('click', function() { console.log('here here'); })
        
        
        d3.select("body").append('text').attr('id','labell')
                .text('Exploring connections and trends in access to electricity, net migration and population for Africa (2012-16)').attr("font-family", "sans-serif")
                .style("font-size", 18).style("fill", "white").style("font-weight", 'bold');
        
        d3.select("#map").append('text').attr('id','label1')
                .text('% POPULATION : 2016').attr("font-family", "sans-serif")
                .style("font-size", 18).style("fill", "white").style("font-weight", 'bold');
                
        d3.select("#map2").append('text').attr('id','label2')
                .text('% ACCESS TO ELECTRICITY : 2016').attr("font-family", "sans-serif")
                .style("font-size", 18).style("fill", "white").style("font-weight", 'bold');
  
  
      // ***********************  MAP2 ****************************
      
            let map2 = new mapboxgl.Map({
                container: 'map2',
                style: 'mapbox://styles/aaditirokade1/cjo95e47201fd2stfs0ywz2pq',
                center: [18.2812, 9.1021], // 9.1021° N, 18.2812° E
                zoom: 2
            });
        
            //NAV CONTROLS (+,-, rotate)
            //map2.addControl(new mapboxgl.NavigationControl());
            
            // ADD CONTAINER
            let container2 = map2.getCanvasContainer();
            
            // ADD SVG TO CONTAINER
            let svg2 = d3.select(container2).append("svg")
        
        	let transform2 = d3.geoTransform({point: projectPoint2}); 
        	// https://bl.ocks.org/Andrew-Reid/496078bd5e37fd22a9b43fd6be84b36b
        	//https://github.com/d3/d3-geo/blob/master/README.md
        	
        	let path2 = d3.geoPath().projection(transform2); // https://github.com/d3/d3-3.x-api-reference/blob/master/Geo-Paths.md
            
                
            // SCALE
            var scale2 = new mapboxgl.ScaleControl({
                maxWidth: 80,
                 unit: 'imperial'
                    });
                map2.addControl(scale2);
                scale2.setUnit('metric');

                
         	let featureElement2 = svg2.selectAll("path")
        		.data(geojson.features)
        		.enter()
                .append("path")
                .attr("d", d3.geoPath().projection(transform2))
                .attr("stroke", "none")
                .attr("fill", "lightgray")
                //(d)=> {return (d.properties.pop_est/20000000).toFixed(2)}
                .attr("fill-opacity", 0.2)
                .on('mouseover', function(d) {
                    d3.select(this).attr("fill", "#f4b400").attr('fill-opacity', 0.5);
                    
                    // FILTER    
                       var filteredEng = eng.filter((singleEng) => {
                            var ct = d.properties.name;
                            return singleEng.countryName === ct;
                        });
                        
               
                    // TOOLTIP
                    div.transition().duration(150).style("opacity", 1).style("visibility", 'visible');
                        
                        div.html(d.properties.name.toUpperCase()+"<br> URBAN : "+ filteredEng[0].eleUrban2016.toFixed(2) +' %'+"<br> RURAL : " + filteredEng[0].eleRural2016.toFixed(2)+' %'+"<br> TOTAL : " + filteredEng[0].eleTotal2016.toFixed(2))	
                          .style("left", (d3.event.pageX) + "px")		
                          .style("top", (d3.event.pageY - 28) + "px");
                })
                 .on('click', function(e, i) {
                      document.getElementById('labell').style.visibility = "hidden";
                      
                     map2.flyTo({
                        //  center: e.geometry.coordinates[0][0],
                         center: e.lngLat,
                         zoom: 4
                     });
                
                    d3.select('body').attr('id','detail');
                    plot(e.properties.brk_a3);  
                      
                })
                .on('mouseout', function() {
                    d3.select(this).attr("fill", "lightgray");
                    d3.select(this).attr("fill-opacity", 0.2);
                div.transition().duration(300).style("opacity", 1).style("visibility", 'hidden');

                })
                .on('mousemove', function(d) {
                    d3.select("#hover2")
                        .attr('x', function() { return d3.mouse(this)[0] + 20; })
                        .attr('y', function() { return d3.mouse(this)[1] + 10; });
                     div.transition().duration(300).style("opacity", 1).style("visibility", 'visible');

                });
        
    
                   
            svg2.append("text")
                .attr('id', 'hover2');
        
            function update2() {
                featureElement2.attr("d", path2);
            }
        
        	
            map2.on("viewreset", update2)
            map2.on("movestart", function(){
        		svg2.classed("hidden", true);
        	});
            map2.on("rotate", function(){
        		svg2.classed("hidden", true);
        	});
        	
            map2.on("moveend", function(){
        		update2();
        		svg2.classed("hidden", false);
        	})
        
            update2();
            
            function projectPoint2(lon, lat) {
                let point = map2.project(new mapboxgl.LngLat(lon, lat));
        		this.stream.point(point.x, point.y);
        	}
      
          
        // var urbanButton2 = d3.select("#map2").append('button').attr('id','urbtn2').text('URBAN')
        //     urbanButton2.on('click', function() { console.log('here here'); })
        
        
        // var ruralButton2 = d3.select("#map2").append('button').attr('id','rubtn2').text('RURAL')
        //     ruralButton2.on('click', function() { console.log('here here'); })
          
       }); 
  });
 
  }); 
