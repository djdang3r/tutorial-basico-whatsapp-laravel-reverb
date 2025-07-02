// Timeline_range_chart 1

var options = {
  series: [
    {
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    type: 'datetime'
  },

  colors: [getLocalStorageItem('color-primary','#48BECE')],
  responsive: [{
  breakpoint: 768,
  options: {
    chart: {
      height: 280,
    },
    yaxis: {
      show: false
    },
  },
}]
};

var chart = new ApexCharts(document.querySelector("#timeline1"), options);
chart.render();

// Timeline_range_chart 2

var options = {
  series: [
    {
      data: [
        {
          x: 'Analysis',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime()
          ],
          fillColor: getLocalStorageItem('color-secondary','#8B8476')
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ],
          fillColor: '#AECC34'
        },
        {
          x: 'Coding',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime()
          ],
          fillColor: '#F9D249'
        },
        {
          x: 'Testing',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ],
          fillColor: '#FF5E40'
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime()
          ],
          fillColor: '#535AE7'
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w.globals.labels[opts.dataPointIndex]
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return label + ': ' + diff + (diff > 1 ? ' days' : ' day')
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    show: false
  },
  grid: {
    row: {
      opacity: 1
    }
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }]
};

var chart = new ApexCharts(document.querySelector("#timeline2"), options);
chart.render();

// Timeline_range_chart 3

var options = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-19').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return diff + (diff > 1 ? ' days' : ' day')
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },

  colors: ['#48443D', getLocalStorageItem('color-primary','#48BECE')],
  xaxis: {
    type: 'datetime'
  },
  legend: {
    position: 'top'
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }]
};

var chart = new ApexCharts(document.querySelector("#timeline3"), options);
chart.render();


// Timeline_range_chart 4

var options = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime()
          ],
        }
      ]
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
        {
          x: 'Code',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime()
          ]
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'Dan',
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-07').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
      ]
    }
  ],
  chart: {
    height: 450,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%'
    }
  },
  xaxis: {
    type: 'datetime'
  },
  stroke: {
    width: 1
  },
  fill: {
    type: 'solid',
    opacity: 0.6
  },

  colors: ['#8B8476', '#AECC34', '#F9D249'],
  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }]
};

var chart = new ApexCharts(document.querySelector("#timeline4"), options);
chart.render();

// Timeline_range_chart 5

var options = {
  series: [
    // George Washington
    {
      name: 'George Washington',
      data: [
        {
          x: 'President',
          y: [
            new Date(1789, 3, 30).getTime(),
            new Date(1797, 2, 4).getTime()
          ]
        },
      ]
    },
    // John Adams
    {
      name: 'John Adams',
      data: [
        {
          x: 'President',
          y: [
            new Date(1797, 2, 4).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'Vice President',
          y: [
            new Date(1789, 3, 21).getTime(),
            new Date(1797, 2, 4).getTime()
          ]
        }
      ]
    },
    // Thomas Jefferson
    {
      name: 'Thomas Jefferson',
      data: [
        {
          x: 'President',
          y: [
            new Date(1801, 2, 4).getTime(),
            new Date(1809, 2, 4).getTime()
          ]
        },
        {
          x: 'Vice President',
          y: [
            new Date(1797, 2, 4).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'Secretary of State',
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime()
          ]
        }
      ]
    },
    // Aaron Burr
    {
      name: 'Aaron Burr',
      data: [
        {
          x: 'Vice President',
          y: [
            new Date(1801, 2, 4).getTime(),
            new Date(1805, 2, 4).getTime()
          ]
        }
      ]
    },
    // George Clinton
    {
      name: 'George Clinton',
      data: [
        {
          x: 'Vice President',
          y: [
            new Date(1805, 2, 4).getTime(),
            new Date(1812, 3, 20).getTime()
          ]
        }
      ]
    },
    // John Jay
    {
      name: 'John Jay',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1789, 8, 25).getTime(),
            new Date(1790, 2, 22).getTime()
          ]
        }
      ]
    },
    // Edmund Randolph
    {
      name: 'Edmund Randolph',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1794, 0, 2).getTime(),
            new Date(1795, 7, 20).getTime()
          ]
        }
      ]
    },
    // Timothy Pickering
    {
      name: 'Timothy Pickering',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1795, 7, 20).getTime(),
            new Date(1800, 4, 12).getTime()
          ]
        }
      ]
    },
    // Charles Lee
    {
      name: 'Charles Lee',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1800, 4, 13).getTime(),
            new Date(1800, 5, 5).getTime()
          ]
        }
      ]
    },
    // John Marshall
    {
      name: 'John Marshall',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1800, 5, 13).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        }
      ]
    },
    // Levi Lincoln
    {
      name: 'Levi Lincoln',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1801, 2, 5).getTime(),
            new Date(1801, 4, 1).getTime()
          ]
        }
      ]
    },
    // James Madison
    {
      name: 'James Madison',
      data: [
        {
          x: 'Secretary of State',
          y: [
            new Date(1801, 4, 2).getTime(),
            new Date(1809, 2, 3).getTime()
          ]
        }
      ]
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
      rangeBarGroupRows: true
    }
  },
  colors: [
    "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
    "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
    "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
  ],

  colors: [getLocalStorageItem('color-primary','#48BECE'), getLocalStorageItem('color-secondary','#8B8476'), '#AECC34', '#FF5E40', '#F9D249', '#535AE7', '#E5E3E0', '#48443D'],
  fill: {
    type: 'solid'
  },
  xaxis: {
    type: 'datetime'
  },
  legend: {
    position: 'right'
  },
  tooltip: {
    custom: function (opts) {
      const fromYear = new Date(opts.y1).getFullYear()
      const toYear = new Date(opts.y2).getFullYear()
      const values = opts.ctx.rangeBar.getTooltipValues(opts)

      return (
        ''
      )
    }
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
      legend: {
        show:false
      },
    },
  }]
};

var chart = new ApexCharts(document.querySelector("#timeline5"), options);
chart.render();
