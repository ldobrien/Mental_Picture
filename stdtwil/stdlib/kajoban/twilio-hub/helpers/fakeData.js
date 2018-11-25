let m = require('./mongo');

function fake(){

    //generate fake data
    let arr = [];

    //fake data for each date 
    for(i = 1 ; i <= 1 ; i++){
        for(j = 1; j <= 30 ; j++){
            let date = `2018-${i}-${j}`
            let diet = Math.floor(Math.random() * (2500 - 0) + 0);
            let exercise = Math.floor(Math.random() * (4 - 0) + 0);
            let sleep = Math.floor(Math.random() * (12 - 0) + 0);
            let mood = Math.floor(Math.random() * (5 - 0) + 0);

            let json_obj = `{"date": ${JSON.stringify(date)}, "diet":${diet}, "exercise":${exercise}, "sleep":${sleep}, "mood":${mood}}`

            m.insertData(json_obj)
        }
    }

}

fake();