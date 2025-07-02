var options = {
  series: [{
    name: 'series1',
    data: [50, 45, 60, 46, 58, 45]
  }],
  chart: {
    width: 150,
    height: 55,
    type: 'line',
    offsetX: 0,
    offsetY: 0,
  },
  dataLabels: {
    enabled: false
  },
  colors: ['rgba(255, 0, 0)'],
  stroke: {
    width: 2,
  },
  xaxis: {
    show: true,
    // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
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

const seriresLists = {
  0:[50, 45, 60, 46, 58, 45],
  1:[45, 10, 20, 66, 18, 15],
  2:[20, 45, 38, 26, 18, 35],
  3:[50, 45, 60, 46, 58, 45],
  4:[50, 45, 60, 46, 58, 45]
}

const colorLists = {
  0:"rgba(var(--primary))",
  1:"rgba(var(--secondary))",
  2:"rgba(var(--success))",
  3:"rgba(var(--danger))",
  4:"rgba(var(--primary))"
}

document.querySelectorAll(".coinProgress").forEach((ele,index) => {
  options.series = [{
    name: 'series1',
    data: seriresLists[index]
  }]
  options.colors = [colorLists[index]];
  // options.fill.gradient.colorStops = options.fill.gradient.colorStops.map(({color,...rest})=>({...rest,color:colorLists[index]}));
  var chart = new ApexCharts(ele, options);
  chart.render();
})