console.log('hi');
var fs = require('fs');

fs.readFile('data/GunEvents2018.json', (err, data)=>{
  if(err) throw(err);

  var jsonParsed = JSON.parse(data);


 var output={}; //object

  for(i=0;i<jsonParsed.results.length;i++){
    var row = jsonParsed.results[i];

    var dateSplit = row.date.split('/');

    var dateKey = dateSplit[0]+'/'+dateSplit[2];

    if(output[dateKey]){

      output[dateKey].n_incidents += 1;
      output[dateKey].n_killed += row.n_killed;
      output[dateKey].n_injured += row.n_injured;
      output[dateKey][row.state] +=1;

    }else{

     output[dateKey] = {
       n_incidents: 1,
       n_killed: row.n_killed,
       n_injured: row.n_injured,
       Male: 0,
       Female: 0
     };

     output[dateKey][row.state] = 1;

     //0 :: Male || 1::Male ||2::Male||3::Male||4::Male
     var genders = row.participant_gender.split("||");
     for (var i = 0; i < genders.length; i++) {
       var gender = genders[i].split("::")[1];
       output[dateKey][gender] += 1;
     } 
    }

  }

  console.log(output);

});
