var options = {
  series: [44, 55, 41],
  chart: {
    type: "donut",
    height: 300,
  },
  labels: ["Shoes", "Grocery", "other"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            fontSize: "25px",
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            color:"rgba(var(--secondary))",
            label: "89%",
            formatter: () => "Total",
          },
        },
      }
    }
  },
  colors: ["rgba(var(--primary))", "rgba(var(--secondary))", "rgba(var(--danger))"],
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
      fontFamily: '"Outfit", sans-serif',
    },
  },
  responsive: [{
    breakpoint: 1366,
    options: {
      chart: {
        height: 240
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                fontSize: "18px",
                fontWeight: 500,
                formatter: () => "Total ",
              },
            },
          }
        }
      },
    }
  },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 200
        },
      }
    }]

};

var chart = new ApexCharts(document.querySelector("#coursesProgress"), options);
chart.render();

// autoplay-slider
$('.lecture-video-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

//  **------image js**
GLightbox({
  touchNavigation: true,
  loop: true,
  width: "90vw",
  height: "90vh",
});

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
    height: 280,
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

// Total Courses
var options = {
  series: [{
    name: "Total Courses",
    data: [21, 22, 10, 28, 16, 21, 30]
  }],
  chart: {
    height: 150,
    type: 'bar',
  },
  colors: ['rgba(var(--primary),1)', 'rgba(var(--success),1)', 'rgba(var(--warning),1)', 'rgba(var(--secondary),1)', 'rgba(var(--danger),1)', 'rgba(var(--info),1)', 'rgba(var(--light),1)'],
  plotOptions: {
    bar: {
      columnWidth: '40',
      distributed: true,
      borderRadius: 5,
    }
  },
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7'],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
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
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
      fontFamily: '"Outfit", sans-serif',
    },
  },
  // responsive: [{
  //   breakpoint: 1400,
  //   options: {
  //     chart: {
  //       height: 125
  //     },

  //   }
  // }]
};

var chart = new ApexCharts(document.querySelector("#totalCourses"), options);
chart.render();

var options = {
  series: [{
    name: "progress",
    data: [25, 18, 35, 25, 35, 30, 40]
  }],
  chart: {
    height: 150,
    type: 'line'
  },
  
  dataLabels: {
    enabled: false
  },
  colors: ['rgba(var(--success),1)'],
  markers: {
    size: 5,
    colors: 'var(--white)',
    strokeColors: 'rgba(var(--success),1)',
    strokeWidth: 4,
    hover: {
      size: 5,
    }
  },
  stroke: {
    width: 3,
    curve: 'straight'
  },
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7'],
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    tooltip: {
      enabled: false
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
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
      fontFamily: '"Outfit", sans-serif',
    },
  },
  responsive: [{
    breakpoint: 1400,
    options: {
      chart: {

        height: 145
      },

    }
  }]
};

var chart = new ApexCharts(document.querySelector("#progressUser"), options);
chart.render();

// Todo js


function todoActions() {
  document.querySelectorAll(".task_actions .text-danger").forEach((ele) => {
    ele.addEventListener("click", (event) => {
      event.target.closest("li").remove()
    })
  })
  document.querySelectorAll(".task_actions .ph-note-pencil").forEach((ele) => {
    ele.addEventListener("click", (event) => {
      const currentElement = event.target.closest("li");
      const text = currentElement.querySelector(".task-text").innerText;
      document.querySelector("#task-input").value = text;
      document.querySelector("#add-task").classList.add("editing");

      document.querySelector("#add-task").addEventListener("click", () => {
        addTask(currentElement)
      })
    })
  })
}
const addTaskButton = document.getElementById("add-task");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".today-task-list");

function addTask(currentElement) {
  if (document.querySelector("#task-input").classList.contains("editing")) {
    document.querySelector("#add-task").addEventListener("click", () => {
      currentElement.querySelector(".task-text").innerHTML = $("#task-input").val();
      document.querySelector("#add-task").classList.remove("editing");
    })
  } else {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const newTask = document.querySelector(".today-task-list");
      newTask.innerHTML = `
        <li>
        <div>
          <span class="task-text">${taskText}</span>
        </div>
        <div class="task_actions">
          <span class="task-edit">
            <i class="ph-duotone  ph-note-pencil f-s-18 text-success"></i>
          </span>
          <span class="task-delete">
            <i class="ph-duotone  ph-trash f-s-18 text-danger"></i>
          </span>
        </div>
        </li>
      ` + newTask.innerHTML;
      taskInput.value = "";
    }
  }
  todoActions();
}

document.querySelector("#add-task").addEventListener("click", addTask);
todoActions()