                
                // HEADING
                d3.select('body').append('div').attr("class","heading2").append('text').text('trends in access to electricity, net migration rate, population distribution for Africa (2012-16)').attr('class','title')

                barChart();
           
                // DIVISION LABELS
                var label = d3.select('body').append('svg').attr('id','keep').attr('width',window.innerWidth).attr('height','20%')
                label.append('text').attr('x','18%').attr('y','50%').attr('class','rightlabel').text('% GAP IN ACCESS TO ELECTRICITY').style('fill','white').style('font-size','14px')
                label.append('text').attr('x','49%').attr('y','50%').attr('class','leftlabel').text('NET MIGRATION RATE').style('fill','white').style('font-size','14px')
                label.append('text').attr('x','74%').attr('y','50%').attr('class','rightlabel').text('% GAP IN POPULATION DISTRIBUTION').style('fill','white').style('font-size','14px')
                
                label.append('text').attr('x','19%').attr('y','70%').attr('class','subLabel').text('RURAL').style('fill','white').style('font-size','12px')
                label.append('text').attr('x','29%').attr('y','70%').attr('class','subLabel').text('URBAN').style('fill','white').style('font-size','12px')
                label.append('text').attr('x','47%').attr('y','70%').attr('class','subLabel').text('INWARD').style('fill','white').style('font-size','12px')
                label.append('text').attr('x','59%').attr('y','70%').attr('class','subLabel').text('OUTWARD').style('fill','white').style('font-size','12px')
                label.append('text').attr('x','77%').attr('y','70%').attr('class','subLabel').text('RURAL').style('fill','white').style('font-size','12px')
                label.append('text').attr('x','86%').attr('y','70%').attr('class','subLabel').text('URBAN').style('fill','white').style('font-size','12px')
                
                // label.append('text').attr('x','3%').attr('y','70%').attr('class','subLabel').text('COUNTRY CODE').style('fill','white').style('font-size','12px')
                
                
                label.append('a').attr("xlink:href", "https://htmlpreview.github.io/?https://github.com/aaditirokade/major_studio_1/blob/master/finalProject/index.html")
                    .append('text').attr('x','5%').attr('y','10%').text('HOME').attr('fill','#efefef')
                     .style('font-weight','bold').style('text-decoration','underline').style("font-size", "12px").style("font-family", "Lato")

                
                // POPULATION GAP LEGENDS 
                 // 94d8e8, 4dbfd9, 11a9cc, 15a0d9, 1c91d0
                 
                label.append('rect').attr('x','72%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#1c91d0')
                label.append('text').attr('x','73.5%').attr('y','97%').text('2016').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','77%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#15a0d9') 
                label.append('text').attr('x','78.5%').attr('y','97%').text('2015').style('fill','white').style('font-size','12px').attr('font-family','Lato')

                label.append('rect').attr('x','82%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#11a9cc')
                label.append('text').attr('x','83.5%').attr('y','97%').text('2014').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','87%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#4dbfd9')
                label.append('text').attr('x','88.5%').attr('y','97%').text('2013').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
                label.append('rect').attr('x','92%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#94d8e8')
                label.append('text').attr('x','93.5%').attr('y','97%').text('2012').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                
               
                // NET MIGRATION RATE LEGENDS
                // F2A181, EE8D71, EC735C, EE6B56, EC5750  
                label.append('rect').attr('x','43%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#EC5750')
                label.append('text').attr('x','44.5%').attr('y','97%').text('2016').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','48%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#EE6B56')
                label.append('text').attr('x','49.5%').attr('y','97%').text('2015').style('fill','white').style('font-size','12px').attr('font-family','Lato')

                label.append('rect').attr('x','53%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#EC735C')
                label.append('text').attr('x','54.5%').attr('y','97%').text('2014').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','58%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#EE8D71')
                label.append('text').attr('x','59.5%').attr('y','97%').text('2013').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
                label.append('rect').attr('x','63%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#F2A181')
                label.append('text').attr('x','64.5%').attr('y','97%').text('2012').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
                
                // ELECTRICITY LEGENDS
                // ffe168, fbcb43, f4b400, eca403, e49307
                
                label.append('rect').attr('x','14.5%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#e49307')
                label.append('text').attr('x','16%').attr('y','97%').text('2016').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','19.5%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#eca403')
                label.append('text').attr('x','21%').attr('y','97%').text('2015').style('fill','white').style('font-size','12px').attr('font-family','Lato')

                label.append('rect').attr('x','24.5%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#f4b400')
                label.append('text').attr('x','26%').attr('y','97%').text('2014').style('fill','white').style('font-size','12px').attr('font-family','Lato')
                
                label.append('rect').attr('x','29.5%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#fbcb43')
                label.append('text').attr('x','31%').attr('y','97%').text('2013').style('fill','white').style('font-size','12px').attr('font-family','Lato')
               
                label.append('rect').attr('x','34.5%').attr('y','90%').attr('width','12').attr('height','12').attr('fill','#ffe168')
                label.append('text').attr('x','36%').attr('y','97%').text('2012').style('fill','white').style('font-size','12px').attr('font-family','Lato')
              
              
                let graph = d3.select('body').append('svg').attr('id','svg').attr('width', window.innerWidth + 'px').attr('height', 3500);
            
                // MOTHER OF ALL GROUPS : ONE FOR EACH ENTRY
                let group1 = graph.append('g').attr('id', 'group1');
             
                // DIV for TOOLTIP
                var div = d3.select('body').append('div').attr('class', 'tooltip');
                  
                
                // VERTICAL LINES
                graph.append('line').attr("x1", '26%').attr("y1", '1.3%').attr("x2", '26%').attr("y2", '86%').attr("stroke-width", 0.25).attr("stroke", "darkgray");
                graph.append('line').attr("x1", '55%').attr("y1", '1.3%').attr("x2", '55%').attr("y2", '86%').attr("stroke-width", 0.25).attr("stroke", "darkgray");
                graph.append('line').attr("x1", '83%').attr("y1", '1.3%').attr("x2", '83%').attr("y2", '86%').attr("stroke-width", 0.25).attr("stroke", "darkgray");

              


