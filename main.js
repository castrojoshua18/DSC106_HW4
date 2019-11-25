'use strict';

const JSONFileName = 'https://raw.githubusercontent.com/castrojoshua18/castrojoshua18.github.io/master/assets/final_chadwick.json?token=AKL7YHHPQNTYAFK2Y4COJC254SZ3U';
var genreCounts = new Map();

Highcharts.ajax({
    url: JSONFileName,
    dataType: 'text',
    success: function (activity) {

        activity = JSON.parse(activity);

        // for (var i = 0; i < activity['genres'].length; i++) {
        //     to_check = activity['genres'][i];
        //     console.log(i)
        //     for (var j = 0; j < to_check.length; j++) {
        //         curr_genre = to_check[j];
        //         console.log(curr_genre)
        //         if (genreCounts.has(curr_genre)) {
        //             curr_val  = genreCounts.get(curr_genre)
        //             genreCounts.set(curr_genre, curr_val+1)
        //         }
        //         else {
        //             genreCounts.set(curr_genre, 0)
        //         }
        //     }
        // }

        var timelineDiv = document.createElement('div');
        timelineDiv.className = 'timeline';
        document.getElementById('timeline').append(timelineDiv);

        Highcharts.chart(timelineDiv, {
            chart: {
                type: 'timeline',
                backgroundColor: 'transparent'
            },
            xAxis: {
                type: 'datetime',
                visible: true
            },
            yAxis: {
                gridLineWidth: 1,
                title: null,
                labels: {
                    enabled: false
                }
            },
            legend: {
                enabled: false
            },
            title: {
                text: "How have Chadwick Boseman's roles evolved?"
            },
            subtitle: {
                text: "Fig. 1: A visualized transition of Boseman's role in featured movies (U.S. domestic)"
            },
            colors: [
                '#c9af95',
                '#b59a7f',
                '#a3896f',
                '#8f755b',
                '#755d45',
                '#614b35',
                '#523d28',
                '#4a341e',
                '#452d15',
                '#3d260f',
                '#2e1b08'
            ],
            credits: {
                enabled: false
            },
            series: [{
                pointStart: Date.UTC(2008, 10, 22),
                dataLabels: {
                    allowOverlap: false,
                    format: '<span style="color:{point.color}">● </span><span style="font-weight: bold;" > ' +
                '{point.label}'
                },
                 data: [{
                        x: Date.UTC(2008, 10, 22),
                        name: 'The Express (2008)',
                        label: 'Support',
                        description: "Part: Floyd Little",
                    },
                    {
                        x: Date.UTC(2013, 3, 12),
                        name: '42',
                        label: 'Lead',
                        description: "Part: Jackie Robinson",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2014, 5, 22),
                        name: 'Draft Day',
                        label: 'Support',
                        description: "Part: Vontae Mack"
                    },
                    {
                        x: Date.UTC(2014, 7, 1),
                        name: 'Get on Up ',
                        label: 'Lead',
                        description: "Part: James Brown",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2016, 1, 26),
                        name: 'Gods of Egypt',
                        label: 'Support',
                        description: "Part: Thoth"
                    },
                    {
                        x: Date.UTC(2016, 4, 6),
                        name: 'Captain America: Civil War',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2017, 9, 13),
                        name: 'Marshall',
                        label: 'Lead',
                        description: "Part: Thurgood Marshall",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2018, 1, 16),
                        name: 'Black Panther',
                        label: 'Lead',
                        description: "Part: T'Challa - Black Panther",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2018, 3, 27),
                        name: 'Avengers: Infinity War',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2019, 3, 26),
                        name: 'Avengers: Endgame',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2019, 10, 22),
                        name: '21 Bridges',
                        label: 'Lead',
                        description: "Part: Andre Davis",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                ]
            }]
        })

        var radarDiv = document.createElement('div');
        radarDiv.className = 'timeline';
        document.getElementById('radar').append(radarDiv);

        Highcharts.chart(radarDiv, {
            
        })

    }

})