// //Analytics dashboard
var options = {
  series: [
    {
        name: '',
        data:[19.0,20,19.8,20.8,19,19.67,19.45,20.89,20.45,19.45,19.09,19.8,19.6,20,20.89,21.4,19.09,20.8,23.78,25.0,20,19.65,25,24.89,23,19.0,19.56,20.36,22.90,24.90,19.78]
    },
],
chart: {
    type: 'area',
    height: 80,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
        show: false,
    },
},
stroke: {
    width: 2,
    curve: 'smooth'
},
dataLabels: {
    enabled: false,
},
fill: {
  type: "gradient",
  gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--warning),.4)',
          opacity: 1,
        },
        {
            offset: 50,
            color: 'rgba(var(--warning),.4)',
            opacity: 1,
          },
        {
          offset: 100,
          color: 'rgba(var(--warning),.1)',
          opacity: 1,
        },
      ]
  }
},
legend: {
  show: false,
},
colors: ['rgba(var(--warning))'],
xaxis: {
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
    min: 19,
    max: 25,
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
  x: {
    show: false,
  },
  style: {
    fontSize: '16px',
    fontFamily: '"Outfit", sans-serif',
  },
},
};

var chart = new ApexCharts(document.querySelector("#bitCoin"), options);
chart.render();

var options = {
  series: [
    {
        name: '',
        data:[19.0,20,19.8,20.8,19,19.67,19.45,20.89,20.45,19.45,19.09,19.8,19.6,20,20.89,21.4,19.09,20.8,23.78,25.0,20,19.65,25,24.89,23,19.0,19.56,20.36,22.90,24.90,19.78]
    },
],
chart: {
    type: 'area',
    height: 80,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
        show: false,
    },
},
stroke: {
    width: 2,
    curve: 'smooth'
},
dataLabels: {
    enabled: false,
},
fill: {
  type: "gradient",
  gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--secondary),.4)',
          opacity: 1,
        },
        {
            offset: 50,
            color: 'rgba(var(--secondary),.4)',
            opacity: 1,
          },
        {
          offset: 100,
          color: 'rgba(var(--secondary),.1)',
          opacity: 1,
        },
      ]
  }
},
legend: {
  show: false,
},
colors: ['rgba(var(--secondary))'],
xaxis: {
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
    min: 19,
    max: 25,
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
  x: {
    show: false,
  },
  style: {
    fontSize: '16px',
    fontFamily: '"Outfit", sans-serif',
  },
},
};

var chart = new ApexCharts(document.querySelector("#LiteCoin"), options);
chart.render();

var options = {
  series: [
    {
        name: '',
        data:[19.0,20,19.8,20.8,19,19.67,19.45,20.89,20.45,19.45,19.09,19.8,19.6,20,20.89,21.4,19.09,20.8,23.78,25.0,20,19.65,25,24.89,23,19.0,19.56,20.36,22.90,24.90,19.78]
    },
],
chart: {
    type: 'area',
    height: 80,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
        show: false,
    },
},
stroke: {
    width: 2,
    curve: 'smooth'
},
dataLabels: {
    enabled: false,
},
fill: {
  type: "gradient",
  gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--primary),.4)',
          opacity: 1,
        },
        {
            offset: 50,
            color: 'rgba(var(--primary),.4)',
            opacity: 1,
          },
        {
          offset: 100,
          color: 'rgba(var(--primary),.1)',
          opacity: 1,
        },
      ]
  }
},
legend: {
  show: false,
},
colors: ['rgba(var(--primary))'],
xaxis: {
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
    min: 19,
    max: 25,
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
  x: {
    show: false,
  },
  style: {
    fontSize: '16px',
    fontFamily: '"Outfit", sans-serif',
  },
},
};

var chart = new ApexCharts(document.querySelector("#ethereumCoin"), options);
chart.render();

var options = {
  series: [
    {
        name: '',
        data:[19.0,20,19.8,20.8,19,19.67,19.45,20.89,20.45,19.45,19.09,19.8,19.6,20,20.89,21.4,19.09,20.8,23.78,25.0,20,19.65,25,24.89,23,19.0,19.56,20.36,22.90,24.90,19.78]
    },
],
chart: {
    type: 'area',
    height: 80,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
        show: false,
    },
},
stroke: {
    width: 2,
    curve: 'smooth'
},
dataLabels: {
    enabled: false,
},
fill: {
  type: "gradient",
  gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--success),.4)',
          opacity: 1,
        },
        {
            offset: 50,
            color: 'rgba(var(--success),.4)',
            opacity: 1,
          },
        {
          offset: 100,
          color: 'rgba(var(--success),.1)',
          opacity: 1,
        },
      ]
  }
},
legend: {
  show: false,
},
colors: ['rgba(var(--success))'],
xaxis: {
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
    min: 19,
    max: 25,
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
  x: {
    show: false,
  },
  style: {
    fontSize: '16px',
    fontFamily: '"Outfit", sans-serif',
  },
},
};

var chart = new ApexCharts(document.querySelector("#binanceCoin"), options);
chart.render();


// 

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
  height: 90,
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

