
var data;


function preload() {
      data = loadTable("data/GunEvents2018JAN.csv", "csv", "header");
      console.log(data);
      // console.log(data.length);
}

function setup() {
      createCanvas(5000, 2000);
      background('#222');
      drawDataPoints();
}

function setupMap() {

}

function drawDataPoints(){

      console.log(data.rows);

      //var incident_id = data.rows[0].obj.incident_id;
      // var incident_id = data.getColumn('incident_id');
      var numberOfEvents = data.rows.length;
      // var latitude = data.getColumn('latitude');
      // var longitude = data.getColumn('longitude');

      var n_guns_involved = data.getColumn('n_guns_involved');
      var max_guns_involved = max(n_guns_involved);
      // console.log(max_guns_involved);

      var n_injured = data.getColumn('n_injured');
      var max_injured = max(n_injured);
      // console.log(max_injured);

      //map(value, start1, stop1, start2, stop2, [withinBounds])
      //map (max_injured, 0, 100);

      var n_killed = data.getColumn('n_killed');
      var max_n_killed = max(n_killed);
      // console.log(max_n_killed);

      var participant_age = data.getColumn('participant_age');

      // var gun_type = data.getColumn('gun_type');
      var eventDate = data.getColumn('date');

      // MONTH
      var month = eventDate[800].split('/')[0]; console.log(month);
      // DAY
      var janDay = eventDate[800].split('/')[1]; console.log(janDay);

      // fill('#c0c0c0');
      // textSize(28);
      // strokeWeight(4);
      // text('ALL', 40, 70);

      // var y1 = 300;

      console.log(n_killed);

          // ALL
                // text
                fill('#c0c0c0');
                textSize(16);
                strokeWeight(4);
                text('ALL', 40, 60);

                var y1 = 500;
                noFill();
                strokeWeight(1);
                //
                // n_injuredSum = function(n_injured){
                //   return n_injured.reduce(function(a,b){
                //     return a + b
                //   }, 0);
                // }



                 // totals
                 // var jan1Injured;

                 // for(i=0; i<data.length; i++){
                 //   if(eventDate[i].split('/')[1] == 1){
                 //     jan1Injured ++;
                 //   }
                 // }

                 console.log('jan1Injured'); console.log(jan1Injured);

                // for(i=0; i<n_injured.length; i++){
                //
                //   stroke(255,185,15, 90);
                //   var m = map(Number(n_injured[i]), 0, Number(max_injured),0,500);
                //   line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                //
                //
                //   stroke(0,214,214, 90)
                //   var m = map(Number(n_guns_involved[i]), 0, Number(max_guns_involved),0,500);
                //   line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                //
                //
                //   stroke(191,62,255, 90);
                //   var m = map(Number(n_killed[i]), 0, Number(max_n_killed),0,500);
                //   line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                // }

          // JAN

                      fill('#c0c0c0');
                      // stroke('#c0c0c0');
                      textSize(16);
                      strokeWeight(1);
                      text('DAY 1', 40, y1+ 60);
                      text('DAY 2', 40, y1+ 560);


                      noFill();
                      strokeWeight(1);

                      var day1=0; var day2=0; var day3=0; var day4 = 0;

                      // for(i=0; i<n_injured.length; i++){
                      //    if(eventDate[i].split('/')[1] == 1){
                      //      day1+=1;
                      //    }else if(eventDate[i].split('/')[1] == 2){
                      //      day2+=1;
                      //    }else if(eventDate[i].split('/')[1] == 3){
                      //      day3+=1;
                      //    }else if(eventDate[i].split('/')[1] == 4){
                      //      day4+=1;
                      //    }
                      // }


                      // // console.log(day1); console.log(day2); console.log(day3); console.log(day4)

                      // stroke(255,185,15, 90); //#ffb90f

                      // for(i=0; i<n_injured.length; i++){
                      //
                      //    if(eventDate[i].split('/')[1] == 1){
                      //      var x1=40; var y1 = 1000;
                      //      stroke(255,185,15, 90);
                      //      var m = map(Number(n_injured[i]), 0, Number(max_injured),0,500);
                      //      line((x1+(i*1+1)),y1,(x1+(i*1+1)),(y1- m));
                      //
                      //      stroke(0,214,214, 90)
                      //      var m = map(Number(n_guns_involved[i]), 0, Number(max_guns_involved),0,500);
                      //      line((x1+(i*1+1)),y1,(x1+(i*1+1)),(y1- m));
                      //
                      //      stroke(191,62,255, 90);
                      //      var m = map(Number(n_killed[i]), 0, Number(max_n_killed),0,500);
                      //      line((x1+(i*1+1)),y1,(x1+(i*1+1)),(y1- m));
                      //    }

                         // if(eventDate[i].split('/')[1] == 2){
                         //   x2=40; var y1 = 1500;
                         //   stroke(255,185,15, 90);
                         //   var m = map(Number(n_injured[i]), 0, Number(max_injured),0,500);
                         //   line((x2+(i*1+1)-day1),y1,(x2+(i*1+1)-day1),(y1- m));
                         //
                         //   stroke(0,214,214, 90)
                         //   var m = map(Number(n_guns_involved[i]), 0, Number(max_guns_involved),0,500);
                         //   line((x2+(i*1+1)-day1),y1,(x2+(i*1+1)-day1),(y1- m));
                         //
                         //   stroke(191,62,255, 90);
                         //   var m = map(Number(n_killed[i]), 0, Number(max_n_killed),0,500);
                         //   line((x2+(i*1+1)-day1),y1,(x2+(i*1+1)-day1),(y1- m));
                         // }

                      // }

                // for(i=0; i<n_injured.length; i++){
                //
                //   // if(eventDate[i].split('/')[0] == 1 && eventDate[i].split('/')[1] == 1){
                //     if(eventDate[i].split('/')[1] == 1){
                //
                //       y1= 400;
                //       x1= (40+(i*1+1));
                //       stroke(255,185,15, 90);
                //       var m = map(Number(n_injured[i]), 0, Number(max_injured),0,500);
                //       line(x1,y1,x1,(y1- m));
                //
                //       stroke(0,214,214, 90);
                //       var m = map(Number(n_guns_involved[i]), 0, Number(max_guns_involved),0,500);
                //       line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                //
                //       stroke(191,62,255, 90);
                //       var m = map(Number(n_killed[i]), 0, Number(max_n_killed),0,500);
                //       line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                //
                //   }else if(eventDate[i].split('/')[1] == 2){
                //       // var xShift = 4925;
                //       y1= 800;
                //       stroke(255,185,15, 90);
                //       var m = map(Number(n_injured[i]), 0, Number(max_injured),0,500);
                //       line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                //
                //       stroke(0,214,214, 90);
                //       var m = map(Number(n_guns_involved[i]), 0, Number(max_guns_involved),0,500);
                //       line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                //
                //       stroke(191,62,255, 90);
                //       var m = map(Number(n_killed[i]), 0, Number(max_n_killed),0,500);
                //       line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));}


                  // }else if(eventDate[i].split('/')[0] == 3){
                  //     // console.log(i);
                  //     y1= 2400;
                  //     stroke(255,185,15, 90);
                  //     var m = map(Number(n_injured[i]), 0, Number(max_injured),0,500);
                  //     line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                  //
                  //     stroke(0,214,214, 90);
                  //     var m = map(Number(n_guns_involved[i]), 0, Number(max_guns_involved),0,500);
                  //     line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                  //
                  //     stroke(191,62,255, 90);
                  //     var m = map(Number(n_killed[i]), 0, Number(max_n_killed),0,500);
                  //     line((40+(i*1+1)),y1,(40+(i*1+1)),(y1- m));
                  // }

              // }
}
