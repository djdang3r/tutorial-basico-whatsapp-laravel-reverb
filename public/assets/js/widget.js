// Visits chart js

var options = {
  series: [{
    name: 'series1',
    data: [50, 45, 60, 46, 58, 45]
  }],
  chart: {
    width: 140,
    height: 120,
    type: 'line'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#4fc9da'],
  stroke: {
    curve: 'smooth'
  },
  annotations: {
    points: [{
      x: 50,
      y: 60,
      marker: {
        size: 5,
        colors: '#fff',
        strokeColor: '#4fc9da',
        strokeWidth: 4,
        cssClass: 'marker-primary',
      }
    }],
  },
  xaxis: {
    show: true,
    type: 'category',
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  tooltip: {
    enabled: false,
  },
  responsive: [{
    breakpoint: 1440,
    options: {
      chart: {
        width:100,
        height: 120
      },
      annotations: {
        points: [{
          x: 35,
          y: 60,
          marker: {
            size: 5,
            colors: '#fff',
            strokeColor: '#4fc9da',
            strokeWidth: 4,
            cssClass: 'marker-primary',
          }
        }],
      },
    }
  }]

};

var chart = new ApexCharts(document.querySelector("#visitsChart"), options);
chart.render();

// order chart js

var options = {
  series: [{
    name: 'Sales',
    data: [20, 50, 12, 58, 37]
  }],
  chart: {
    width: 140,
    height: 120,
    type: 'line',
  },
  forecastDataPoints: {
    count: 2
  },
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: '#26C450',
      // gradientToColors: [ '#78738C','#26C450'],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: "#48443D",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#48443D",
          opacity: .1,
        },
      ],
    },
  },
  xaxis: {
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  tooltip: {
    enabled: false,
  },
  responsive: [{
    breakpoint: 1440,
    options: {
      chart: {
        width:100,
        height: 120
      },

    }
  }]
};

var chart = new ApexCharts(document.querySelector("#orderChart"), options);
chart.render();

//
var options = {
  series: [{
    name: "Desktops",
    data: [5, 8, 3, 9, 5, 8, 4]
  }],
  chart: {
    width: 140,
    height: 120,
    type: 'line',
    offsetY: 0,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 3,
    curve: 'straight'
  },
  colors: ['#AECC34'],
  xaxis: {
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  tooltip: {
    enabled: false,
  }
};

var chart = new ApexCharts(document.querySelector("#activityChart"), options);
chart.render();

// Sales chart js
var options = {
  series: [{
    name: 'data 1',
    data: [
      3.2, 4, 2.15, 3, 2.4, 2, 1.2, 4, 2.1, 1
    ]
  },
    {
      name: 'data 2',
      data: [
        -3.2, -4, -2.15, -3, -2.4, -2, -1.2, -4, -2.1, -1
      ]
    },
    {
      name: 'data 3',
      data: [
        -2.25, -3, -2.5, -1, -2.40, -1.5, -2.20, -3, -2.65, -2
      ]
    },
    {
      name: 'data 4',
      data: [
        2.25, 3, 2.5, 1, 2.40, 1.5, 2.20, 3, 2.65, 2
      ]
    }],

  chart: {
    type: "bar",
    width: 120,
    height: 120,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      vertical: true,
      columnWidth: '35',
      borderRadius: [2, 2, 2, 2],
      startingShape: "rounded",
      endingShape: "rounded",
    },
  },
  colors: ['rgba(var(--warning),1)', 'rgba(var(--warning),1)', 'rgba(var(--secondary),.1)', 'rgba(var(--secondary),.1)'],
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: false,
  },
  responsive: [{
    breakpoint: 1440,
    options: {
      chart: {
        width:100,
        height: 120
      },

    }
  }]
};

var chart = new ApexCharts(document.querySelector("#salesChart"), options);
chart.render();