// 
var options = {
  series: [{
  data: [{
      x: new Date(1538778600000),
      y: [6629.81, 6650.5, 6623.04, 6633.33]
    },
    {
      x: new Date(1538780400000),
      y: [6632.01, 6643.59, 6620, 6630.11]
    },
    {
      x: new Date(1538782200000),
      y: [6630.71, 6648.95, 6623.34, 6635.65]
    },
    {
      x: new Date(1538784000000),
      y: [6635.65, 6651, 6629.67, 6638.24]
    },
    {
      x: new Date(1538785800000),
      y: [6638.24, 6640, 6620, 6624.47]
    },
    {
      x: new Date(1538787600000),
      y: [6624.53, 6636.03, 6621.68, 6624.31]
    },
    {
      x: new Date(1538789400000),
      y: [6624.61, 6632.2, 6617, 6626.02]
    },
    {
      x: new Date(1538791200000),
      y: [6627, 6627.62, 6584.22, 6603.02]
    },
    {
      x: new Date(1538793000000),
      y: [6605, 6608.03, 6598.95, 6604.01]
    },
    {
      x: new Date(1538794800000),
      y: [6604.5, 6614.4, 6602.26, 6608.02]
    },
    {
      x: new Date(1538796600000),
      y: [6608.02, 6610.68, 6601.99, 6608.91]
    },
    {
      x: new Date(1538798400000),
      y: [6608.91, 6618.99, 6608.01, 6612]
    },
    {
      x: new Date(1538800200000),
      y: [6612, 6615.13, 6605.09, 6612]
    },
    {
      x: new Date(1538802000000),
      y: [6612, 6624.12, 6608.43, 6622.95]
    },
    {
      x: new Date(1538803800000),
      y: [6623.91, 6623.91, 6615, 6615.67]
    },
    {
      x: new Date(1538805600000),
      y: [6618.69, 6618.74, 6610, 6610.4]
    },
    {
      x: new Date(1538807400000),
      y: [6611, 6622.78, 6610.4, 6614.9]
    },
    {
      x: new Date(1538809200000),
      y: [6614.9, 6626.2, 6613.33, 6623.45]
    },
    {
      x: new Date(1538811000000),
      y: [6623.48, 6627, 6618.38, 6620.35]
    },
    {
      x: new Date(1538812800000),
      y: [6619.43, 6620.35, 6610.05, 6615.53]
    },
    {
      x: new Date(1538814600000),
      y: [6615.53, 6617.93, 6610, 6615.19]
    },
    {
      x: new Date(1538816400000),
      y: [6615.19, 6621.6, 6608.2, 6620]
    },
    {
      x: new Date(1538818200000),
      y: [6619.54, 6625.17, 6614.15, 6620]
    },
    {
      x: new Date(1538820000000),
      y: [6620.33, 6634.15, 6617.24, 6624.61]
    },
    {
      x: new Date(1538821800000),
      y: [6625.95, 6626, 6611.66, 6617.58]
    },
    {
      x: new Date(1538823600000),
      y: [6619, 6625.97, 6595.27, 6598.86]
    },
    {
      x: new Date(1538825400000),
      y: [6598.86, 6598.88, 6570, 6587.16]
    },
    {
      x: new Date(1538827200000),
      y: [6588.86, 6600, 6580, 6593.4]
    },
    {
      x: new Date(1538829000000),
      y: [6593.99, 6598.89, 6585, 6587.81]
    },
    {
      x: new Date(1538830800000),
      y: [6587.81, 6592.73, 6567.14, 6578]
    },
    {
      x: new Date(1538832600000),
      y: [6578.35, 6581.72, 6567.39, 6579]
    },
    {
      x: new Date(1538834400000),
      y: [6579.38, 6580.92, 6566.77, 6575.96]
    },
    {
      x: new Date(1538836200000),
      y: [6575.96, 6589, 6571.77, 6588.92]
    },
  ]
}],
  chart: {
  type: 'candlestick',
  height: 286
},
colors:['rgba(var(--success),1)','rgba(var(--danger),1)'],
plotOptions: {
  candlestick: {
    colors: {
      upward: 'rgba(var(--success),1)',
      downward: 'rgba(var(--danger),1)'
    },
    wick: {
      useFillColor: true
    }
  }
},
xaxis: {
  type: 'datetime',
  axisTicks: {
    show: false,
  },
  axisBorder: {
    show: false,
  },
  labels: {
    style: {
      colors: 'rgba(var(--secondary),1)',
      fontSize: '13px',
      fontFamily: 'Golos Text", sans-serif',
      fontWeight: 500,
  },
  }
},
grid: {
  borderColor: 'rgba(var(--dark),.2)',
  strokeDashArray: 2,
  padding: {
    top: 10,
    bottom: 2,
    right: 0,
  }
},
yaxis: {
  tooltip: {
    enabled: true
  },
  labels: {
    style: {
      colors: 'rgba(var(--secondary),1)',
      fontSize: '13px',
      fontFamily: 'Golos Text", sans-serif',
      fontWeight: 500,
  },
  }
},
responsive: [{
  breakpoint: 1366,
  options: {
    chart: {
      height: 265
    },
    yaxis:{
      show:false
    },
    xaxis: {
      labels: {
        rotateAlways: true,
        rotate: -25,
      }
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#totalGrowth"), options);
chart.render();