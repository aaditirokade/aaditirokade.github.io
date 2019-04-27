

var toggle = true;
var aic_can, jai_can, seg_can, gow_can, igo_can, iad_can, vti_can, trj_can;
var aic_line, jai_line, seg_line, gow_line, igo_line, iad_line, vti_line, trj_line;
var aic_path, jai_path, seg_path, gow_path, igo_path, iad_path, vti_path, trj_path;
var selected;
var points = [], circles =[], lines =[], paths =[], ypoints= [];
var aic_cy=[], jai_cy =[], seg_cy =[], gow_cy = [], igo_cy =[], iad_cy=[], vti_cy=[], trj_cy = []; 

var colors = ['#d75b68', '#BF98FF', '#93A7FA', '#6CB9AA', '#FF5388', '#D1A556', '#A5D672', '#92D2F7']; 
    
   

//------------------------- DIV for TOOLTIP ------------------------
var div_main = d3.select('body').append('div').attr('class', 'tooltip').attr('id','tooltip')
.style('background','none').style('color','#efefef').style('text-align','left').style('font-weight','normal');


// Load JSON
d3.json('./data/thesis_data.json').then((data) => {
    d3.json('./data/holidays19.json').then((holi) => {
    
    
    var wid = document.getElementById('dv').style.width;

    //select svg
     var base = d3.select('#base').attr('width',908.53).attr('height',908.53)
                // .attr('width',wid).attr('height',wid)
                  .attr("preserveAspectRatio", "xMinYMin meet")
                  .attr("viewBox", `0 0 908.53 908.53`)
    
    var cent1 = parseInt(d3.select("#base").attr("width")); 
    var center_x= cent1/2, center_y = cent1/2; 

    
    

        
       //------------------ One function ---------------------------------------------
		    
		function allValues(name) {
		        
		        circles =[], lines =[], paths =[], ypoints= [];
                aic_cy=[], jai_cy =[], seg_cy =[], gow_cy = [], igo_cy =[], iad_cy=[], vti_cy=[], trj_cy = [];
                
               
                base.selectAll('.anything').remove();
                base.selectAll('.path').remove();
                
		        
		        var i;
		        if(name=='aic')i=0; else if(name=='jai')i=1;
		        else if(name=='seg')i=2; else if(name=='gow')i=3;
		        else if(name=='igo')i=4; else if(name=='iad')i=5;
		        else if(name=='vti')i=6; else if(name=='trj')i=7;
	
    
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
    
             
                
                if(name==='aic'){
                   
                     for(var i=0; i< circles[0]._groups[0].length; i++) aic_cy.push(center_x - circles[0]._groups[0][i].cy.baseVal.value);
                      ypoints[0]=aic_cy;  
                }
                else if(name==='jai'){
                     for(var i=0; i< circles[1]._groups[0].length; i++) jai_cy.push(center_x - circles[1]._groups[0][i].cy.baseVal.value);
                     ypoints[1]=jai_cy;                
                }
                else if(name==='seg'){
                     for(var i=0; i< circles[2]._groups[0].length; i++) seg_cy.push(center_x - circles[2]._groups[0][i].cy.baseVal.value);
                     ypoints[2]=seg_cy;
                }
                else if(name==='gow'){
                     for(var i=0; i< circles[3]._groups[0].length; i++) gow_cy.push(center_x - circles[3]._groups[0][i].cy.baseVal.value);
                     ypoints[3]=gow_cy;
                }
                else if(name==='igo'){
                     for(var i=0; i< circles[4]._groups[0].length; i++) igo_cy.push(center_x - circles[4]._groups[0][i].cy.baseVal.value);
                     ypoints[4]=igo_cy;
                }
                else if(name==='iad'){
                     for(var i=0; i< circles[5]._groups[0].length; i++) iad_cy.push(center_x - circles[5]._groups[0][i].cy.baseVal.value);
                     ypoints[5]=iad_cy;
                }
                 else if(name==='vti'){
                     for(var i=0; i< circles[6]._groups[0].length; i++) vti_cy.push(center_x - circles[6]._groups[0][i].cy.baseVal.value);
                     ypoints[6]=vti_cy;
                }
                 else if(name==='trj'){
                     for(var i=0; i< circles[7]._groups[0].length; i++) trj_cy.push(center_x - circles[7]._groups[0][i].cy.baseVal.value);
                     ypoints[7]=trj_cy;
                }
              
 
                var angle = [(Math.PI/6)*6, (Math.PI/6)*7, (Math.PI/6)*8, (Math.PI/6)*9, (Math.PI/6)*10, (Math.PI/6)*11]
                
                for(var a=0;a<4;a++){
                    for(var b=0;b<12;b++){
                        angle.push(Math.PI/6*b);
                    }
                }
            
                if(name=='aic')i=0; else if(name=='jai')i=1;
		        else if(name=='seg')i=2; else if(name=='gow')i=3;
		        else if(name=='igo')i=4; else if(name=='iad')i=5;
		        else if(name=='vti')i=6; else if(name=='trj')i=7;
		  
		     var path_angle = [-30, -26.25, -22.5, -18.75, -15, -11.25, -7.5, -3.75 ];
		     
             colors = ['#d75b68', '#BF98FF', '#93A7FA', '#6CB9AA', '#FF5388', '#D1A556', '#A5D672', '#92D2F7']
             lines[i] = d3.lineRadial().angle( (d,i)=> { return angle[i]; }).radius( (d,j)=> { return ypoints[i][j]; });
             
             paths[i] = base.append("path").attr('class','path').datum(data).attr('transform',`translate(${center_x},${center_x}) rotate(${path_angle[i]})`)
                                  .attr("fill", "none").attr("stroke", colors[i]).attr("stroke-opacity", (d)=>{opacity(d);}).attr("d", lines[i]).attr('visibility','visible');
       
        
	    }
            
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
        
        
            //------- Function opacity---------- 
            function opacity(d){
                
                 if(d.year==='2014') {console.log(d.month); return 0.2;}
                  else if(d.year==='2015')return 0.4;
                  else if(d.year==='2016')return 0.6;
                  else if(d.year==='2017')return 0.8;
                  else if(d.year==='2018')return 1.0;
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

            var tabs = ['#all-tab', '#air-india-tab', '#jet-airways-tab', '#spicejet-tab', '#go-air-tab', '#indigo-tab', '#air-asia-tab', '#vistara-tab', '#trujet-tab']
        
            d3.select(tabs[0]).on('click', (data) =>{ selected = 'all'; allValues('all'); });
            d3.select(tabs[1]).on('click', (data) =>{ selected = 'aic'; allValues('aic'); });
            d3.select(tabs[2]).on('click', (data) =>{ selected = 'jai'; allValues('jai'); });
            d3.select(tabs[3]).on('click', (data) =>{ selected = 'seg'; allValues('seg'); });
            d3.select(tabs[4]).on('click', (data) =>{ selected = 'gow'; allValues('gow'); });
            d3.select(tabs[5]).on('click', (data) =>{ selected = 'igo'; allValues('igo'); });
            d3.select(tabs[6]).on('click', (data) =>{ selected = 'iad'; allValues('iad'); });
            d3.select(tabs[7]).on('click', (data) =>{ selected = 'vti'; allValues('vti'); });
            d3.select(tabs[8]).on('click', (data) =>{ selected = 'trj'; allValues('trj'); });
            
        
        
            // DROPDOWN selection
            var dd_x = (cent1/2)-85, dd_y = (cent1/2)-15; 
            var g = base.append('g').attr('id', 'toggle');
            var dd =  g.append("rect").attr('x', dd_x).attr('y', dd_y).attr("width", 170).attr("height", 30)
                    .attr('fill', 'none').attr('stroke', '#ffffff').attr("rx", 3).attr("ry", 3);
            
            g.append("text").attr('class','button').attr("x",  dd_x+30).attr("y",  dd_y+20).text('Cancellations').attr('fill', '#efefef').style('text-size', '12px');                      
                    
            g.on('click',()=>{
                
                g.selectAll('.button').remove();
                toggle = !toggle;
                
                if(toggle === true)
                g.append("text").attr('class','button').attr("x",  dd_x+30).attr("y",  dd_y+20).text('Cancellations').attr('fill', '#efefef').style('text-size', '12px'); 
                else
                g.append("text").attr('class','button').attr("x",  dd_x+30).attr("y",  dd_y+20).text('Complaints').attr('fill', '#efefef').style('text-size', '12px'); 
            
                
                
                if(selected =='aic') allValues('aic');
                else if(selected =='jai') allValues('jai');
                else if(selected =='seg') allValues('seg');
                else if(selected =='gow') allValues('gow');
                else if(selected =='igo') allValues('igo');
                else if(selected =='iad') allValues('iad');
                else if(selected =='vti') allValues('vti');
                else if(selected =='trj') allValues('trj');
               
               
            });


 });  
});  