// Activity Hours Chart
var options = {
  series: [
    {
      type: "line",
      data: [15, 23, 33, 15, 28, 15, 23],
    },
    {
      type: "line",
      data: [15, 21, 31, 15, 26, 15, 21],
    },
    {
      type: "line",
      data: [15, 19, 27, 15, 24, 15, 19],
    },
    {
      type: "line",
      data: [15, 18, 24, 15, 22, 15, 18],
    },
    {
      type: "line",
      data: [15, 17, 20, 15, 18, 15, 17],
    },
    {
      type: "line",
      data: [15, 14, 14, 15, 14, 15, 14],
    },
    {
      type: "line",
      data: [15, 13, 10, 15, 11, 15, 13],
    },
    {
      type: "line",
      data: [15, 12, 6, 15, 8, 15, 12],
    },
    {
      type: "line",
      data: [15, 11, 2, 15, 5, 15, 11],
    },
    {
      type: "line",
      data: [15, 9, 10, 15, 3, 15, 9],
    },
    {
      type: "area",
      data: [15, 17, 27, 15, 23, 15, 17],
    },
  ],
  chart: {
    height: 200,
    type: 'line',
    stacked: false,
  },

  stroke: {
    width: 2,
    curve: 'smooth'
  },

  legend: {
    show: false,
  },
  colors: ["rgba(var(--priymary),1)", "rgba(var(--success),1)", "rgba(var(--secondary),1)", "rgba(var(--danger),1)", "rgba(var(--warning),1)", "rgba(var(--info),1)", "rgba(var(--light),1)", "rgba(var(--warning),1)", "rgba(var(--danger),1)", "rgba(var(--info),1)", "#535ae7"],
  fill: {
    type: ["solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 80, 100],
    },
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: "#7064F5",
        strokeColor: "var(--white)",
        size: 6,
      },
      {
        seriesIndex: 1,
        dataPointIndex: 5,
        fillColor: "#7064F5",
        strokeColor: "var(--white)",
        size: 6,
      },
      {
        seriesIndex: 2,
        dataPointIndex: 3,
        fillColor: "#7064F5",
        strokeColor: "var(--white)",
        size: 6,
      },
    ],
  },
  xaxis: {
    type: 'category',
    categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    tooltip: {
      enabled: false
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: true,

  },
  tooltip: {
    enabled: false,
  },
  responsive: [{
    breakpoint: 1399,
    options: {
      chart: {
        height: 200
      },
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#activityHoursChart"), options);
chart.render();

// productSold chart js

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

var options = {
  series: [{
    name: 'Bubble1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
    {
      name: 'Bubble2',
      data: generateData(new Date('12 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60
      })
    }],
  chart: {
    height: 200,
    type: 'bubble',
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 0.8
  },
  xaxis: {
    show: false,
    type: 'datetime',
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  legend: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  colors:['rgba(var(--success),1)','rgba(var(--primary),1)'],
  yaxis: {
    max: 70,
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  }
};

var chart = new ApexCharts(document.querySelector("#productSold"), options);
chart.render();


// project Earning chart js
var options = {
  series: [{
    name: 'Income',
    data: [40, 20, 42, 25, 45, 25, 32]
  }, {
    name: 'Total',
    data: [10, 25, 15, 35, 20, 45, 38]
  }],
  chart: {
    height: 190,
    type: 'line',
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 2,
      color: ["rgba(var(--warning),1)", "rgba(var(--success),1)"],
      opacity: 0.1,
    },
  },
  colors: ['rgba(var(--warning),1)', 'rgba(var(--success),1)'],
  dataLabels: {
    enabled: false
  },

  stroke: {
    width: 3,
    curve: 'smooth',
  },
  xaxis: {
    show: false,
    labels: {
      show: false
    },
    axisBorder: {
      show: true
    },
    axisTicks: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    show: true,
    labels: {
      show: false
    },
    axisBorder: {
      show: true
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    z: {
      show: false,
    },
    style: {
      fontSize: '16px',
      fontFamily: '"Outfit", sans-serif',
    },
  },
  responsive: [{
    breakpoint: 991,
    options: {
      chart: {
        height: 120
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#projectEarning"), options);
chart.render();

// sharesChart js
var options = {
  series: [{
    name: "data1",
    data: [25, 52, 38, 14, 33, 26, 20, 20, 6, 18, 15, 10]
  },
    {
      name: 'data2',
      data: [87, 50, 74, 99, 75, 8, 62, 37, 82, 60, 35, 47]
    }
  ],
  chart: {
    height: 120,
    type: 'line',
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [3, 3],
    curve: 'smooth',
    dashArray: [0, 5]
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
      '10 Jan', '11 Jan', '12 Jan'
    ],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      top: -10,
      right: 0,
      bottom: -18,
      left: 0,
    },
  },
  tooltip: {
    enabled: false
  },
};

var chart = new ApexCharts(document.querySelector("#sharesChart"), options);
chart.render();