
// User Chart js
var options = {
  series: [{
    name: 'data 1',
    data: [65, 59, 20, 81, 56, 55, 40]
  },
  {
    name: 'data 2',
    data: [65, 59, 20, 81, 56, 55, 40]
  },
  ],

  chart: {
    type: "bar",
    height: 160,
    stacked: true,
  },
  plotOptions: {
    bar: {
      vertical: true,
      columnWidth: '15',
      borderRadius: 4,
      startingShape: "rounded",
      endingShape: "rounded",
    },
  },
  colors: ['rgba(var(--light),.1)', 'var(--white)'],
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
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },

  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        colors: ['var(--white)'],
        fontSize: '12px',
        fontFamily: '"Golos Text", sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-yaxis-label',
      },
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
    offsetX: 0,
    offsetY: 0,
  },
  tooltip: {
    enabled: false,
  },
};

var chart = new ApexCharts(document.querySelector("#userChart"), options);
chart.render();

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

// 
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

// map js
$(function () {
  $('#userContries').vectorMap({
    map: 'world_mill',
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    backgroundColor: 'var(--white)',
    regionStyle: { initial: { fill: 'rgb(var(--primary),.6)'  }, hover: { fill: 'rgb(var(--primary))' } },
    
    series: {
      regions: [{
        attribute: 'fill'
      }]
    }
  });
});


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
    height: 220,
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


// 


var options = {
  series: [{
    name: 'profit',
    data: [20, 34, 15, 35, 10, 26]
  }, {
    name: 'expense',
    data: [24, 15, 25, 8, 28, 45, 34]
  }],
  chart: {
    height: 295,
    type: 'line',
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 1,
      color: ['rgba(var(--primary),1)', 'rgba(var(--success),1)'],
      opacity: .6
    }
  },

  colors: ['rgba(var(--primary),1)', 'rgba(var(--success),1)'],
  dataLabels: {
    enabled: false
  },

  stroke: {
    width: 2,
    curve: 'smooth'
  },
  annotations: {
    points: [{
      x: 'July',
      y: 34,
      marker: {
        size: 5,
        colors: '#fff',
        strokeColor: 'rgba(var(--success),1)',
        strokeWidth: 4,
        cssClass: 'marker-success',
      }
    },
    {
      x: 'Jun',
      y: 26,
      marker: {
        size: 5,
        colors: '#fff',
        strokeColor: 'rgba(var(--primary),1)',
        strokeWidth: 4,
        cssClass: 'marker-primary',
      }
    }],
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
    labels: {
      show: true,
      style: {
        colors: [],
        fontSize: '14px',
        fontFamily: '"Golos Text", sans-serif',
        fontWeight: 400,
        // cssClass: 'apexcharts-xaxis-label',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },

  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    },
  },
  yaxis: {
    show: true,
    labels: {
      formatter: function (value) {
        return value + "$";
      },
      style: {
        colors: [],
        fontSize: '14px',
        fontFamily: '"Golos Text", sans-serif',
        fontWeight: 400,
        // cssClass: 'apexcharts-xaxis-label',
      },
    },
  },
  legend: {
    show: false
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

var chart = new ApexCharts(document.querySelector("#overviewChart"), options);
chart.render();

// countdown js

window.addEventListener('load', () => {

  const countDownDate = new Date('December 31, 2024 23:59:59').getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    const timerEl = document.querySelectorAll('.timer');
    timerEl.forEach((el) => {
      if (el.querySelector('.hours')) {
        el.querySelector('.hours').innerHTML = hours;
      }
      if (el.querySelector('.minutes')) {
        el.querySelector('.minutes').innerHTML = minutes;
      }
      if (el.querySelector('.seconds')) {
        el.querySelector('.seconds').innerHTML = seconds;
      }
    });

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('demo').innerHTML = 'EXPIRED';
    }
  }, 1000);
});

// table js

$(function () {
  $('#recentOrders').DataTable();
  $('#recentOrders1').DataTable();
  $('#recentOrders2').DataTable();
  $('#recentOrders3').DataTable();
  $('#recentOrders4').DataTable();
});

// slider js

$('.offer-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
});

// 
new Cleave('.credit-form-control', {
  creditCard: true,
});

new Cleave('.expirationform-control', {
  date: true,
  datePattern: ['d', 'm']
});

document.getElementById("payment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const cardNumber = $("#card-number").val();
  let maskedString = cardNumber.replace(/(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/, "**** **** **** $4");
  document.getElementById("display-card-number").innerText = maskedString;
  document.getElementById("display-balance").innerText = $("#card-balance").val();
  document.getElementById("display-expiration").innerText =  $("#expiration").val();

  $("#card-balance").val("");
  $("#card-number").val("");
  $("#expiration").val("");
});

// start js

document.querySelectorAll('.star-icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
      this.classList.toggle('ph-bold'); // Toggle between outline icon
      this.classList.toggle('ph-fill'); // and filled icon
  });
});

//  **------post gallery js**
GLightbox({
  touchNavigation: true,
  loop: true,
  width: "90vw",
  height: "90vh",
});