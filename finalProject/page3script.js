                // COLOR PALETTES
                // ACCESS TO ELECTRICITY : // 2012: #ffe168, 2013: #fbcb43, 2014: #f4b400, 2015: #eca403, 2016: #e49307
                // POPULATION : // 2012: #94d8e8, 2013: #4dbfd9, 2014: #11a9cc, 2015: #15a0d9, 2016: #1c91d0
                
                
                
                
                d3.select('body').append('div').attr("class","heading2").append('text').text('ACCESS TO ELECTRICITY & POPULATION DISTRIBUTION : URBAN & RURAL AFRICA ').attr('class','title')
                
                var urbanButton4 = d3.select('body').append('button').attr('class','btn').attr('id','urbtn4').text('URBAN')
                urbanButton4.on('click', function() { var inText = this.innerText; barChart(inText); })
                
                var ruralButton4 = d3.select('body').append('button').attr('class','btn').attr('id','rubtn4').text('RURAL')
                ruralButton4.on('click', function() { var inText = this.innerText; console.log(inText); barChart(inText); })
                
                // VIEW ALL LINK   
  
                
                // DIVISION LABELS
                var label = d3.select('body').append('svg').attr('width',window.innerWidth).attr('height','20%')
                label.append('text').attr('x','32%').attr('y','60%').attr('class','leftlabel').text('% POPULATION DISTRIBUTION').style('fill','white').style('font-size','14px')
                label.append('text').attr('x','55%').attr('y','60%').attr('class','rightlabel').text('% ACCESS TO ELECTRICITY').style('fill','white').style('font-size','14px')
                
                // POPULATION LEGENDS
                // 2012: #94d8e8, 2013: #4dbfd9, 2014: #11a9cc, 2015: #15a0d9, 2016: #1c91d0
                label.append('rect').attr('x','23%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#1c91d0')
                label.append('text').attr('x','24.5%').attr('y','82%').text('2016').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','28%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#15a0d9')
                label.append('text').attr('x','29.5%').attr('y','82%').text('2015').style('fill','white').style('font-size','12px').attr('font-family','Lato')

                label.append('rect').attr('x','33%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#11a9cc')
                label.append('text').attr('x','34.5%').attr('y','82%').text('2014').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','38%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#4dbfd9')
                label.append('text').attr('x','39.5%').attr('y','82%').text('2013').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
                label.append('rect').attr('x','43%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#94d8e8')
                label.append('text').attr('x','44.5%').attr('y','82%').text('2012').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
               // ENERGY ACCESS LEGENDS
                // 2012: #ffe168, 2013: #fbcb43, 2014: #f4b400, 2015: #eca403, 2016: #e49307
                label.append('rect').attr('x','54.5%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#e49307')
                label.append('text').attr('x','56%').attr('y','82%').text('2016').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','59.5%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#eca403')
                label.append('text').attr('x','61%').attr('y','82%').text('2015').style('fill','white').style('font-size','12px').attr('font-family','Lato')

                label.append('rect').attr('x','64.5%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#f4b400')
                label.append('text').attr('x','66%').attr('y','82%').text('2014').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','69.5%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#fbcb43')
                label.append('text').attr('x','71%').attr('y','82%').text('2013').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
                label.append('rect').attr('x','74.5%').attr('y','75%').attr('width','12').attr('height','12').attr('fill','#ffe168')
                label.append('text').attr('x','76%').attr('y','82%').text('2012').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('a').attr("xlink:href", "https://htmlpreview.github.io/?https://github.com/aaditirokade/major_studio_1/blob/master/finalProject/page4index.html")
                    .append('text').attr('x','87%').attr('y','10%').text('NET MIGRATION').attr('fill','#efefef')
                     .style('font-weight','bold').style('text-decoration','underline').style("font-size", "12px").style("font-family", "Lato")
                     
                label.append('a').attr("xlink:href", "https://htmlpreview.github.io/?https://github.com/aaditirokade/major_studio_1/blob/master/finalProject/index.html")
                    .append('text').attr('x','5%').attr('y','10%').text('HOME').attr('fill','#efefef')
                     .style('font-weight','bold').style('text-decoration','underline').style("font-size", "12px").style("font-family", "Lato")
              
              
                let graph = d3.select('body').append('svg').attr('id','svg').attr('width', window.innerWidth + 'px').attr('height', 3500);
            
                // MOTHER OF ALL GROUPS : ONE FOR EACH ENTRY
                let group1 = graph.append('g').attr('id', 'group1');
             
                // DIV for TOOLTIP
                var div = d3.select('body').append('div').attr('class', 'tooltip').attr('id','tooltip');
               
               //d3.selectAll("svg > *").remove();
              


