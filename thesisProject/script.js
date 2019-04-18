// Load CSV
// d3.csv("./data/thesis_data.csv").then(function(data) { });

// Load JSON
d3.json('./data/thesis_data.json').then((data) => {
    
    this.document.activeElement.id = '#air-india-tab';
    
    console.log(data);
    var svg = d3.select(".col-7").append('svg').attr('width', '100%').attr('height','125%')
   
        // ------------------ highlight background ---------------------------
        // var rect = svg.append('rect').attr("x", '0%').attr('y', '0%')
        //               .attr('width', '100%' ).attr('height','100%')
        //               .style('fill','#ffffff'). style('opacity', 0.05)
        
        
        // ------------------ svg by image upload-------------------------------
        // var base = svg.append("image")
        //               .attr("xlink:href","./svg/svg_main.svg").attr('x', 80).attr('y', 40)
        //               .attr("width", dv_width/2*1.5).attr("height", dv_width/2*1.5)
       
      
        // Set SVG
        var base = d3.select('#base').attr("preserveAspectRatio", "xMinYMin meet")
                                     .attr("viewBox", `-150 -50 1350 1350`)
                                     .classed("svg-content", true)
       
       
        // set Center of SVG
        var x = parseInt(d3.select("#base").attr("width")); 
        var y = parseInt(d3.select("#base").attr("height"));
        var fin_x = x/2+150; 
        var fin_y = y/2+150;

        var center = base.append('circle').attr('cx', fin_x).attr('cy', y/2+150).attr('r',5).attr('fill','#ffffff');
         
 
        //   var plot_can = base.selectAll('plot_can')
        //                   .data(data).enter()
        //                   .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
        //                       var cyy = cy_value(d); return cyy- can_value(d)*10;
        //                     }).attr('r',3)
        //                     .attr('transform', (d, i) => {
        //                       var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			     //       	}).attr('fill','#F87979').attr('visibility','visible');
         
        

        //------------------ AIC can #F87979 ---------------------------------------------
        var aic_can = base.selectAll('aic_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.AIC_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#F87979').attr('visibility','hidden')
		

        //------------------ JAI can #BF98FF ---------------------------------------------
        var jai_can = base.selectAll('jai_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.JAI_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#BF98FF').attr('visibility','hidden');
		
		
			            	
		//------------------ SEG can #93A7FA ---------------------------------------------
        var seg_can = base.selectAll('seg_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.SEG_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#93A7FA').attr('visibility','hidden');

        
        
        //------------------ GOW can #6CB9AA ---------------------------------------------
        var gow_can = base.selectAll('gow_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.GOW_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#6CB9AA').attr('visibility','hidden');
			            
			            	
	
	    //------------------ IGO can #FF5388 ---------------------------------------------
        var igo_can = base.selectAll('igo_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.IGO_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#FF5388').attr('visibility','hidden');
			
			
			            	
		//------------------ IAD can #D1A556 ---------------------------------------------
        var iad_can = base.selectAll('iad_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.IAD_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#D1A556').attr('visibility','hidden');
			            	
			            	
			            	
		//------------------ VTI can #A5D672 ---------------------------------------------
        var vti_can = base.selectAll('vti_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.VTI_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#A5D672').attr('visibility','hidden');
			            	
			            	
		//------------------ TRJ can #92D2F7 ---------------------------------------------
        var trj_can = base.selectAll('trj_can')
                          .data(data).enter()
                          .append('circle').attr('cx', fin_x).attr('cy', (d)=>{
                              var cyy = cy_value(d); return cyy-d.TRJ_can*10;
                            }).attr('r',3)
                            .attr('transform', (d, i) => {
                               var angle = set_angle(d); return `rotate( ${angle} ${fin_x} ${fin_y})`;
			            	}).attr('fill','#92D2F7').attr('visibility','hidden');




        // ---------- Lines ---------------------------
        
        var aic_cy=[]; var jai_cy =[]; var seg_cy =[]; var gow_cy = []; 
        var igo_cy =[]; var iad_cy=[]; var vti_cy=[]; var trj_cy = []; 
        var angle = [(Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11, 
                    (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11,
                    (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11,
                    (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11,
                    (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11]
        
        
        // Y points
        for(var i=0; i<aic_can._groups[0].length; i++){
            aic_cy.push(fin_y - aic_can._groups[0][i].cy.baseVal.value);
            jai_cy.push(fin_y - jai_can._groups[0][i].cy.baseVal.value);
            seg_cy.push(fin_y - seg_can._groups[0][i].cy.baseVal.value);
            gow_cy.push(fin_y - gow_can._groups[0][i].cy.baseVal.value);
            igo_cy.push(fin_y - igo_can._groups[0][i].cy.baseVal.value);
            iad_cy.push(fin_y - iad_can._groups[0][i].cy.baseVal.value);
            vti_cy.push(fin_y - vti_can._groups[0][i].cy.baseVal.value);
            trj_cy.push(fin_y - trj_can._groups[0][i].cy.baseVal.value);
        }
        
        
        //---------------------------- Lines & Paths ------------------------------------------------------------------------
        
        // LINES
        var aic_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return aic_cy[i]; });
        var jai_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return jai_cy[i]; });
        var seg_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return seg_cy[i]; });
        var gow_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return gow_cy[i]; });
        var igo_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return igo_cy[i]; });
        var iad_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return iad_cy[i]; });
        var vti_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return vti_cy[i]; });
        var trj_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return trj_cy[i]; });

        // PATHS
        var aic_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#F87979").attr("d", aic_line);
        var jai_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", jai_line);
        var seg_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", seg_line);
        var gow_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", gow_line);
        var igo_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", igo_line);
        var iad_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", iad_line);
        var vti_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", vti_line);
        var trj_path =  base.append("path").datum(data).attr('transform','translate(550,550) rotate(-30)')
                            .attr("fill", "none").attr("stroke", "#BF98FF").attr("d", trj_line);
                            
        
        //------- Function ---------- to set Y value
        function cy_value(d){
              if(d.year=='2014')return fin_y-200;
              else if(d.year=='2015')return fin_y-260;
              else if(d.year=='2016')return fin_y-321;
              else if(d.year=='2017')return fin_y-381;
              else if(d.year=='2018')return fin_y-442;
        }
        
        
        //-------- Function --------- to set angle of rotation based on month
        function set_angle(d) {
            
            var angle = 0;
            
              if(d.month=='jan') angle = 0;
              else if(d.month=='feb')angle = 30.00*1;
              else if(d.month=='mar')angle = 30.00*2;
              else if(d.month=='apr')angle = 30.00*3;
              else if(d.month=='may')angle = 30.00*4;
              else if(d.month=='jun')angle = 30.00*5;
              else if(d.month=='jul')angle = 30.00*6;
              else if(d.month=='aug')angle = 30.00*7;
              else if(d.month=='sep')angle = 30.00*8;
              else if(d.month=='oct')angle = 30.00*9;
              else if(d.month=='nov')angle = 30.00*10;
              else if(d.month=='dec')angle = 30.00*11;
            
            return angle;
        }


         function set_angle_pi(d) {
            
              if(d.month=='jan') angle = 0;
              else if(d.month=='feb') return (Math.PI/8)*1;
              else if(d.month=='mar') return (Math.PI/8)*2;
              else if(d.month=='apr') return (Math.PI/8)*3;
              else if(d.month=='may') return (Math.PI/8)*4;
              else if(d.month=='jun') return (Math.PI/8)*5;
              else if(d.month=='jul') return (Math.PI/8)*6;
              else if(d.month=='aug') return (Math.PI/8)*7;
              else if(d.month=='sep') return (Math.PI/8)*8;
              else if(d.month=='oct') return  (Math.PI/8)*9;
              else if(d.month=='nov') return (Math.PI/8)*10;
              else if(d.month=='dec') return (Math.PI/8)*11;
            
        }

        // ---------------------- Interactivity ----------------------
        
        d3.select('#air-india-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','visible'); jai_can.attr('visibility','hidden'); seg_can.attr('visibility','hidden'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','hidden'); vti_can.attr('visibility','hidden'); trj_can.attr('visibility','hidden');
        
            // Paths
            aic_path.attr('visibility','visible'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','hidden');
        
        
        });
        
        d3.select('#jet-airways-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','visible'); seg_can.attr('visibility','hidden'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','hidden'); vti_can.attr('visibility','hidden'); trj_can.attr('visibility','hidden');
       
            // Paths
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','visible'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','hidden');
            
        });
        
        d3.select('#spicejet-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','hidden');seg_can.attr('visibility','visible'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','hidden');vti_can.attr('visibility','hidden'); trj_can.attr('visibility','hidden');
        
            // Paths
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','visible'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','hidden');
        });
        
        d3.select('#go-air-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','hidden');seg_can.attr('visibility','hidden'); gow_can.attr('visibility','visible');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','hidden');vti_can.attr('visibility','hidden'); trj_can.attr('visibility','hidden');
            
            // Paths
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','visible'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','hidden');
        });
        
        d3.select('#indigo-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','hidden');seg_can.attr('visibility','hidden'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','visible'); iad_can.attr('visibility','hidden');vti_can.attr('visibility','hidden'); trj_can.attr('visibility','hidden');
        
            // Paths
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','visible'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','hidden');
        });
        
        d3.select('#air-asia-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','hidden');seg_can.attr('visibility','hidden'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','visible');vti_can.attr('visibility','hidden'); trj_can.attr('visibility','hidden');
        
            // Paths
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','visible'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','hidden');
        });
        
        d3.select('#vistara-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','hidden');seg_can.attr('visibility','hidden'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','hidden');vti_can.attr('visibility','visible'); trj_can.attr('visibility','hidden');
        
            // Paths
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','visible'); trj_path.attr('visibility','hidden');
        });
        
        d3.select('#trujet-tab').on('click', (data) =>{
            // Points
            aic_can.attr('visibility','hidden'); jai_can.attr('visibility','hidden');seg_can.attr('visibility','hidden'); gow_can.attr('visibility','hidden');
            igo_can.attr('visibility','hidden'); iad_can.attr('visibility','hidden');vti_can.attr('visibility','hidden'); trj_can.attr('visibility','visible');
        
            // Paths    
            aic_path.attr('visibility','hidden'); jai_path.attr('visibility','hidden'); seg_path.attr('visibility','hidden'); gow_path.attr('visibility','hidden'); 
            igo_path.attr('visibility','hidden'); iad_path.attr('visibility','hidden'); vti_path.attr('visibility','hidden'); trj_path.attr('visibility','visible');
        });
                             
});       


            // function can_value(data){
                
            //  if(airline=='air-india-tab') can = data.AIC_can;
            //  else if(airline=='jet-airways-tab') can = data.JAI_can;
            //  else if(airline=='spicejet-tab') can = data.SEG_can;
            //  else if(airline=='go-air-tab') can = data.GOW_can;
            //  else if(airline=='indigo-tab') can = data.IGO_can;
            //  else if(airline=='air-asia-tab') can = data.IAD_can;
            //  else if(airline=='vistara-tab') can = data.VTI_can;
            //  else if(airline=='trujet-tab') can = data.TRJ_can;
             
            // }