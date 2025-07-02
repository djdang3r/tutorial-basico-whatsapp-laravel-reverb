0//  **------radialBar 1**

var options = {
  series: [70],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Cricket'],
  colors: [getLocalStorageItem('color-primary','#48BECE')],
  responsive: [{
    breakpoint: 567,
    options: {
      chart: {
        height:250,
      },
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#radlaibar1"), options);
chart.render();

//  **------radialBar 2**


var options = {
  series: [44, 55, 67, 83],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  // colors: [getLocalStorageItem('color-secondary','#8B8476'),'#AECC34','#005E40','#F9D249'],
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },

        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249
          }
        }
      }
    }
  },
  labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  responsive: [{
    breakpoint: 567,
    options: {
      chart: {
        height:250,
      },
    }
  }],
  colors: [hexToRGB(getLocalStorageItem('color-primary','#AECC34', '#F9D249', ),1)],
  labels: [''],

};

var chart = new ApexCharts(document.querySelector("#radlaibar2"), options);
chart.render();


//  **------radialBar 3**
var options = {
  series: [76, 67, 61, 90],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: '30%',
        background: 'transparent',
        image: undefined,
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          show: false,
        }
      }
    }
  },
  colors: [getLocalStorageItem('color-primary','#48BECE'), '#535AE7',getLocalStorageItem('color-secondary','#8B8476'), '#48443D'],
  labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
  legend: {
    show: true,
    floating: true,
    fontSize: '16px',
    position: 'left',
    offsetX: 20,
    offsetY: 20,
    labels: {
      useSeriesColors: true,
    },
    markers: {
      size: 0
    },
    formatter: function(seriesName, opts) {
      return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
      vertical: 3
    }
  },
  responsive: [
    {
      breakpoint: 1550,
      options: {
        legend: {
          offsetX: -5,
          offsetY: 15,
        }
      }
    },
    {
      breakpoint: 567,
      options: {
        chart: {
          height:250,
        },
      }
    },
    {
      breakpoint: 480,
      options: {
        legend: {
          fontSize: '15px',
          offsetX: -30,
          offsetY: -10,
        }
      }
    }]

};

var chart = new ApexCharts(document.querySelector("#radlaibar3"), options);
chart.render();

//  **------radialBar 4**


