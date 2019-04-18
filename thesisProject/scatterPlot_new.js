// // Load CSV
// d3.csv("./data/thesis_data.csv").then(function(data) {
// });

 
// svg = d3.select('body').append('svg').attr('width','100%').attr('height','200%')

var svg_heading = d3.select('body').append('svg').attr('x','0%').attr('y','0%').attr('width','100%').attr('height','30%')

svg_heading.append('text').attr('id','heading').attr('x','20%').attr('y','40%')
                .text('Visualizing the impact of Climate Change on Flight Experience').attr("font-family", "sans-serif")
                .style("font-size", 21).style("fill", "#FFFFFF");


var svg_dv = d3.select('body').append('svg').attr('x','0%').attr('y','30%').attr('width','100%').attr('height','100%')

// svg.attr('class','sidebar').append('text').attr('id','sidebar1')
//                  .attr('x','5%').attr('y','120%')
//                  .text('Jet Airways').attr("font-family", "sans-serif")
//                  .style("font-size", 14).style("fill", "#FFFFFF");

// Load JSON
d3.json('./data/thesis_data.json').then((data) => {
    console.log(data);

});  


// var chart = c3.generate({
//     data: {
//         x: 'x',
//         columns: [
//             ['x', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             ['sample', 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
//         ]
//     },
//     axis: {
//         x: {
//             type: 'category',
//             categories:  ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//         }
//     }
// });