function barChart(){
 
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
	             plotSetup(eng);
	             
            });
    });
});
            
             
             

// SVG : ACCESS TO ELECTRICITY

let plotSetup = (data) => {
 
           // COUNTRY LABELS
            let label = group1.selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(0, ${i * 3000/data.length})`;})
                              .append('text').attr('class', 'labels').text( (d,i) => { return d.countryCode; })
                              .attr("x", 80).attr("y",60).attr("font-family", 'Lato').attr("fill", '#efefef').attr('id', 'txt')
       
            
            // 2012 SELECTION VAR
                            let bar12 = group1.append('g').attr('id', 'group2').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth/7+10}, ${i * 3000/data.length+46})`;})
                              
                           // EMPTY BARS
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25)
                
                            bar12.append('rect').attr('width', 400).attr('height', '5px').attr('x',window.innerWidth*2/8+10).attr('y', 0).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 400).attr('height', '5px').attr('x',window.innerWidth*2/8+10).attr('y', 5).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 400).attr('height', '5px').attr('x',window.innerWidth*2/8+10).attr('y', 10).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 400).attr('height', '5px').attr('x',window.innerWidth*2/8+10).attr('y', 15).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 400).attr('height', '5px').attr('x',window.innerWidth*2/8+10).attr('y', 20).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                          
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',window.innerWidth*4/7+10).attr('y', 0).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',window.innerWidth*4/7+10).attr('y', 5).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',window.innerWidth*4/7+10).attr('y', 10).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',window.innerWidth*4/7+10).attr('y', 15).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                            bar12.append('rect').attr('width', 300).attr('height', '5px').attr('x',window.innerWidth*4/7+10).attr('y', 20).style('fill','transparent').style('stroke', '#666').style('stroke-width', 0.25).attr('id', 'rct1')
                          
   
   