var options = {
  series: [75],
  chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          // opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '17px'
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'horizontal',
      shadeIntensity: 0.5,
      gradientToColors: ['#48BECE'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Percent'],
};

var chart = new ApexCharts(document.querySelector("#radlaibar4"), options);
// chart.render();

//  **------radialBar 5**


var options = {
  series: [67],
  chart: {
    height: 350,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '16px',
          color: undefined,
          offsetY: 120
        },
        value: {
          offsetY: 76,
          fontSize: '22px',
          color: undefined,
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    colors: ['#48443D'],
  },
  stroke: {
    dashArray: 4
  },
  labels: ['Median Ratio'],
};

var chart = new ApexCharts(document.querySelector("#radlaibar5"), options);
chart.render();

//  **------radialBar 6**


var options = {
  series: [76],
  chart: {
    height: 410,
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        background: "#e7e7e7",
        strokeWidth: '97%',
        margin: 5, // margin is in pixels
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          offsetY: -2,
          fontSize: '22px'
        }
      }
    }
  },
  grid: {
    padding: {
      top: -10
    }
  },
  fill: {
    // type: 'gradient',
    colors: [getLocalStorageItem('color-primary','#FF5E40')],
  },
  labels: ['Average Results'],
  responsive: [{
    breakpoint: 1366,
    options: {
      chart: {
        height:500,
      },
    }
  },{
    breakpoint: 567,
    options: {
      chart: {
        height:250,
      },
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#radlaibar6"), options);
chart.render();

// **------ radialBar 7**


var options = {
  series: [67],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '70%',
        image: '../assets/images/icons/clock.png',
        imageWidth: 64,
        imageHeight: 64,
        imageClipped: false
      },
      dataLabels: {
        name: {
          show: false,

        },
        value: {
          show: true,
          color: '#333',
          offsetY: 70,
          fontSize: '22px'
        }
      }
    }
  },
  fill: {
    type: 'image',
    image: {
      src: ['../assets/images/slick/11.jpg'],
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Volatility'],
  responsive: [{
    breakpoint: 567,
    options: {
      chart: {
        height:250,
      },
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#radlaibar7"), options);
chart.render();



//  **------radial-progress 18**
var options = {
  chart: {
    height: 150,
    width: 110,
    type: "radialBar"
  },

  series: [5],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
        image: '../assets/images/icons/icon-1.jpg',
        imageWidth: 80,
        imageHeight: 80,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          fontSize: "15px",
        },
        style: {
          fontSize: '14px',
        },
        value: {
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: [hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1)],
  labels: ["Primary"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress18"), options);

chart.render();


//   **------ radial-progress 19**

var options = {
  chart: {
    height: 172,
    width: 200,
    type: "radialBar"
  },

  series: [25],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
        image: '../assets/images/icons/icon-2.png',
        imageWidth: 90,
        imageHeight: 90,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),1),
          fontSize: "13px"
        },
        value: {
          color: hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),1),
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: [hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),1)],
  labels: ["Secondary"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress19"), options);

chart.render();
//  **------radial-progress 20**

var options = {
  chart: {
    height: 190,
    width: 200,
    type: "radialBar"
  },

  series: [57],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
        image: '../assets/images/icons/icon-3.png',
        imageWidth: 90,
        imageHeight: 90,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: "rgba(var(--success),1)",
          fontSize: "13px"
        },
        value: {
          color: "rgba(var(--success),1)",
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: ['rgba(var(--success),1)'],
  labels: ["Success"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress20"), options);

chart.render();
//  **------radial-progress 21**

var options = {
  chart: {
    height: 210,
    width: 200,
    type: "radialBar"
  },

  series: [78],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "65%",
        image: '../assets/images/icons/icon-4.png',
        imageWidth: 110,
        imageHeight: 110,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: "rgba(var(--danger),1)",
          fontSize: "13px"
        },
        value: {
          color: "rgba(var(--danger),1)",
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: ['rgba(var(--danger),1)'],
  labels: ["Danger"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress21"), options);

chart.render();
//  **------radial-progress 22**
var options = {
  chart: {
    height: 230,
    width: 200,
    type: "radialBar"
  },

  series: [88],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "60%",
        image: '../assets/images/icons/icon-5.png',
        imageWidth: 110,
        imageHeight: 110,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: "rgba(var(--warning),1)",
          fontSize: "13px"
        },
        value: {
          color: "rgba(var(--warning),1)",
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: ['rgba(var(--warning),1)'],
  labels: ["Warning"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress22"), options);

chart.render();


var options = {
  chart: {
    height: 250,
    width: 200,
    type: "radialBar"
  },

  series: [95],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "55%",
        image: '../assets/images/icons/icon-6.png',
        imageWidth: 110,
        imageHeight: 110,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: "rgba(var(--info),1)",
          fontSize: "13px"
        },
        value: {
          color: "rgba(var(--info),1)",
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: ['rgba(var(--info),1)'],
  labels: ["Info"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress23"), options);

chart.render();


var options = {
  chart: {
    height: 280,
    width: 200,
    type: "radialBar"
  },

  series: [100],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "55%",
        image: '../assets/images/icons/icon-8.png',
        imageWidth: 120,
        imageHeight: 120,
        imageClipped: false
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -10,
          show: false,
          color: "rgba(var(--dark),1)",
          fontSize: "13px"
        },
        value: {
          color: "rgba(var(--dark),1)",
          fontSize: "30px",
          show: false
        }
      }
    }
  },

  stroke: {
    lineCap: "round",
  },
  colors: ['rgba(var(--dark),1)'],
  labels: ["dark"]
};

var chart = new ApexCharts(document.querySelector("#radial-progress24"), options);

chart.render();

