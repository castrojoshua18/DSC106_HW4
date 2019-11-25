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
                        name: '42 (2013)',
                        label: 'Lead',
                        description: "Part: Jackie Robinson",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2014, 5, 22),
                        name: 'Draft Day (2014)',
                        label: 'Support',
                        description: "Part: Vontae Mack"
                    },
                    {
                        x: Date.UTC(2014, 7, 1),
                        name: 'Get on Up (2013)',
                        label: 'Lead',
                        description: "Part: James Brown",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2016, 1, 26),
                        name: 'Gods of Egypt (2016)',
                        label: 'Support',
                        description: "Part: Thoth"
                    },
                    {
                        x: Date.UTC(2016, 4, 6),
                        name: 'Captain America: Civil War (2016)',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2017, 9, 13),
                        name: 'Marshall (2017)',
                        label: 'Lead',
                        description: "Part: Thurgood Marshall",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2018, 1, 16),
                        name: 'Black Panther (2018)',
                        label: 'Lead',
                        description: "Part: T'Challa - Black Panther",
                        dataLabels: {
                            backgroundColor: '#ebd5c0'
                        }
                    },
                    {
                        x: Date.UTC(2018, 3, 27),
                        name: 'Avengers: Infinity War (2018)',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2019, 3, 26),
                        name: 'Avengers: Endgame (2019)',
                        label: 'Support',
                        description: "Part: T'Challa - Black Panther"
                    },
                    {
                        x: Date.UTC(2019, 10, 22),
                        name: '21 Bridges (2019)',
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
        radarDiv.className = 'radar';
        document.getElementById('radar').append(radarDiv);

        Highcharts.chart(radarDiv, {
            chart: {
                type: 'area',
                polar: true,
                backgroundColor: 'transparent',
                color: '#ebd5c0'
            },
        
            title: {
                text: 'Does Chadwick Boseman have a favorite movie genre to act in?'
            },
        
            subtitle: {
                text: "Fig. 3: Categorized comparison of the number of movies featuring Boseman per genre (U.S. Domestic)"
            },
        
            pane: {
                startAngle: 0,
                endAngle: 360
            },
        
            xAxis: {
                tickInterval: 36,
                min: 0,
                max: 360,
                labels: {
                    formatter: function () {
                        var list_labels = ['Action', 'Crime', 'Drama', 'Thriller', 'Adventure', 
                        'Sci-Fi / Fantasy', 'Biography', 'Sport', 'History','Music'];
                        var i = this.value / 36;
                        return list_labels[i];
                    } 
                }
            },
            tooltip: {
                formatter: function() {
                    var list_labels = ['Action', 'Crime', 'Drama', 'Thriller', 'Adventure', 
                        'Sci-Fi / Fantasy', 'Biography', 'Sport', 'History','Music'];
                    var i = this.x / 36;
                    return '<b>'+ list_labels[i] +'</b>: '+ this.y ;
                }
            },
            yAxis: {
                min: 0
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 36
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },
        
            series: [{
                type: 'area',
                color: '#c9af95',
                data: [6, 2, 7, 1, 5, 5, 4, 3, 1, 1]
            }]
        })

    }

})