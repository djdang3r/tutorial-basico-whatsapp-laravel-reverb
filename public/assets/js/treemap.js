// treemap_chart 1
var options = {
    series: [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
 
  colors: [getLocalStorageItem('color-primary','#48BECE')],
  title: {
    text: ''
  }
  };

  var chart = new ApexCharts(document.querySelector("#treemap1"), options);
  chart.render();

// treemap_chart 2

var options = {
    series: [
    {
      name: 'Desktops',
      data: [
        {
          x: 'ABC',
          y: 10
        },
        {
          x: 'DEF',
          y: 60
        },
        {
          x: 'XYZ',
          y: 41
        }
      ]
    },
    {
      name: 'Mobile',
      data: [
        {
          x: 'ABCD',
          y: 10
        },
        {
          x: 'DEFG',
          y: 20
        },
        {
          x: 'WXYZ',
          y: 51
        },
        {
          x: 'PQR',
          y: 30
        },
        {
          x: 'MNO',
          y: 20
        },
        {
          x: 'CDE',
          y: 30
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
 
  colors: [getLocalStorageItem('color-secondary','#8B8476'),'#AECC34'],

  title: {
    text: '',
    align: 'center'
  }
  };

  var chart = new ApexCharts(document.querySelector("#treemap2"), options);
  chart.render();

// treemap_chart 3

var options = {
    series: [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
  title: {
    text: '',
    align: 'center'
  },
  colors: [
    getLocalStorageItem('color-primary','#48BECE'),
    getLocalStorageItem('color-secondary','#8B8476'),
    '#AECC34',
    '#FF5E40',
    '#F9D249',
    '#535AE7',
    '#E5E3E0',
    '#48443D',
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#treemap3"), options);
  chart.render();

// treemap_chart 4

var options = {
    series: [
    {
      data: [
        {
          x: 'INTC',
          y: 1.2
        },
        {
          x: 'GS',
          y: 0.4
        },
        {
          x: 'CVX',
          y: -1.4
        },
        {
          x: 'GE',
          y: 2.7
        },
        {
          x: 'CAT',
          y: -0.3
        },
        {
          x: 'RTX',
          y: 5.1
        },
        {
          x: 'CSCO',
          y: -2.3
        },
        {
          x: 'JNJ',
          y: 2.1
        },
        {
          x: 'PG',
          y: 0.3
        },
        {
          x: 'TRV',
          y: 0.12
        },
        {
          x: 'MMM',
          y: -2.31
        },
        {
          x: 'NKE',
          y: 3.98
        },
        {
          x: 'IYT',
          y: 1.67
        }
      ]
    }
  ],
    legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
  title: {
    text: ''
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '12px',
    },
    formatter: function(text, op) {
      return [text, op.value]
    },
    offsetY: -4
  },
  plotOptions: {
    treemap: {
      enableShades: true,
      shadeIntensity: 0.5,
      reverseNegativeShade: true,
      colorScale: {
        ranges: [
          {
            from: -6,
            to: 0,
            color: '#48443D'
          },
          {
            from: 0.001,
            to: 6,
            color: getLocalStorageItem('color-primary','#48BECE')
          }
        ]
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#treemap4"), options);
  chart.render();
