let m = require('../helpers/mongo');

module.exports = (callback) => {
    callback(
		null,
		[{"date": "2018-01-01", "diet":1204, "exercise":3, "sleep":5, "mood":1},
        {"date": "2018-01-02", "diet":218, "exercise":1, "sleep":7, "mood":0},
        {"date": "2018-01-03", "diet":482, "exercise":3, "sleep":3, "mood":1},
        {"date": "2018-01-04", "diet":1030, "exercise":2, "sleep":10, "mood":1},
        {"date": "2018-01-05", "diet":1353, "exercise":2, "sleep":8, "mood":1},
        {"date": "2018-01-06", "diet":1925, "exercise":3, "sleep":11, "mood":2},
        {"date": "2018-01-07", "diet":1006, "exercise":1, "sleep":11, "mood":1},
        {"date": "2018-01-08", "diet":1295, "exercise":0, "sleep":2, "mood":2},
        {"date": "2018-01-09", "diet":1404, "exercise":3, "sleep":9, "mood":2},
        {"date": "2018-01-10", "diet":1369, "exercise":1, "sleep":0, "mood":0},
        {"date": "2018-01-11", "diet":2246, "exercise":3, "sleep":6, "mood":0},
        {"date": "2018-01-12", "diet":323, "exercise":2, "sleep":9, "mood":2},
        {"date": "2018-01-13", "diet":1111, "exercise":1, "sleep":11, "mood":0},
        {"date": "2018-01-14", "diet":685, "exercise":1, "sleep":6, "mood":2},
        {"date": "2018-01-15", "diet":1514, "exercise":0, "sleep":6, "mood":2},
        {"date": "2018-01-16", "diet":719, "exercise":0, "sleep":3, "mood":1},
        {"date": "2018-01-17", "diet":1727, "exercise":3, "sleep":2, "mood":2},
        {"date": "2018-01-18", "diet":1291, "exercise":2, "sleep":6, "mood":0},
        {"date": "2018-01-19", "diet":1014, "exercise":3, "sleep":6, "mood":1},
        {"date": "2018-01-20", "diet":1918, "exercise":2, "sleep":11, "mood":2},
        {"date": "2018-01-21", "diet":2337, "exercise":0, "sleep":9, "mood":0},
        {"date": "2018-01-22", "diet":2170, "exercise":2, "sleep":1, "mood":1},
        {"date": "2018-01-23", "diet":729, "exercise":2, "sleep":0, "mood":2},
        {"date": "2018-01-24", "diet":2014, "exercise":3, "sleep":4, "mood":2},
        {"date": "2018-01-25", "diet":1901, "exercise":1, "sleep":10, "mood":2},
        {"date": "2018-01-26", "diet":1066, "exercise":3, "sleep":2, "mood":0},
        {"date": "2018-01-27", "diet":2075, "exercise":3, "sleep":3, "mood":2},
        {"date": "2018-01-28", "diet":743, "exercise":3, "sleep":2, "mood":1},
        {"date": "2018-01-29", "diet":817, "exercise":0, "sleep":1, "mood":2},
        {"date": "2018-01-30", "diet":1627, "exercise":3, "sleep":10, "mood":2}]
	);
};
