var toggle = true;
var aic_can, jai_can, seg_can, gow_can, igo_can, iad_can, vti_can, trj_can;
var aic_line, jai_line, seg_line, gow_line, igo_line, iad_line, vti_line, trj_line;
var selected;
var points = [];

// //------------------------- DIV for TOOLTIP ------------------------
var div_main = d3.select('body').append('div').attr('class', 'tooltip').attr('id','tooltip')
.style('background','none').style('color','#efefef').style('text-align','left').style('font-weight','normal');


// Load JSON
d3.json('./data/thesis_data_fin.json').then((data) => {
    d3.json('./data/holidays19.json').then((holi) => {
    
    
    var wid = document.getElementById('dv').style.width;

    //select svg
     var base = d3.select('#base').attr('width',908.53).attr('height',908.53)
                // .attr('width',wid).attr('height',wid)
                  .attr("preserveAspectRatio", "xMinYMin meet")
                  .attr("viewBox", `0 0 908.53 908.53`)
    
    var cent1 = parseInt(d3.select("#base").attr("width")); 
    var center_x= cent1/2, center_y = cent1/2; 
    
    var colors = ['#d75b68', '#BF98FF', '#93A7FA', '#6CB9AA', '#FF5388', '#D1A556', '#A5D672', '#92D2F7'] 
    
    var circles =[];
    
    
    
    function makeGraph() {
        
        
        base.selectAll('.anything').remove();
        
       
        //------------------ One function ---------------------------------------------
		    function allValues(name) {
		        
		        var i;
		        if(name=='aic')i=0; else if(name=='jai')i=1;
		        else if(name=='seg')i=2; else if(name=='gow')i=3;
		        else if(name=='igo')i=4; else if(name=='iad')i=5;
		        else if(name=='vti')i=6; else if(name=='trj')i=7;
		        
		        
		        base.selectAll('.anything').remove();
    
                circles[i] = base.selectAll('value'+i).data(data).enter()
                              .append('circle').attr('class','anything')
                              .attr('cx', center_x)
                              .attr('cy', (d)=>{
                              
                                  if(toggle === true){
                                      if(name=='aic') return (center_x-165)-d.AIC_can*10;
                                      else if(name=='jai') return (center_x-165)-d.JAI_can*10;
                                      else if(name=='seg') return (center_x-165)-d.SEG_can*10;
                                      else if(name=='gow') return (center_x-165)-d.GOW_can*10;
                                      else if(name=='igo') return (center_x-165)-d.IGO_can*10;
                                      else if(name=='iad') return (center_x-165)-d.IAD_can*10;
                                      else if(name=='vti') return (center_x-165)-d.VTI_can*10;
                                      else if(name=='trj') return (center_x-165)-d.TRJ_can*10;
                                  }
                                  else {
                                      if(name=='aic') return (center_x-165)-d.AIC_com*10;
                                      else if(name=='jai') return (center_x-165)-d.JAI_com*10;
                                      else if(name=='seg') return (center_x-165)-d.SEG_com*10;
                                      else if(name=='gow') return (center_x-165)-d.GOW_com*10;
                                      else if(name=='igo') return (center_x-165)-d.IGO_com*10;
                                      else if(name=='iad') return (center_x-165)-d.IAD_com*10;
                                      else if(name=='vti') return (center_x-165)-d.VTI_com*10;
                                      else if(name=='trj') return (center_x-165)-d.TRJ_com*10;
                                  }
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); 
                                  
                                  if(name=='aic') return `rotate( ${angle} ${center_x} ${center_y})`;
                                  else if(name=='jai') return `rotate( ${angle+3.75} ${center_x} ${center_y})`;
                                  else if(name=='seg') return `rotate( ${angle+7.5} ${center_x} ${center_y})`;
                                  else if(name=='gow') return `rotate( ${angle+11.25} ${center_x} ${center_y})`;
                                  else if(name=='igo') return `rotate( ${angle+15.25} ${center_x} ${center_y})`;
                                  else if(name=='iad') return `rotate( ${angle+18.75} ${center_x} ${center_y})`;
                                  else if(name=='vti') return `rotate( ${angle+22.50} ${center_x} ${center_y})`;
                                  else if(name=='trj') return `rotate( ${angle+26.25} ${center_x} ${center_y})`;
                                  
    			           })
    			          .attr('fill', colors[i]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	   if (name==='aic'){
    			            	       if (toggle === true)
                                            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : AIC' + '<br> Can : '+ d.AIC_can + '%');
                                        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : AIC' + '<br> Com : '+ d.AIC_com ); 
                                    }
    			            	   else if(name==='jai'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : JAI' + '<br> Can : '+ d.JAI_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : JAI' + '<br> Com : '+ d.JAI_com ); 
        			            	}
        			               else if(name==='seg'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : SEG' + '<br> Can : '+ d.SEG_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : SEG' + '<br> Com : '+ d.SEG_com ); 
        			            	}
        			               else if(name==='gow'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : GOW' + '<br> Can : '+ d.GOW_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : GOW' + '<br> Com : '+ d.GOW_com ); 
        			            	}
        			               else if(name==='igo'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IGO' + '<br> Can : '+ d.IGO_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IGO' + '<br> Com : '+ d.IGO_com ); 
        			            	}
        			               else if(name==='iad'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IAD' + '<br> Can : '+ d.IAD_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IAD' + '<br> Com : '+ d.IAD_com ); 
        			            	}
        			               else if(name==='vti'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : VTI' + '<br> Can : '+ d.VTI_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : VTI' + '<br> Com : '+ d.VTI_com ); 
        			            	}
        			               else if(name==='trj'){
    			            	        if (toggle === true)
    			            	            div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : TRJ' + '<br> Can : '+ d.TRJ_can + '%');
    			            	        else div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : TRJ' + '<br> Com : '+ d.TRJ_com ); 
        			            	}
    			            	   
    			            	div_main.style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			          })
                          .on('mouseout',(d)=>{
                                div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
            }

        
        
        
        //------------------ AIC can #d75b68 ---------------------------------------------
		function allAic() {
		    
		    base.selectAll('.anything').remove();

            aic_can = base.selectAll('aic_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.AIC_can*10;
                                  else return (center_x-165)-d.AIC_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[0]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : AIC' + '<br> Can : '+ d.AIC_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : AIC' + '<br> Com : '+ d.AIC_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }
		
    
     //------------------ JAI can #BF98FF ---------------------------------------------
		function allJai() {
		    
		    base.selectAll('.anything').remove();

            jai_can = base.selectAll('jai_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.JAI_can*10;
                                  else return (center_x-165)-d.JAI_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+3.75} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[1]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : JAI' + '<br> Can : '+ d.JAI_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : JAI' + '<br> Com : '+ d.JAI_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }

 //------------------ SEG can #93A7FA ---------------------------------------------
		function allSeg() {
		    
		    base.selectAll('.anything').remove();

            seg_can = base.selectAll('seg_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.SEG_can*10;
                                  else return (center_x-165)-d.SEG_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+7.5} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[2]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : SEG' + '<br> Can : '+ d.SEG_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : SEG' + '<br> Com : '+ d.SEG_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }


      //------------------ GOW can #6CB9AA ---------------------------------------------
		function allGow() {
		    
		    base.selectAll('.anything').remove();

            gow_can = base.selectAll('gow_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.GOW_can*10;
                                  else return (center_x-165)-d.GOW_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+11.25} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[3]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : GOW' + '<br> Can : '+ d.GOW_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : GOW' + '<br> Com : '+ d.GOW_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }
        
        
 //------------------ IGO can #6CB9AA ---------------------------------------------
		function allIgo() {
		    
		    base.selectAll('.anything').remove();

            igo_can = base.selectAll('igo_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.IGO_can*10;
                                  else return (center_x-165)-d.IGO_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+15.25} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[4]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IGO' + '<br> Can : '+ d.IGO_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IGO' + '<br> Com : '+ d.IGO_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }
	
 //------------------ IAD can #D1A556 ---------------------------------------------
		function allIad() {
		    
		    base.selectAll('.anything').remove();

            iad_can = base.selectAll('iad_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.IAD_can*10;
                                  else return (center_x-165)-d.IAD_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+18.75} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[5]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IAD' + '<br> Can : '+ d.IAD_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : IAD' + '<br> Com : '+ d.IAD_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }
			     
		//------------------ VTI can #D1A556 ---------------------------------------------
		function allVti() {
		    
		    base.selectAll('.anything').remove();

            vti_can = base.selectAll('vti_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.VTI_can*10;
                                  else return (center_x-165)-d.VTI_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+22.50} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[6]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : VTI' + '<br> Can : '+ d.VTI_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : VTI' + '<br> Com : '+ d.VTI_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }
		
// 			//------------------ VTI can #D1A556 ---------------------------------------------
		function allTrj() {
		    
		    base.selectAll('.anything').remove();

            trj_can = base.selectAll('trj_can').data(data).enter()
                          .append('circle').attr('class','anything')
                          .attr('cx', center_x)
                          .attr('cy', (d)=>{
                              
                                  if(toggle === true) return (center_x-165)-d.TRJ_can*10;
                                  else return (center_x-165)-d.TRJ_com*5;
                                  
                                })
                          .attr('r',2)
                          .attr('transform', (d, i) => {
                                  var angle = set_angle(d); return `rotate( ${angle+26.25} ${center_x} ${center_y})`;
    			           })
    			          .attr('fill',colors[7]).attr('visibility','visible')
    			          .on('mouseover', (d)=>{
    			              
    			            	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
    			            	    
    			            	    if(toggle === true){
                                        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : TRJ' + '<br> Can : '+ d.TRJ_can + '%') 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
    			            	    }
    			            	    else {
    			            	        div_main.html('Year : '+ d.year +'<br> Month : '+ d.month + '<br> Carrier : TRJ' + '<br> Com : '+ d.TRJ_com ) 
                                            .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px"); 
    			            	    }
                          })
                          .on('mouseout',(d)=>{
                                    div_main.style('visibility','hidden');
                          });
    
                        // points.push(jai_can);
                        // console.log(points);
        }
		

//         		// ---------- Lines ---------------------------
                
//                 var aic_cy=[]; var jai_cy =[]; var seg_cy =[]; var gow_cy = []; 
//                 var igo_cy =[]; var iad_cy=[]; var vti_cy=[]; var trj_cy = []; 
                
//                 var angle = [(Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11, 
//                             (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11,
//                             (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11,
//                             (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11,
//                             (Math.PI/6)*0, (Math.PI/6)*1, (Math.PI/6)*2,(Math.PI/6)*3, (Math.PI/6)*4, (Math.PI/6)*5, (Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11]
                
        
//                 // Y points
//                 for(var i=0; i< points[0]._groups[0].length; i++){
//                 // for(var i=0; i<points[0]._groups[0].length; i++){
//                     // aic_cy.push(center_x - aic_can._groups[0][i].cy.baseVal.value);
//                     aic_cy.push(center_x - points[0]._groups[0][i].cy.baseVal.value);
//                     // jai_cy.push(center_x - jai_can._groups[0][i].cy.baseVal.value);
//                     // seg_cy.push(center_x - seg_can._groups[0][i].cy.baseVal.value);
//                     // gow_cy.push(center_x - gow_can._groups[0][i].cy.baseVal.value);
//                     // igo_cy.push(center_x - igo_can._groups[0][i].cy.baseVal.value);
//                     // iad_cy.push(center_x - iad_can._groups[0][i].cy.baseVal.value);
//                     // vti_cy.push(center_x - vti_can._groups[0][i].cy.baseVal.value);
//                     // trj_cy.push(center_x - trj_can._groups[0][i].cy.baseVal.value);
                    
//                     jai_cy.push(center_x - points[1]._groups[0][i].cy.baseVal.value);
//                     seg_cy.push(center_x - points[2]._groups[0][i].cy.baseVal.value);
//                     gow_cy.push(center_x - points[3]._groups[0][i].cy.baseVal.value);
//                     igo_cy.push(center_x - points[4]._groups[0][i].cy.baseVal.value);
//                     iad_cy.push(center_x - points[5]._groups[0][i].cy.baseVal.value);
//                     vti_cy.push(center_x - points[6]._groups[0][i].cy.baseVal.value);
//                     trj_cy.push(center_x - points[7]._groups[0][i].cy.baseVal.value);
//                 }
                
        
//                 var paths =[];
//                 //---------------------------- Lines & Paths ------------------------------------------------------------------------
                
//                 // LINES
//                 var aic_line = d3.lineRadial().angle((d,i)=>{ 
//                     return angle[i]; 
//                 }).radius((d,i) => { 
//                     return aic_cy[i]; 
//                 });
                
                
//                 var jai_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return jai_cy[i]; });
//                 var seg_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return seg_cy[i]; });
//                 var gow_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return gow_cy[i]; });
//                 var igo_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return igo_cy[i]; });
//                 var iad_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return iad_cy[i]; });
//                 var vti_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return vti_cy[i]; });
//                 var trj_line = d3.lineRadial().angle(function(d,i) { return angle[i]; }).radius(function(d,i) { return trj_cy[i]; });
        
//                 // PATHS
//                 var aic_path =  base.append("path").datum(data).attr('transform',`translate(455,455) rotate(-30)`)
//                                     .attr("fill", "none").attr("stroke", colors[0]).attr("d", aic_line);
                                    
//                                 paths.push(aic_path);    
                        
                            
//                 var jai_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-26.25)`)
//                                     .attr("fill", "none").attr("stroke", colors[1]).attr("stroke-opacity", (d)=>{opacity(d);}).attr("d", jai_line).attr('visibility','hidden');;
                               
//                                 paths.push(jai_path);
                                
                               
//                 var seg_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-22.5)`)
//                                     .attr("fill", "none").attr("stroke", colors[2]).attr("d", seg_line).attr('visibility','hidden');;
                                    
//                                 paths.push(seg_path);    
                            
                            
//                 var gow_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-18.75)`)
//                                     .attr("fill", "none").attr("stroke", colors[3]).attr("d", gow_line).attr('visibility','hidden');;
                                    
//                                 paths.push(gow_path);    
                                    
                                    
//                 var igo_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-15)`)
//                                     .attr("fill", "none").attr("stroke", colors[4]).attr("d", igo_line).attr('visibility','hidden');;
                                    
//                                 paths.push(igo_path);    
                                    
                                    
//                 var iad_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-11.25)`)
//                                     .attr("fill", "none").attr("stroke", colors[5]).attr("d", iad_line).attr('visibility','hidden');;
                                   
//                                 paths.push(iad_path);    
                                   
                                    
//                 var vti_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-7.5)`)
//                                     .attr("fill", "none").attr("stroke", colors[6]).attr("d", vti_line).attr('visibility','hidden');;
                                
//                                 paths.push(vti_path);
                                
                                
//                 var trj_path =  base.append("path").datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(-3.75)`)
//                                     .attr("fill", "none").attr("stroke", colors[7]).attr("d", trj_line).attr('visibility','hidden');;
                                
//                                 paths.push(trj_path);  
                
//                 console.log(holi);
                        
        
        
            // //----------- Holidays ----------------
            
            // var holidays = base.selectAll('holidays')
            //                   .data(holi).enter()
            //                   .append('circle').attr('cx', center_x).attr('cy', center_x-300).attr('r',2)
            //                     .attr('transform', (d, i) => {
            //                       var angle = (30*d.monthcount)+d.day; 
            //                       return `rotate( ${angle} ${center_x} ${center_y})`;
    			     //       	})
    			     //       	.attr('fill','#ffffff').attr('visibility','visible')
    			     //       	.on('mouseover', (d)=>{
    			     //       	    div_main.transition().duration(50).style("opacity", 1).style("visibility", 'visible');
            //                         div_main.html(d.holiday + '<br>'+d.month +' '+ d.day + '<br>('+ d.metadata + ')') 
            //                         .style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY - 28) + "px");
            //                     })
            //                     .on('mouseout',(d)=>{
            //                         div_main.style('visibility','hidden');
            //                     });	
                                
            //                     // points.push(trj_can);
        
        
            // //------- Function opacity---------- 
            // function opacity(d){
                
            //      if(d.year==='2014') {console.log(d.month); return 0.2;}
            //       else if(d.year==='2015')return 0.4;
            //       else if(d.year==='2016')return 0.6;
            //       else if(d.year==='2017')return 0.8;
            //       else if(d.year==='2018')return 1.0;
            // }
        
        
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

            var tabs = ['#all-tab', '#air-india-tab', '#jet-airways-tab', '#spicejet-tab', '#go-air-tab', '#indigo-tab', '#air-asia-tab', '#vistara-tab', '#trujet-tab']
        
//             d3.select(tabs[0]).on('click', (data) =>{ 
                
//                 // function allTabs();
//                 for(j=0;j<8;j++) {
//                     points[j].attr('visibility','visible'); paths[j].attr('visibility','visible');
//                 }
//             });
            
            d3.select('#air-india-tab').on('click', (data) =>{ 
                
                selected = 'aic';
                // allAic();
                
                allValues('aic');
                 
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[0].attr('visibility','visible'); paths[0].attr('visibility','visible'); 
            });
            
    
            d3.select('#jet-airways-tab').on('click', (data) =>{ 
                
                selected = 'jai';
                // allJai();
                allValues('jai');
                
                
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[1].attr('visibility','visible'); paths[1].attr('visibility','visible');
               
            });
               
            d3.select(tabs[3]).on('click', (data) =>{ 
                
                selected = 'seg';
                // allSeg();
                allValues('seg');
                
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[2].attr('visibility','visible'); paths[2].attr('visibility','visible'); 
            });
            
            
            d3.select(tabs[4]).on('click', (data) =>{ 
                
                selected = 'gow';
                // allGow();
                allValues('gow');
                
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[3].attr('visibility','visible'); paths[3].attr('visibility','visible'); 
            });
            
            d3.select(tabs[5]).on('click', (data) =>{ 
                
                selected = 'igo';
                // allIgo();
                allValues('igo');
                 
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[4].attr('visibility','visible'); paths[4].attr('visibility','visible');
            });
            
            d3.select(tabs[6]).on('click', (data) =>{ 
                
                selected = 'iad';
                // allIad();
                allValues('iad');
                
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[5].attr('visibility','visible'); paths[5].attr('visibility','visible'); 
            });
            
            d3.select(tabs[7]).on('click', (data) =>{
                
                selected = 'vti';
                // allVti();
                allValues('vti');
                
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[6].attr('visibility','visible'); paths[6].attr('visibility','visible');
            });
            
            d3.select(tabs[8]).on('click', (data) =>{ 
                
                 selected = 'trj';
                //  allTrj();
                allValues('trj');
                
                // for(j=0;j<8;j++) {
                //     points[j].attr('visibility','hidden'); paths[j].attr('visibility','hidden');
                // }
                //     points[7].attr('visibility','visible'); paths[7].attr('visibility','visible');
            });
            
        
        
            // DROPDOWN selection
            var dd_x = (cent1/2)-85, dd_y = (cent1/2)-15; 
            var g = base.append('g').attr('id', 'toggle');
            var dd =  g.append("rect").attr('x', dd_x).attr('y', dd_y).attr("width", 170).attr("height", 30)
                    .attr('fill', 'none').attr('stroke', '#ffffff').attr("rx", 3).attr("ry", 3);
            
            g.append("text").attr("x",  dd_x+30).attr("y",  dd_y+20).text('Cancellations').attr('fill', '#efefef').style('text-size', '12px');                      
                    
            g.on('click',()=>{
                toggle=!toggle;
                
                // makeGraph();
                if(selected ==='aic') allValues('aic');
                else if(selected ==='jai') allValues('jai');
                else if(selected ==='seg') allValues('seg');
                else if(selected ==='gow') allValues('gow');
                else if(selected ==='igo') allValues('igo');
                else if(selected ==='iad') allValues('iad');
                else if(selected ==='vti') allValues('vti');
                else if(selected ==='trj') allValues('trj');
                
                // allAic();
                // else if(selected ==='jai') allJai();
                // else if(selected ==='seg') allSeg();
                // else if(selected ==='gow') allGow();
                // else if(selected ==='igo') allIgo();
                // else if(selected ==='iad') allIad();
                // else if(selected ==='vti') allVti();
                // else if(selected ==='trj') allTrj();
            // });
            });
            
//             //     d3.select(".demoSelection")
//             //     .append("option")
//             //     .attr("value", 1)
//             //     .text("Hello");
//             // d3.select(".demoSelection")
//             //     .append("option")
//             //     .attr("value", 2)
//             //     .text("Another Hello");
    
    
        
    }

    makeGraph();

 });  
});  