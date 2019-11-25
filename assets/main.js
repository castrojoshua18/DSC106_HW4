'use strict';

const JSONFileName = 'https://raw.githubusercontent.com/castrojoshua18/CASTRO_A13575128_HW4/master/assets/final_chadwick.json?token=AKL7YHH3CWMSKOU7CN3254C54SECG';

var genreCounts = {
    genre: [],
    count: []
};

Highcharts.ajax({
    url: JSONFileName,
    dataType: 'text',
    success: function (activity) {

        activity = JSON.parse(activity);

        var timelineDiv = document.createElement('div');
        timelineDiv.className = 'timeline';
        document.getElementById('timeline').append(timelineDiv);

        Highcharts.chart(timelineDiv, {
            chart: {
                zoomType: 'x',
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
                text: "How has Chadwick Boseman's role changed?"
            },
            subtitle: {
                text: "Fig. 1: A visualized transition of Boseman's role in featured movies (U.S. domestic)"
            },
            colors: [
                '#8c5218',
                '#427CDD',
                '#406AB2',
                '#3E5A8E',
                '#3B4A68',
                '#363C46'
            ],
            series: [{
                pointStart: Date.UTC(2008,10,22,0,0,0,0),
                data: [{
                        x: Date.UTC(2008, 10, 22),
                        name: 'Support',
                        label: 'The Express',
                        description: "Part: "
                    },
                    {
                        x: Date.UTC(1951, 5, 22),
                        name: 'Support',
                        label: 'The Express',
                        description: "Part: "
                    },
                    {
                        x: Date.UTC(1951, 5, 22),
                        name: 'Support',
                        label: 'The Express',
                        description: "Part: "
                    },
                    
                ]
            }]
        })


    }

})