// ******************* % POPULATION GAP *****************
            
            // 94d8e8, 4dbfd9, 11a9cc, 15a0d9, 1c91d0

            let popGap = group1.append('g').attr('id', 'popGap12').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth*3/3.5-39}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.ppur2016-d.ppru2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.ppur2015-d.ppru2015).toFixed(2)+'%' + '<br>2014 : '+ (d.ppur2014-d.ppru2014).toFixed(2)+'%' + '<br>2013 : '+ (d.ppur2013-d.ppru2013).toFixed(2)+'%' + '<br>2016 : '+ (d.ppur2012-d.ppru2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
 
                      
            popGap.append('rect').attr('width', (d,i) =>{ if(d.ppur2016==='NA')d.ppur2016=0; if(d.ppru2016==='NA')d.ppru2016=0; var numm= d.ppur2016-d.ppru2016; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','#1c91d0').style('stroke', '#666').style('stroke-width', 0.25)
            popGap.append('rect').attr('width', (d,i) =>{ if(d.ppur2015==='NA')d.ppur2015=0; if(d.ppru2015==='NA')d.ppru2015=0; var numm= d.ppur2015-d.ppru2015; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','#15a0d9').style('stroke', '#666').style('stroke-width', 0.25)
            popGap.append('rect').attr('width', (d,i) =>{ if(d.ppur2014==='NA')d.ppur2014=0; if(d.ppru2014==='NA')d.ppru2014=0; var numm= d.ppur2014-d.ppru2014; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','#11a9cc').style('stroke', '#666').style('stroke-width', 0.25)
            popGap.append('rect').attr('width', (d,i) =>{ if(d.ppur2013==='NA')d.ppur2013=0; if(d.ppru2013==='NA')d.ppru2013=0; var numm= d.ppur2013-d.ppru2013; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#4dbfd9').style('stroke', '#666').style('stroke-width', 0.25)
            popGap.append('rect').attr('width', (d,i) =>{ if(d.ppur2012==='NA')d.ppur2012=0; if(d.ppru2012==='NA')d.ppru2012=0; var numm= d.ppur2012-d.ppru2012; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','#94d8e8').style('stroke', '#666').style('stroke-width', 0.25)

           
          let popGapL12 = group1.append('g').attr('id', 'groupPopGapL12').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth*3/3.5-39+ ((d.ppur2016-d.ppru2016)*1.5) }, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.ppur2016-d.ppru2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.ppur2015-d.ppru2015).toFixed(2)+'%' + '<br>2014 : '+ (d.ppur2014-d.ppru2014).toFixed(2)+'%' + '<br>2013 : '+ (d.ppur2013-d.ppru2013).toFixed(2)+'%' + '<br>2016 : '+ (d.ppur2012-d.ppru2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          popGapL12.append('rect').attr('width', (d,i) =>{ var numm= d.ppur2016-d.ppru2016; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','#1c91d0').style('stroke', '#666').style('stroke-width', 0.25)
           
        let popGapL13 = group1.append('g').attr('id', 'groupPopGapL13').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth*3/3.5-39+ ((d.ppur2015-d.ppru2015)*1.5) }, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.ppur2016-d.ppru2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.ppur2015-d.ppru2015).toFixed(2)+'%' + '<br>2014 : '+ (d.ppur2014-d.ppru2014).toFixed(2)+'%' + '<br>2013 : '+ (d.ppur2013-d.ppru2013).toFixed(2)+'%' + '<br>2016 : '+ (d.ppur2012-d.ppru2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          popGapL13.append('rect').attr('width', (d,i) =>{ var numm= d.ppur2015-d.ppru2015; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','#15a0d9').style('stroke', '#666').style('stroke-width', 0.25)
       
        let popGapL14 = group1.append('g').attr('id', 'groupPopGapL14').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth*3/3.5-39+ ((d.ppur2014-d.ppru2014)*1.5) }, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.ppur2016-d.ppru2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.ppur2015-d.ppru2015).toFixed(2)+'%' + '<br>2014 : '+ (d.ppur2014-d.ppru2014).toFixed(2)+'%' + '<br>2013 : '+ (d.ppur2013-d.ppru2013).toFixed(2)+'%' + '<br>2016 : '+ (d.ppur2012-d.ppru2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          popGapL14.append('rect').attr('width', (d,i) =>{ var numm= d.ppur2014-d.ppru2014; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','#11a9cc').style('stroke', '#666').style('stroke-width', 0.25)
       
         let popGapL15 = group1.append('g').attr('id', 'groupPopGapL15').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth*3/3.5-39+ ((d.ppur2013-d.ppru2013)*1.5) }, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.ppur2016-d.ppru2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.ppur2015-d.ppru2015).toFixed(2)+'%' + '<br>2014 : '+ (d.ppur2014-d.ppru2014).toFixed(2)+'%' + '<br>2013 : '+ (d.ppur2013-d.ppru2013).toFixed(2)+'%' + '<br>2016 : '+ (d.ppur2012-d.ppru2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          popGapL15.append('rect').attr('width', (d,i) =>{ var numm= d.ppur2013-d.ppru2013; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#4dbfd9').style('stroke', '#666').style('stroke-width', 0.25)
       
       
             let popGapL16 = group1.append('g').attr('id', 'groupPopGapL16').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth*3/3.5-39+ ((d.ppur2012-d.ppru2012)*1.5) }, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.ppur2016-d.ppru2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.ppur2015-d.ppru2015).toFixed(2)+'%' + '<br>2014 : '+ (d.ppur2014-d.ppru2014).toFixed(2)+'%' + '<br>2013 : '+ (d.ppur2013-d.ppru2013).toFixed(2)+'%' + '<br>2016 : '+ (d.ppur2012-d.ppru2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          popGapL16.append('rect').attr('width', (d,i) =>{ var numm= d.ppur2012-d.ppru2012; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','#94d8e8').style('stroke', '#666').style('stroke-width', 0.25)
       
  
   
           
    //************ NET MIGRATION ************
    
            // F2A181, EE8D71, EC735C, EE6B56, EC5750  

            let barMigR = group1.append('g').attr('id', 'groupMig12').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth/2+72}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.mig2016.toFixed(2) + '<br>2015 : '+ d.mig2015.toFixed(2) + '<br>2014 : '+ d.mig2014.toFixed(2) + '<br>2013 : '+ d.mig2013.toFixed(2) + '<br>2012 : '+ d.mig2012.toFixed(2))
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });

                      
          barMigR.append('rect').attr('width', (d,i) =>{ var num = d.mig2016 < 0 ? 0 : d.mig2016; return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','#EC5750').style('stroke', '#666').style('stroke-width', 0.25)
          barMigR.append('rect').attr('width', (d,i) =>{ var num = d.mig2015 < 0 ? 0 : d.mig2015; return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','#EE6B56').style('stroke', '#666').style('stroke-width', 0.25)
          barMigR.append('rect').attr('width', (d,i) =>{ var num = d.mig2014 < 0 ? 0 : d.mig2014; return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','#EC735C').style('stroke', '#666').style('stroke-width', 0.25)
          barMigR.append('rect').attr('width', (d,i) =>{ var num = d.mig2013 < 0 ? 0 : d.mig2013; return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#EE8D71').style('stroke', '#666').style('stroke-width', 0.25)
          barMigR.append('rect').attr('width', (d,i) =>{ var num = d.mig2012 < 0 ? 0 : d.mig2012; return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','#F2A181').style('stroke', '#666').style('stroke-width', 0.25)

           
          let barMigL12 = group1.append('g').attr('id', 'groupMigL12').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/2+72+ (d.mig2016)*10}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.mig2016.toFixed(2) + '<br>2015 : '+ d.mig2015.toFixed(2) + '<br>2014 : '+ d.mig2014.toFixed(2) + '<br>2013 : '+ d.mig2013.toFixed(2) + '<br>2012 : '+ d.mig2012.toFixed(2))
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          barMigL12.append('rect').attr('width', (d,i) =>{ var num = d.mig2016 < 0 ? -1*d.mig2016 : 0; console.log(num); return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','#EC5750').style('stroke', '#666').style('stroke-width', 0.25)
           
          let barMigL13 = group1.append('g').attr('id', 'groupMigL13').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/2+72+ (d.mig2015)*10}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.mig2016.toFixed(2) + '<br>2015 : '+ d.mig2015.toFixed(2) + '<br>2014 : '+ d.mig2014.toFixed(2) + '<br>2013 : '+ d.mig2013.toFixed(2) + '<br>2012 : '+ d.mig2012.toFixed(2))
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                                
          barMigL13.append('rect').attr('width', (d,i) =>{ var num = d.mig2015 < 0 ? -1*d.mig2015 : 0; console.log(num); return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','#EE6B56').style('stroke', '#666').style('stroke-width', 0.25)
           
          let barMigL14 = group1.append('g').attr('id', 'groupMigL14').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/2+72+ (d.mig2014)*10}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.mig2016.toFixed(2) + '<br>2015 : '+ d.mig2015.toFixed(2) + '<br>2014 : '+ d.mig2014.toFixed(2) + '<br>2013 : '+ d.mig2013.toFixed(2) + '<br>2012 : '+ d.mig2012.toFixed(2))
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
          barMigL14.append('rect').attr('width', (d,i) =>{ var num = d.mig2014 < 0 ? -1*d.mig2014 : 0; console.log(num); return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','#EC735C').style('stroke', '#666').style('stroke-width', 0.25)
           
          let barMigL15 = group1.append('g').attr('id', 'groupMigL15').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/2+72+ (d.mig2013)*10}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.mig2016.toFixed(2) + '<br>2015 : '+ d.mig2015.toFixed(2) + '<br>2014 : '+ d.mig2014.toFixed(2) + '<br>2013 : '+ d.mig2013.toFixed(2) + '<br>2012 : '+ d.mig2012.toFixed(2))
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
          barMigL15.append('rect').attr('width', (d,i) =>{ var num = d.mig2013 < 0 ? -1*d.mig2013 : 0; console.log(num); return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#EE8D71').style('stroke', '#666').style('stroke-width', 0.25)
           
          let barMigL16 = group1.append('g').attr('id', 'groupMigL16').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/2+72 + (d.mig2012)*10}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ d.mig2016.toFixed(2) + '<br>2015 : '+ d.mig2015.toFixed(2) + '<br>2014 : '+ d.mig2014.toFixed(2) + '<br>2013 : '+ d.mig2013.toFixed(2) + '<br>2012 : '+ d.mig2012.toFixed(2))
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
          barMigL16.append('rect').attr('width', (d,i) =>{ var num = d.mig2012 < 0 ? -1*d.mig2012 : 0; console.log(num); return (num*10).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','#F2A181').style('stroke', '#666').style('stroke-width', 0.25)
           
           
           
           
         // ******************* % GAP IN ACCESS TO ELECTRICITY *****************
         
            // ffe168, fbcb43, f4b400, eca403, e49307

            let engGap = group1.append('g').attr('id', 'engGap12').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${window.innerWidth/4+15}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.eleUrban2016-d.eleRural2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.eleUrban2015-d.eleRural2015).toFixed(2)+'%' + '<br>2014 : '+ (d.eleUrban2014-d.eleRural2014).toFixed(2)+'%' + '<br>2013 : '+ (d.eleUrban2013-d.eleRural2013).toFixed(2)+'%' + '<br>2012 : '+ (d.eleUrban2012-d.eleRural2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
 
                      
            engGap.append('rect').attr('width', (d,i) =>{ if(d.eleUrban2016==='NA')d.eleUrban2016=0; if(d.eleRural2016==='NA')d.eleRural2016=0; var numm= d.eleUrban2016-d.eleRural2016; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','#e49307').style('stroke', '#666').style('stroke-width', 0.25)
            engGap.append('rect').attr('width', (d,i) =>{ if(d.eleUrban2015==='NA')d.eleUrban2015=0; if(d.eleRural2015==='NA')d.eleRural2015=0; var numm= d.eleUrban2015-d.eleRural2015; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','#eca403').style('stroke', '#666').style('stroke-width', 0.25)
            engGap.append('rect').attr('width', (d,i) =>{ if(d.eleUrban2014==='NA')d.eleUrban2014=0; if(d.eleRural2014==='NA')d.eleRural2014=0; var numm= d.eleUrban2014-d.eleRural2014; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','#f4b400').style('stroke', '#666').style('stroke-width', 0.25)
            engGap.append('rect').attr('width', (d,i) =>{ if(d.eleUrban2013==='NA')d.eleUrban2013=0; if(d.eleRural2013==='NA')d.eleRural2013=0; var numm= d.eleUrban2013-d.eleRural2013; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#fbcb43').style('stroke', '#666').style('stroke-width', 0.25)
            engGap.append('rect').attr('width', (d,i) =>{ if(d.eleUrban2012==='NA')d.eleUrban2012=0; if(d.eleRural2012==='NA')d.eleRural2012=0; var numm= d.eleUrban2012-d.eleRural2012; var num = numm < 0 ? 0 : numm; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 20).style('fill','#ffe168').style('stroke', '#666').style('stroke-width', 0.25)

           
          let engGapL12 = group1.append('g').attr('id', 'groupEngGap12').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/4+15 + (d.eleUrban2016-d.eleRural2016)}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.eleUrban2016-d.eleRural2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.eleUrban2015-d.eleRural2015).toFixed(2)+'%' + '<br>2014 : '+ (d.eleUrban2014-d.eleRural2014).toFixed(2)+'%' + '<br>2013 : '+ (d.eleUrban2013-d.eleRural2013).toFixed(2)+'%' + '<br>2012 : '+ (d.eleUrban2012-d.eleRural2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          engGapL12.append('rect').attr('width', (d,i) =>{ var numm= d.eleUrban2016-d.eleRural2016; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 0).style('fill','#e49307').style('stroke', '#666').style('stroke-width', 0.25)
           
        let engGapL13 = group1.append('g').attr('id', 'groupEngGap13').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/4+15 + (d.eleUrban2015-d.eleRural2015)}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.eleUrban2016-d.eleRural2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.eleUrban2015-d.eleRural2015).toFixed(2)+'%' + '<br>2014 : '+ (d.eleUrban2014-d.eleRural2014).toFixed(2)+'%' + '<br>2013 : '+ (d.eleUrban2013-d.eleRural2013).toFixed(2)+'%' + '<br>2012 : '+ (d.eleUrban2012-d.eleRural2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          engGapL13.append('rect').attr('width', (d,i) =>{ var numm= d.eleUrban2015-d.eleRural2015; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 5).style('fill','#eca403').style('stroke', '#666').style('stroke-width', 0.25)
       
        let engGapL14 = group1.append('g').attr('id', 'groupEngGap14').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/4+15 + (d.eleUrban2014-d.eleRural2014)}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.eleUrban2016-d.eleRural2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.eleUrban2015-d.eleRural2015).toFixed(2)+'%' + '<br>2014 : '+ (d.eleUrban2014-d.eleRural2014).toFixed(2)+'%' + '<br>2013 : '+ (d.eleUrban2013-d.eleRural2013).toFixed(2)+'%' + '<br>2012 : '+ (d.eleUrban2012-d.eleRural2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          engGapL14.append('rect').attr('width', (d,i) =>{ var numm= d.eleUrban2014-d.eleRural2014; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 10).style('fill','#f4b400').style('stroke', '#666').style('stroke-width', 0.25)
       
         let engGapL15 = group1.append('g').attr('id', 'groupEngGap15').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/4+15 +(d.eleUrban2013-d.eleRural2013)}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.eleUrban2016-d.eleRural2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.eleUrban2015-d.eleRural2015).toFixed(2)+'%' + '<br>2014 : '+ (d.eleUrban2014-d.eleRural2014).toFixed(2)+'%' + '<br>2013 : '+ (d.eleUrban2013-d.eleRural2013).toFixed(2)+'%' + '<br>2012 : '+ (d.eleUrban2012-d.eleRural2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          engGapL15.append('rect').attr('width', (d,i) =>{ var numm= d.eleUrban2013-d.eleRural2013; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#fbcb43').style('stroke', '#666').style('stroke-width', 0.25)
       
       
             let engGapL16 = group1.append('g').attr('id', 'groupMigL16').selectAll('g').data(data).enter().append('g')
                              .attr('transform', (d, i) => {return `translate(${ window.innerWidth/4+15 +(d.eleUrban2012-d.eleRural2012)}, ${i * 3000/data.length+46})`;})
                              .on('mouseover',(d)=>{
                                     // TOOLTIP
                                     div.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
                                     div.html( d.countryName.toUpperCase() + '<br> 2016 : '+ (d.eleUrban2016-d.eleRural2016).toFixed(2) +'%'+ '<br>2015 : '+ (d.eleUrban2015-d.eleRural2015).toFixed(2)+'%' + '<br>2014 : '+ (d.eleUrban2014-d.eleRural2014).toFixed(2)+'%' + '<br>2013 : '+ (d.eleUrban2013-d.eleRural2013).toFixed(2)+'%' + '<br>2012 : '+ (d.eleUrban2012-d.eleRural2012).toFixed(2)+'%')
                                     .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                                });
                             
          engGapL16.append('rect').attr('width', (d,i) =>{ var numm= d.eleUrban2012-d.eleRural2012; var num = numm < 0 ? -1*numm : 0; return (num*1.5).toFixed(2);}).attr('height', '5px').attr('x',0).attr('y', 15).style('fill','#ffe168').style('stroke', '#666').style('stroke-width', 0.25)
         
         
           
         //******* ELECTRICITY TOTAL ******* 
                       
                        //   // 2012 BARS
                        //   bar12.append('rect')
                        //         .attr('width', (d,i) =>{ if(d.eleTotal2012==='NA')d.eleTotal2012=0; return d.eleTotal2012*3;}).attr('height', '5px')
                        //         .attr('x',0).attr('y', 0).style('fill','#Ffe168')
                        //         .on('mouseover',(d)=>{
                        //              // TOOLTIP
                        //              div.transition().duration(90).style("opacity", 1).style("visibility", 'visible');
                        //              div.html( d.countryName.toUpperCase() + '<br> 2012 : '+ d.eleTotal2012.toFixed(2)+'%' + '<br>2013 : '+ d.eleTotal2013.toFixed(2) +'%'+ '<br>2014 : '+ d.eleTotal2014.toFixed(2) +'%'+ '<br>2015 : '+ d.eleTotal2015.toFixed(2) +'%'+ '<br>2016 : '+ d.eleTotal2016.toFixed(2)+'%')
                        //              .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                        //         });
                           
                        //   // 2013 SELECTION VAR
                        //     let bar13 = group1.append('g').attr('id', 'group3').selectAll('g').data(data).enter().append('g')
                        //           .attr('transform', (d, i) => {return `translate(${window.innerWidth/7+10}, ${i * 3000/data.length+51})`;})
                   
                        //   // 2013 BARS
                        //   bar13.append('rect')
                        //         .attr('width', (d,i) =>{if(d.eleTotal2013==='NA')d.eleTotal2013=0; return d.eleTotal2013*3;}).attr('height', '5px')
                        //         .attr('x',0).attr('y', 0).style('fill','#fbcb43')
                        //         .on('mouseover',(d)=>{
                        //              // TOOLTIP
                        //              div.transition().duration(90).style("opacity", 1).style("visibility", 'visible');
                        //              div.html( d.countryName.toUpperCase() + '<br> 2012 : '+ d.eleTotal2012.toFixed(2)+'%' + '<br>2013 : '+ d.eleTotal2013.toFixed(2) +'%'+ '<br>2014 : '+ d.eleTotal2014.toFixed(2) +'%'+ '<br>2015 : '+ d.eleTotal2015.toFixed(2) +'%'+ '<br>2016 : '+ d.eleTotal2016.toFixed(2)+'%')
                        //              .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                        //         });
                           
                        //   // 2014 SELECTION VAR
                        //     let bar14 = group1.append('g').attr('id', 'group4').selectAll('g').data(data).enter().append('g')
                        //           .attr('transform', (d, i) => {return `translate(${window.innerWidth/7+10}, ${i * 3000/data.length+56})`;})
                    
                        //   // 2014 BARS
                        //   bar14.append('rect')
                        //         .attr('width', (d,i) =>{if(d.eleTotal2014==='NA')d.eleTotal2014=0; return d.eleTotal2014*3;}).attr('height', '5px')
                        //         .attr('x',0).attr('y', 0).style('fill','#f4b400')
                        //         .on('mouseover',(d)=>{
                        //             // TOOLTIP
                        //              div.transition().duration(90).style("opacity", 1).style("visibility", 'visible');
                        //              div.html( d.countryName.toUpperCase() + '<br> 2012 : '+ d.eleTotal2012.toFixed(2)+'%' + '<br>2013 : '+ d.eleTotal2013.toFixed(2) +'%'+ '<br>2014 : '+ d.eleTotal2014.toFixed(2) +'%'+ '<br>2015 : '+ d.eleTotal2015.toFixed(2) +'%'+ '<br>2016 : '+ d.eleTotal2016.toFixed(2)+'%')
                        //              .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                        //         });
                                
                        //   // 2015 SELECTION VAR
                        //     let bar15 = group1.append('g').attr('id', 'group5').selectAll('g').data(data).enter().append('g')
                        //           .attr('transform', (d, i) => {return `translate(${window.innerWidth/7+10}, ${i * 3000/data.length+61})`;})
                           
               
                        //   // 2015 BARS
                        //   bar15.append('rect')
                        //         .attr('width', (d,i) =>{if(d.eleTotal2015==='NA')d.eleTotal2015=0; return d.eleTotal2015*3;}).attr('height', '5px')
                        //         .attr('x',0).attr('y', 0).style('fill','#eca403')
                        //         .on('mouseover',(d)=>{
                        //               // TOOLTIP
                        //               div.transition().duration(90).style("opacity", 1).style("visibility", 'visible');
                        //              div.html( d.countryName.toUpperCase() + '<br> 2012 : '+ d.eleTotal2012.toFixed(2)+'%' + '<br>2013 : '+ d.eleTotal2013.toFixed(2) +'%'+ '<br>2014 : '+ d.eleTotal2014.toFixed(2) +'%'+ '<br>2015 : '+ d.eleTotal2015.toFixed(2) +'%'+ '<br>2016 : '+ d.eleTotal2016.toFixed(2)+'%')
                        //               .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                        //         });
                                
                        //   // 2016 SELECTION VAR
                        //     let bar16 = group1.append('g').attr('id', 'group6').selectAll('g').data(data).enter().append('g')
                        //           .attr('transform', (d, i) => {return `translate(${window.innerWidth/7+10}, ${i * 3000/data.length+66})`;})
                           
                                
                        //   // 2016 BARS
                        //   bar16.append('rect')
                        //         .attr('width', (d,i) =>{if(d.eleTotal2016==='NA')d.eleTotal2016=0; return d.eleTotal2016*3;}).attr('height', '5px')  // TODO
                        //         .attr('x',0).attr('y', 0).style('fill','#e49307')
                        //         .on('mouseover',(d)=>{
                        //               // TOOLTIP
                        //               div.transition().duration(90).style("opacity", 1).style("visibility", 'visible');
                        //              div.html( d.countryName.toUpperCase() + '<br> 2012 : '+ d.eleTotal2012.toFixed(2)+'%' + '<br>2013 : '+ d.eleTotal2013.toFixed(2) +'%'+ '<br>2014 : '+ d.eleTotal2014.toFixed(2) +'%'+ '<br>2015 : '+ d.eleTotal2015.toFixed(2) +'%'+ '<br>2016 : '+ d.eleTotal2016.toFixed(2)+'%')
                        //              .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
                        //         });
                                
             
            
}
 
}