function barChart(inText){
    console.log(inText);
 
    d3.json('data/allPOPData1.json').then((pop)=>{
         d3.json('data/allENERGYData.json').then((eng)=>{
             d3.json('data/all_MigData.json').then((mig) => {
          
                // ARRAYS for % POPULATION DATA  
                 eng.forEach((engg)=>{
                  
                     var result = pop.filter((popp)=>{return popp.countryCode === engg.countryCode;})
                     
                     engg.ppru2012 = (result[0] !== undefined) ? result[0].ppru2012 : null;
                     engg.ppru2013 = (result[0] !== undefined) ? result[0].ppru2013 : null;
                     engg.ppru2014 = (result[0] !== undefined) ? result[0].ppru2014 : null;
                     engg.ppru2015 = (result[0] !== undefined) ? result[0].ppru2015 : null;
                     engg.ppru2016 = (result[0] !== undefined) ? result[0].ppru2016 : null;
                     
                     engg.ppur2012 = (result[0] !== undefined) ? result[0].ppur2012 : null;
                     engg.ppur2013 = (result[0] !== undefined) ? result[0].ppur2013 : null;
                     engg.ppur2014 = (result[0] !== undefined) ? result[0].ppur2014 : null;
                     engg.ppur2015 = (result[0] !== undefined) ? result[0].ppur2015 : null;
                     engg.ppur2016 = (result[0] !== undefined) ? result[0].ppur2016 : null;
                     
                     
                 });
                 
                 eng.forEach((engg)=>{
                  
                     var result = mig.filter((migg)=>{return migg.countryCode === engg.countryCode;})
                     
                     engg.mig2012 = (result[0] !== undefined) ? result[0].mig2012 : null;
                     engg.mig2013 = (result[0] !== undefined) ? result[0].mig2013 : null;
                     engg.mig2014 = (result[0] !== undefined) ? result[0].mig2013 : null;
                     engg.mig2015 = (result[0] !== undefined) ? result[0].mig2014 : null;
                     engg.mig2016 = (result[0] !== undefined) ? result[0].mig2015 : null;
                     
                     
                 });

	             //ACCESS TO ENERGY   
	             
	           //  console.log(eng);
	             plotSetup(eng, inText);
	             
            });
    });
});
            
             
             

// SVG : ACCESS TO ELECTRICITY

let plotSetup = (data, inText) => {
    
    // REMOVE ALL GROUPS TO UPDATE NEW
    d3.selectAll('svg > g > *').remove(); 
    
    console.log(inText);
 
           // COUNTRY LABELS : GROUP1 selection variable
            let label = group1.selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(0, ${i * 3000/data.length})`;})
                              .append('text').attr('class', 'labels').text( (d,i) => { return d.countryCode; })
                              .attr("x", window.innerWidth/2).attr("y",60).attr("font-family", 'Lato').attr("fill", '#efefef').attr('id', 'txt')
                              
           
           
            
            
            // 2012 SELECTION VAR
            let bar12 = group1.append('g').attr('id', 'group2').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+46})`;})
            
            // EMPTY BARS
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)

            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',-420).attr('y', 0).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',-420).attr('y', 5).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',-420).attr('y', 10).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',-420).attr('y', 15).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',-420).attr('y', 20).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')

            
            // bar12.remove();
            // BUTTON CONDITION
            if(inText=='RURAL')
              {     
        
          //******* ELECTRICITY RURAL ******* 
                     // 2012: #ffe168, 2013: #fbcb43, 2014: #f4b400, 2015: #eca403, 2016: #e49307
                          
                           // 2012 BARS //2016
                           bar12.append('rect')
                                .attr('width', (d,i) =>{ if(d.eleRural2016==='NA')d.eleRural2016=0; return d.eleRural2016*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#e49307')
                                .on('mouseover',(d)=>{
                                    // document.getElementById('tooltip').style.visibility='visible';
                                     // TOOLTIP
                                     div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleRural2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleRural2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleRural2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleRural2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleRural2012.toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                           
                           // 2013 SELECTION VAR  //2015
                            let bar13 = group1.append('g').attr('id', 'group3').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+51})`;})
                   
                           // 2013 BARS //2015
                           bar13.append('rect')
                                .attr('width', (d,i) =>{if(d.eleRural2015==='NA')d.eleRural2015=0; return d.eleRural2015*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#eca403')
                                .on('mouseover',(d)=>{
                                    // document.getElementById('tooltip').style.visibility='visible';
                                     // TOOLTIP
                                     div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleRural2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleRural2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleRural2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleRural2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleRural2012.toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                           
                           // 2014 SELECTION VAR
                            let bar14 = group1.append('g').attr('id', 'group4').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+56})`;})
                    
                           // 2014 BARS
                           bar14.append('rect')
                                .attr('width', (d,i) =>{if(d.eleRural2014==='NA')d.eleRural2014=0; return d.eleRural2014*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#f4b400')
                                .on('mouseover',(d)=>{
                                    // document.getElementById('tooltip').style.visibility='visible';
                                    // TOOLTIP
                                     div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleRural2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleRural2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleRural2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleRural2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleRural2012.toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2015 SELECTION VAR //2013
                            let bar15 = group1.append('g').attr('id', 'group5').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+61})`;})
                           
               
                           // 2015 BARS //2013
                           bar15.append('rect')
                                .attr('width', (d,i) =>{if(d.eleRural2013==='NA')d.eleRural2013=0; return d.eleRural2013*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#fbcb43')
                                .on('mouseover',(d)=>{
                                    // document.getElementById('tooltip').style.visibility='visible';
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleRural2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleRural2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleRural2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleRural2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleRural2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2016 SELECTION VAR //2012
                            let bar16 = group1.append('g').attr('id', 'group6').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+66})`;})
                           
                                
                           // 2016 BARS //2012
                           bar16.append('rect')
                                .attr('width', (d,i) =>{if(d.eleRural2012==='NA')d.eleRural2012=0; return d.eleRural2012*3;}).attr('height', '5px')  // TODO
                                .attr('x',0).attr('y', 0).style('fill','#ffe168')
                                .on('mouseover',(d)=>{
                                    // document.getElementById('tooltip').style.visibility='visible';
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleRural2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleRural2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleRural2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleRural2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleRural2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                    
        //******* POPULATION RURAL ******* 
                     // POPULATION : // 2012: #94d8e8, 2013: #4dbfd9, 2014: #11a9cc, 2015: #15a0d9, 2016: #1c91d0
                            
                       

                           // 2012 SELECTION VAR //2016
                            let bar17 = group1.append('g').attr('id', 'group7').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppru2016==='NA')d.ppru2016=0; return `translate(${(window.innerWidth/2-50)-(d.ppru2016*3)}, ${i * 3000/data.length+46})`;});
                                
                   
                           // 2012 BARS //2016
                           bar17.append('rect').attr('class', 'rect6').attr('width', (d,i) =>{if(d.ppru2016==='NA')d.ppru2016=0; return d.ppru2016*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#1c91d0')
                                .on('mouseover',(d)=>{
                                    // TOOLTIP
                                    div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                    div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppru2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppru2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppru2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppru2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppru2012.toFixed(2)+'%')
                                    .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                               
                           // 2013 SELECTION VAR //2015
                            let bar18 = group1.append('g').attr('id', 'group8').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppru2013==='NA')d.ppru2013=0; return `translate(${(window.innerWidth/2-50)-(d.ppru2015*3)}, ${i * 3000/data.length+51})`;})
                           
                           // 2013 BARS //2015
                           bar18.append('rect').attr('class', 'rect7').attr('width', (d,i) =>{if(d.ppru2015==='NA')d.ppru2015=0; return d.ppru2015*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#15a0d9')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppru2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppru2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppru2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppru2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppru2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                        
                           // 2014 SELECTION VAR //2014
                            let bar19 = group1.append('g').attr('id', 'group9').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppru2014 === 'NA') d.ppru2014 = 0; return `translate(${(window.innerWidth/2-50)-(d.ppru2014)*3}, ${i * 3000/data.length+56})`;})
                           
                           // 2014 BARS //2014
                           bar19.append('rect').attr('class', 'rect8').attr('width', (d,i) =>{ if(d.ppru2014 === 'NA') d.ppru2014 = 0; return d.ppru2014*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#11a9cc')
                                // .style('fill','#55aaff')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppru2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppru2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppru2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppru2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppru2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2015 SELECTION VAR //2013
                            let bar110 = group1.append('g').attr('id', 'group10').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppru2013 === 'NA') d.ppru2013 = 0; return `translate(${(window.innerWidth/2-50) - (d.ppru2013*3)}, ${i * 3000/data.length+61})`;})
                           
                           // 2015 BARS //2013
                           bar110.append('rect').attr('class', 'rect9').attr('width', (d,i) =>{ if(d.ppru2013 === 'NA') d.ppru2013 = 0; return d.ppru2013*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#4dbfd9')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppru2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppru2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppru2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppru2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppru2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2016 SELECTION VAR //2012
                            let bar111 = group1.append('g').attr('id', 'group11').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppru2012 === 'NA') d.ppru2012 = 0; return `translate(${(window.innerWidth/2-50) - (d.ppru2012)*3}, ${i * 3000/data.length+66})`;})
                           
                           // 2016 BARS //2012
                           bar111.append('rect').attr('class', 'rect10').attr('width', (d,i) =>{ if(d.ppru2012 === 'NA') d.ppru2012 = 0; return d.ppru2012*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#94d8e8')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppru2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppru2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppru2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppru2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppru2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
               
              }
            else
              {
                    
             // document.getElementById('group1').style.visibility= 'hidden';
             
         //******* ELECTRICITY URBAN *******
                    // 2012: #ffe168, 2013: #fbcb43, 2014: #f4b400, 2015: #eca403, 2016: #e49307
                          
                           // 2012 BARS //2016
                           bar12.append('rect')
                                .attr('width', (d,i) =>{ if(d.eleUrban2016==='NA')d.eleUrban2016=0; return d.eleUrban2016*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#e49307')
                                .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleUrban2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleUrban2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleUrban2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleUrban2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleUrban2012.toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                           
                   
                           // 2013 SELECTION VAR
                            let bar13 = group1.append('g').attr('id', 'group3').selectAll('g').data(data).enter(data).append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+51})`;})
                                  
                                   
                       
                           // 2013 BARS //2015
                           bar13.append('rect')
                                .attr('width', (d,i) =>{ if(d.eleUrban2015==='NA')d.eleUrban2015=0; return d.eleUrban2015*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#eca403')
                                .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleUrban2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleUrban2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleUrban2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleUrban2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleUrban2012.toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                           
                           
                           
                           // 2014 SELECTION VAR //2014
                            let bar14 = group1.append('g').attr('id', 'group4').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+56})`;})
                    
                           // 2014 BARS //2014
                           bar14.append('rect')
                                .attr('width', (d,i) =>{ if(d.eleUrban2014==='NA')d.eleUrban2014=0; return d.eleUrban2014*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#f4b400')
                                .on('mouseover',(d)=>{
                                    // TOOLTIP
                                     div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleUrban2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleUrban2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleUrban2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleUrban2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleUrban2012.toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2015 SELECTION VAR //2013
                            let bar15 = group1.append('g').attr('id', 'group5').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+61})`;})
                           
               
                           // 2015 BARS //2013
                           bar15.append('rect')
                                .attr('width', (d,i) =>{ if(d.eleUrban2013==='NA')d.eleUrban2013=0; return d.eleUrban2013*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#fbcb43')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleUrban2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleUrban2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleUrban2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleUrban2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleUrban2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2016 SELECTION VAR
                            let bar16 = group1.append('g').attr('id', 'group6').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+70}, ${i * 3000/data.length+66})`;})
                           
                                
                           // 2016 BARS //2012
                           bar16.append('rect')
                                .attr('width', (d,i) =>{ if(d.eleUrban2012==='NA')d.eleUrban2012=0; return d.eleUrban2012*3;}).attr('height', '5px')  // TODO
                                .attr('x',0).attr('y', 0).style('fill','#ffe168')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.eleUrban2016.toFixed(2)+'%' + '<br>2015 : '+ d.eleUrban2015.toFixed(2) +'%'+ '<br>2014 : '+ d.eleUrban2014.toFixed(2) +'%'+ '<br>2013 : '+ d.eleUrban2013.toFixed(2) +'%'+ '<br>2012 : '+ d.eleUrban2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                    
        //******* POPULATION URBAN ******* 
        // 2012: #94d8e8, 2013: #4dbfd9, 2014: #11a9cc, 2015: #15a0d9, 2016: #1c91d0
                      
                           // 2012 SELECTION VAR 
                            let bar17 = group1.append('g').attr('id', 'group7').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppur2016==='NA')d.ppur2016=0; return `translate(${(window.innerWidth/2-50)-(d.ppur2016*3)}, ${i * 3000/data.length+46})`;});
                                
                           // 2012 BARS //2016
                           bar17.append('rect').attr('class', 'rect6').attr('width', (d,i) =>{ if(d.ppur2016==='NA')d.ppur2016=0; return d.ppur2016*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#1c91d0')
                                .on('mouseover',(d)=>{
                                    // TOOLTIP
                                    div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                     div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppur2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppur2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppur2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppur2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppur2012.toFixed(2)+'%')
                                    .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                               
                           // 2013 SELECTION VAR //2015
                            let bar18 = group1.append('g').attr('id', 'group8').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppur2015==='NA')d.ppur2015=0; return `translate(${(window.innerWidth/2-50)-(d.ppur2015*3)}, ${i * 3000/data.length+51})`;})
                           
                           // 2013 BARS //2015
                           bar18.append('rect').attr('class', 'rect7').attr('width', (d,i) =>{ if(d.ppur2015==='NA')d.ppur2015=0; return d.ppur2015*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#15a0d9')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppur2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppur2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppur2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppur2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppur2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                        
                           // 2014 SELECTION VAR
                            let bar19 = group1.append('g').attr('id', 'group9').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppur2014==='NA')d.ppur2014=0; return `translate(${(window.innerWidth/2-50)-(d.ppur2014)*3}, ${i * 3000/data.length+56})`;})
                           
                           // 2014 BARS
                           bar19.append('rect').attr('class', 'rect8').attr('width', (d,i) =>{ if(d.ppur2014==='NA')d.ppur2014=0; return d.ppur2014*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#11a9cc')
                                // .style('fill','#55aaff')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppur2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppur2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppur2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppur2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppur2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                                
                           // 2015 SELECTION VAR
                            let bar110 = group1.append('g').attr('id', 'group10').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppur2013==='NA')d.ppur2013=0; return `translate(${(window.innerWidth/2-50) - (d.ppur2013*3)}, ${i * 3000/data.length+61})`;})
                           
                           // 2015 BARS //2013
                           bar110.append('rect').attr('class', 'rect9').attr('width', (d,i) =>{ if(d.ppur2013==='NA')d.ppur2013=0; return d.ppur2013*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#4dbfd9')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppur2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppur2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppur2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppur2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppur2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });
                           
                           
                           // 2016 SELECTION VAR //2012
                            let bar111 = group1.append('g').attr('id', 'group11').selectAll('g').data(data).enter().append('g')
                                   .attr('transform', (d, i) => { if(d.ppur2012==='NA')d.ppur2012=0; return `translate(${(window.innerWidth/2-50) - (d.ppur2012)*3}, ${i * 3000/data.length+66})`;})
                           
                           // 2016 BARS //2012
                           bar111.append('rect').attr('class', 'rect10').attr('width', (d,i) =>{ if(d.ppur2012==='NA')d.ppur2012=0; return d.ppur2012*3;}).attr('height', '5px')
                                .attr('x',0).attr('y', 0).style('fill','#94d8e8')
                                .on('mouseover',(d)=>{
                                      // TOOLTIP
                                      div.transition().duration(30).style("opacity", 1).style("visibility", 'visible');
                                      div.html(d.countryName.toUpperCase() + '<br> 2016 : '+ d.ppur2016.toFixed(2)+'%' + '<br>2015 : '+ d.ppur2015.toFixed(2) +'%'+ '<br>2014 : '+ d.ppur2014.toFixed(2) +'%'+ '<br>2013 : '+ d.ppur2013.toFixed(2) +'%'+ '<br>2012 : '+ d.ppur2012.toFixed(2)+'%')
                                      .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                })
                                .on('mouseout',(d)=>{
                                    document.getElementById('tooltip').style.visibility='hidden';
                                });

                }
            
}
 
}

