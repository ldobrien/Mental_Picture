let m = require('../helpers/mongo');

module.exports = (callback) => {
    callback(
		null,
		[{"date": "2018-01-01", "diet":1798, "exercise":3, "sleep":9, "mood":3},
        {"date": "2018-01-02", "diet":1644, "exercise":3, "sleep":3, "mood":4},
        {"date": "2018-01-03", "diet":453, "exercise":3, "sleep":10, "mood":3},
        {"date": "2018-01-04", "diet":1567, "exercise":3, "sleep":3, "mood":2},
        {"date": "2018-01-05", "diet":1840, "exercise":1, "sleep":3, "mood":0},
        {"date": "2018-01-06", "diet":2213, "exercise":2, "sleep":11, "mood":2},
        {"date": "2018-01-07", "diet":837, "exercise":1, "sleep":10, "mood":0},
        {"date": "2018-01-08", "diet":891, "exercise":0, "sleep":3, "mood":3},
        {"date": "2018-01-09", "diet":1847, "exercise":2, "sleep":9, "mood":1},
        {"date": "2018-01-10", "diet":909, "exercise":1, "sleep":10, "mood":0},
        {"date": "2018-01-11", "diet":1141, "exercise":2, "sleep":9, "mood":2},
        {"date": "2018-01-12", "diet":2185, "exercise":2, "sleep":2, "mood":1},
        {"date": "2018-01-13", "diet":2286, "exercise":0, "sleep":0, "mood":2},
        {"date": "2018-01-14", "diet":1972, "exercise":2, "sleep":2, "mood":3},
        {"date": "2018-01-15", "diet":1552, "exercise":3, "sleep":5, "mood":1},
        {"date": "2018-01-16", "diet":2045, "exercise":0, "sleep":0, "mood":3},
        {"date": "2018-01-17", "diet":1012, "exercise":3, "sleep":9, "mood":0},
        {"date": "2018-01-18", "diet":260, "exercise":0, "sleep":11, "mood":2},
        {"date": "2018-01-19", "diet":1634, "exercise":2, "sleep":0, "mood":1},
        {"date": "2018-01-20", "diet":1249, "exercise":2, "sleep":7, "mood":4},
        {"date": "2018-01-21", "diet":1609, "exercise":0, "sleep":2, "mood":1},
        {"date": "2018-01-22", "diet":1444, "exercise":0, "sleep":0, "mood":2},
        {"date": "2018-01-23", "diet":927, "exercise":2, "sleep":7, "mood":1},
        {"date": "2018-01-24", "diet":994, "exercise":2, "sleep":1, "mood":4},
        {"date": "2018-01-25", "diet":1720, "exercise":1, "sleep":2, "mood":4},
        {"date": "2018-01-26", "diet":1324, "exercise":0, "sleep":6, "mood":1},
        {"date": "2018-01-27", "diet":1148, "exercise":2, "sleep":3, "mood":3},
        {"date": "2018-01-28", "diet":1458, "exercise":3, "sleep":1, "mood":0},
        {"date": "2018-01-29", "diet":96, "exercise":1, "sleep":6, "mood":0},
        {"date": "2018-01-30", "diet":818, "exercise":3, "sleep":1, "mood":2}]
	);
};
