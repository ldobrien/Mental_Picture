module.exports = (body) => {

    let current = new Date().toLocaleString(undefined, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });

    let date = JSON.stringify(current);
    // yyyy-mm-dd
    
    val_list = body.split(',')

    let diet = val_list[2]
    let exercise = val_list[3]
    let sleep = val_list[1]
    let mood = val_list[0]

    let json_obj = `{"date": ${date}, "diet":${diet}, "exercise":${exercise}, "sleep":${sleep}, "mood":${sleep}}`

    return json_obj

}