//  **------Bar Chart Border Radius**
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Dataset #1",
            backgroundColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1),
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
            data: [-65, 59, -20, 81, 56, -55, 40]
        },
        {
            label: "Dataset #2",
            backgroundColor: hexToRGB(getLocalStorageItem('color-primary','#FF5E40'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-primary','#FF5E40'),0.2),
            borderWidth: 2,
            borderRadius: 50,
            borderSkipped: false,
            data: [65, 59, -20, 81, -56, 55, -40]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

//  **------Vertical Bar Chart**   
const chart1 = document.getElementById('myChart1');

new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Dataset #1",
            backgroundColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.5),
            borderColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1),
            data: [-65, 59, -20, 81, 56, -55, 40]
        },
        {
            label: "Dataset #2",
            backgroundColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.5),
            borderColor: "rgba(299, 94, 64,1)",
            data: [65, 59, -20, 81, -56, 55, -40]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

//   **------ Line Chart**

const chart2 = document.getElementById('myChart2');

new Chart(chart2, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Dataset #1",
            backgroundColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1),
            data: [-20, 54, -20, -5, 56, -55, 40]
        },
        {
            label: "Dataset #2",
            backgroundColor: hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),0.2),
            data: [90, 59, -10, 81, -56, 10, -40]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});

// **------ Stepped Line Charts**
const chart3 = document.getElementById('myChart3');

new Chart(chart3, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Dataset #1",
            backgroundColor: hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),1),
            fill: false,
            stepped: true,
            data: [-20, 54, -20, -5, 56, -55, 40]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
});


//  **------Radar skip points**

const chart4 = document.getElementById('myChart4');

new Chart(chart4, {
    type: 'radar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
            label: "Dataset #1",
            backgroundColor: hexToRGB(getLocalStorageItem('color-success','#FF5E40'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-success','#FF5E40'),0.2),
            data: [-20, 25, -20, -5, 35, -10, 20]
        },
        {
            label: "Dataset #2",
            backgroundColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.2),
            borderColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1),
            data: [-20, -23, 20, 0, 8, 25, -20]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//  **------Doughnut**

const chart5 = document.getElementById('myChart5');

new Chart(chart5, {
    type: 'doughnut',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Dataset #1",
                backgroundColor: [
                    hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.5),
                    hexToRGB(getLocalStorageItem('color-success','#AECC34'),0.5),
                    hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),0.5),
                ],
                data: [-20, -54, 20, 0, 56, 55, -40]
            }]
    }
});

//  **------Polar area**

const chart6 = document.getElementById('myChart6');

new Chart(chart6, {
    type: 'polarArea',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Dataset #1",
                backgroundColor: [
                    hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.5),
                    hexToRGB(getLocalStorageItem('color-info','#535AE7'),0.5),
                    hexToRGB(getLocalStorageItem('color-warning','#F9D249'),0.5),
                ],
                data: [-10, -54, 40, 20, 56, 55, -40]
            }]
    }
});

//  **------Pie**

const chart7 = document.getElementById('myChart7');

new Chart(chart7, {
    type: 'pie',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Dataset #1",
                backgroundColor: [
                    hexToRGB(getLocalStorageItem('color-dark','#48443D'),0.5),
                    hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),0.5),
                    hexToRGB(getLocalStorageItem('color-info','#535AE7'),0.5),
                ],
                data: [-20, -54, 20, 0, 56, 55, -40]
            }]
    }
});

// **------ Multi Series Pie**



const chart8 = document.getElementById('myChart8');

new Chart(chart8, {
    type: 'pie',
    data: {
        labels: ['Overall Yay', 'Overall Nay', 'Group A Yay', 'Group A Nay', 'Group B Yay', 'Group B Nay', 'Group C Yay', 'Group C Nay'],
        datasets: [
            {
                backgroundColor: [hexToRGB(getLocalStorageItem('color-secondary','#8B8476'),0.10), hexToRGB(getLocalStorageItem('color-secondary','#8B8476'))],
                data: [21, 79]
            },
            {
                backgroundColor: [hexToRGB(getLocalStorageItem('color-secondary','#AECC34'),0.10), hexToRGB(getLocalStorageItem('color-success','#AECC34'))],
                data: [33, 67]
            },
            {
                backgroundColor: [hexToRGB(getLocalStorageItem('color-primary','#48BECE'),0.5), hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1)],
                data: [20, 80]
            },
            {
                backgroundColor: [hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),0.5), hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),1)],
                data: [10, 90]
            }
        ]
    }, 
    options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              generateLabels: function(chart) {
                // Get the default label list
                const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                const labelsOriginal = original.call(this, chart);
    
                // Build an array of colors used in the datasets of the chart
                let datasetColors = chart.data.datasets.map(function(e) {
                  return e.backgroundColor;
                });
                datasetColors = datasetColors.flat();
    
                // Modify the color and hide state of each label
                labelsOriginal.forEach(label => {
                  // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                  label.datasetIndex = (label.index - label.index % 2) / 2;
    
                  // The hidden state must match the dataset's hidden state
                  label.hidden = !chart.isDatasetVisible(label.datasetIndex);
    
                  // Change the color to match the dataset
                  label.fillStyle = datasetColors[label.index];
                });
    
                return labelsOriginal;
              }
            },
            onClick: function(mouseEvent, legendItem, legend) {
              // toggle the visibility of the dataset from what it currently is
              legend.chart.getDatasetMeta(
                legendItem.datasetIndex
              ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
              legend.chart.update();
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
              }
            }
          }
        }
      },
});

//  **------Progressive Line**
const data = [];
const data2 = [];
let prev = 100;
let prev2 = 80;
for (let i = 0; i < 1000; i++) {
  prev += 5 - Math.random() * 10;
  data.push({x: i, y: prev});
  prev2 += 5 - Math.random() * 10;
  data2.push({x: i, y: prev2});
}
const totalDuration = 10000;
const delayBetweenPoints = totalDuration / data.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

const myChart9 = document.getElementById('myChart9');
new Chart(myChart9, {
    type: 'line',
    data: {
        datasets: [{
            borderColor: hexToRGB(getLocalStorageItem('color-danger','#FF5E40'),1),
            borderWidth: 1,
            radius: 0,
            data: data,
        },
        {
            borderColor: hexToRGB(getLocalStorageItem('color-primary','#48BECE'),1),
            borderWidth: 1,
            radius: 0,
            data: data2,
        }]
    },
    options: {
        animation:{
            x: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: NaN, // the point is initially skipped
                delay(ctx) {
                  if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                  }
                  ctx.xStarted = true;
                  return ctx.index * delayBetweenPoints;
                }
              },
              y: {
                type: 'number',
                easing: 'linear',
                duration: delayBetweenPoints,
                from: previousY,
                delay(ctx) {
                  if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                  }
                  ctx.yStarted = true;
                  return ctx.index * delayBetweenPoints;
                }
              }            
        },
        interaction: {
            intersect: false
        },
        plugins: {
            legend: false
        },
        scales: {
            x: {
                type: 'linear'
            }
        }
    }
});