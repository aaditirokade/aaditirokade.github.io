
// ----------- Global variables ---------------
var rounds =[];
var colors, tabs, id;


// -------------- Load JSON  -------------------
d3.json('./data/thesis_data_final.json').then((data) => {
    
    console.log(data);
  

    //-------------- SVG for DV -------------------
    var svg_plot = d3.select("#plot").append('svg').attr('width','100%').attr('height',700)
    var svg_labe = d3.select("#labe").append('svg').attr('width','100%').attr('height',40)


    //-------------- DIV for TOOLTIP -------------------
    var div = d3.select("body").append("div").attr("id", "tooltip").style('visibility','hidden');
    
    
    // -------------- Set Margins Width & Height for DV ------------------
    var col10 = document.getElementById("this");
    
    var margin = {top: 20, right: 20, bottom: 20, left: 20},
    width = col10.offsetWidth - margin.left - margin.right,
    height = col10.offsetHeight - margin.top - margin.bottom;
    
    
    // --------------------- X-axis & labels -----------------
    
            //  // Y transition for X-axis
            // var labe_y=parseInt(svg_plot.style('height'))-40;
        
            // // Month labels
            // var mylabe =['jun14','jul14','aug14','sep14','oct14','nov14','dec14'];
            // for(i=15;i<19;i++){
            //     mylabe.push('jan'+i, 'feb'+i, 'mar'+i, 'apr'+i, 'may'+i,'jun'+i, 'jul'+i, 'aug'+i, 'sep'+i,'oct'+i, 'nov'+i, 'dec'+i);
            // }
                
            // //  X scales & axis:
            // var x_labe = d3.scaleBand().range([ 0, parseInt(svg_labe.style('width'))]).domain(mylabe);
                
            // svg_labe.append("g").attr("transform", "translate(0,0)")
            //         .call(d3.axisBottom(x_labe)).selectAll("text")	
            //         .style("text-anchor", "end")
            //         .attr("dx", "-.8em").attr("dy", ".15em")
            //         .attr("transform", "rotate(-65)");
            
            
            
             // Y transition for X-axis
            var labe_y=parseInt(svg_plot.style('height'))-40;
        
            // Month labels
            var mylabe =['jun14','jul14','aug14','sep14','oct14','nov14','dec14'];
            for(i=15;i<19;i++){
                mylabe.push('jan'+i, 'feb'+i, 'mar'+i, 'apr'+i, 'may'+i,'jun'+i, 'jul'+i, 'aug'+i, 'sep'+i,'oct'+i, 'nov'+i, 'dec'+i);
            }
                
            //  X scales & axis:
            var x_labe = d3.scaleBand().range([ 0, parseInt(svg_plot.style('width'))]).domain(mylabe);
                
            svg_plot.append("g").attr("transform", `translate(0,${labe_y})`)
                    .call(d3.axisBottom(x_labe)).selectAll("text")	
                    .style("text-anchor", "end")
                    .attr("dx", "-.8em").attr("dy", ".15em")
                    .attr("transform", "rotate(-65)");
                        
    
    
     // --------------------- Plot circles -----------------
     var marg = height/10;
     
     function draw(selection){
         
         svg_plot.selectAll('circle').remove();
         rounds = [];
         
          var rounds_aic = svg_plot.selectAll(".bar_aic").data(data).enter().append("circle").attr("class", "bar_aic")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg; })
                     .attr('r', function(d) { return d["AIC_"+selection]*6; }).attr('fill', '#d75b68')
                     .attr('opacity', 0.8).on("mouseover", function(d) {
    
                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('AIC : '+ d.month +' '+ d.year +': '+ d["AIC_"+selection] +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
      rounds.push(rounds_aic);
      
   
     // JAI
      var rounds_jai = svg_plot.selectAll(".bar_jai").data(data).enter().append("circle").attr("class", "bar_jai")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*2; })
                     .attr('r', function(d) { return d["JAI_"+selection]*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                         // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('JAI : '+ d.month +' '+ d.year +': '+ d.JAI_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_jai);
    
                      
    // SEG
      var rounds_seg = svg_plot.selectAll(".bar_seg").data(data).enter().append("circle").attr("class", "bar_seg")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*3; })
                     .attr('r', function(d) { return d["SEG_"+selection]*5; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('SEJ : '+ d.month +' '+ d.year +': '+ d.SEG_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_seg);
    
   
    // GOW
      var rounds_gow = svg_plot.selectAll(".bar_gow").data(data).enter().append("circle").attr("class", "bar_gow")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*4; })
                     .attr('r', function(d) { return d["GOW_"+selection]*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('GOW : '+ d.month +' '+ d.year +': '+ d.GOW_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_gow);
    
    
    // IGO
      var rounds_igo = svg_plot.selectAll(".bar_igo").data(data).enter().append("circle").attr("class", "bar_igo")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*5; })
                     .attr('r', function(d) { return d["IGO_"+selection]*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('IGO : '+ d.month +' '+ d.year +': '+ d.IGO_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_igo);
      
                      
    // IAD
      var rounds_iad = svg_plot.selectAll(".bar_iad").data(data).enter().append("circle").attr("class", "bar_iad")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*6; })
                     .attr('r', function(d) { return d["IAD_"+selection]*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('IAD : '+ d.month +' '+ d.year +': '+ d.IAD_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_iad);
                      
    // VTI
      var rounds_vti = svg_plot.selectAll(".bar_vti").data(data).enter().append("circle").attr("class", "bar_vti")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*7; })
                     .attr('r', function(d) { return d["VTI_"+selection]*6; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('VTI : '+ d.month +' '+ d.year +': '+ d.VTI_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_vti);
    
                      
    // TRJ
      var rounds_trj = svg_plot.selectAll(".bar_trj").data(data).enter().append("circle").attr("class", "bar_trj")
                     .attr("cx", function(d,i) { return 20+i*width/56; }).attr("cy", function(d) { return marg*8; })
                     .attr('r', function(d) { return d["TRJ_"+selection]*5; }).attr("stroke-width", 1.5).attr("stroke", "#808080").attr('stroke-width', 0.75).attr("fill", "#071026")
                     .attr('opacity', 0.8).on("mouseover", function(d) {

                            // TOOLTIP : Visibility, transition, opacity, content
                            document.getElementById("tooltip").style.visibility='visible';
                            div.transition().duration(200).style("opacity", 1);
                            div.html('TRJ : '+ d.month +' '+ d.year +': '+ d.TRJ_can +'%');
                      })
                      .on("mouseout", function(d) {
                            div.transition().duration(500).attr('fill','black').style("opacity", 0);
                      });
                      
    rounds.push(rounds_trj);
    
    //  }
     
    
            
                
        //------- Assign values to global variables ------------------    
        tabs = ['air-india-tab', 'jet-airways-tab', 'spicejet-tab', 'go-air-tab', 'indigo-tab', 'air-asia-tab', 'vistara-tab', 'trujet-tab'];
        colors = ['#d75b68', '#BF98FF', '#93A7FA', '#6CB9AA', '#FF5388', '#D1A556', '#A5D672', '#92D2F7']
              
         update(data, 'air-india-tab');

        // -------------- Select carrier to update ---------------------
            for(i=0;i<8;i++){
                
                 d3.select(`#${tabs[i]}`).on('click', (d,i)=>{
                    id = this.document.activeElement.id;
                    update(d, id);
                });
                
            }
    
    
        // -------------- UPDATE function ---------------------
         function update(d, id){
             
             var index;
             if(id==tabs[0]) index=0;
             else if(id==tabs[1]) index=1;
             else if(id==tabs[2]) index=2;
             else if(id==tabs[3]) index=3;
             else if(id==tabs[4]) index=4;
             else if(id==tabs[5]) index=5;
             else if(id==tabs[6]) index=6;
             else if(id==tabs[7]) index=7;
             
             for(var i=0;i<8;i++){
                     if (i==index)
                     rounds[i].attr('fill',`${colors[i]}`).attr("stroke", 'none');
                     else
                     rounds[i].attr('fill','none').attr("stroke", '#808080').attr('stroke-width', 0.75);
                }
         }
}

 //tacker
    var tracker = svg_plot.append('rect').attr('x',0 ).attr('y',0).attr('width',0.5).attr('height', '100%').attr('fill','#efefef')
    var div_plot = d3.select("#plot").append("div").attr("id", "tooltip").style('visibility','hidden');

    svg_plot.on('mousemove', ()=>{
        
        var x = d3.mouse(svg_plot.node())[0];
        
        var currentMonth = Math.floor(x / (width/56));
        console.log(data[currentMonth]);
        
        tracker.attr('x', x);
        
         div_plot.transition().duration(40).style("opacity", 1);
    
    //   div_plot.text(d3.event.pageX + ", " + d3.event.pageY)
    //   div_plot.text('AIC: ' + data[currentMonth]['AIC_'+select.value] 
    //             + '<br>JAI: ' + data[currentMonth]['JAI_'+select.value])
    
       div_plot.html('Year: '+data[currentMonth]['year'] + '<br>Month: '+ data[currentMonth]['month']
                + '<br>AIC: ' + data[currentMonth]['AIC_'+select.value] 
                + '%<br>JAI: ' + data[currentMonth]['JAI_'+select.value]
                + '%<br>SEJ: ' + data[currentMonth]['SEG_'+select.value]
                + '%<br>GOW: ' + data[currentMonth]['GOW_'+select.value]
                + '%<br>IGO: ' + data[currentMonth]['IGO_'+select.value]
                + '%<br>IAD: ' + data[currentMonth]['IAD_'+select.value]
                + '%<br>VTI: ' + data[currentMonth]['VTI_'+select.value]
                + '%<br>TRJ: ' + data[currentMonth]['TRJ_'+select.value]
                +'%')
      .style("left", (d3.event.pageX - 100) + "px")
      .style("top", (d3.event.pageY - 100) + "px");
        
    }).on('mouseover', ()=>{
        div_plot.style("display", "inline");
    })
    .on("mouseout", function(d) {
        //  div.transition().duration(500).attr('fill','black').style("opacity", 0);
         document.getElementById("tooltip").style.visibility='hidden'; 
    });;
    
    var select = document.getElementById("select");
    
    select.addEventListener("change", ()=>{
        console.log(select.value);
        draw(select.value);
    });
    
    draw('can');
    
    
});  


