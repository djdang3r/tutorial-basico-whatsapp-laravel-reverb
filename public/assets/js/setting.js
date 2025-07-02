//touch spin

$(document).on('click','.decrement, .increment',function(e){
    let input = $(this).parent().find('.count');
    let count = input.val();
  
    if(count===''){
      count = 0;
    }
    $(this).hasClass('decrement') ? count-- : count++;
    if(count)
      input.val(count)
  });

// delet button js //

  $('#account_delete').on('click', function () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
})

//  chart js
var options = {
  series: [{
  name: 'Spent Time',
  type: 'column',
  data: [35, 45, 32, 40, 35, 38, 40]
}, {
  name: 'Total Time',
  type: 'line',
  data: [30, 25, 36, 30, 40, 35]
}],
  chart: {
  height: 280,
  type: 'line',
  stacked: false,
},
annotations: {
  points: [{
    x: 'S',
    y: 35,
    marker: {
      size: 5,
      colors: '#fff',
      strokeColor: 'rgba(var(--warning),1)',
      strokeWidth: 4,
      cssClass: 'marker-warning',
    }
  }],
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '80'
  }
},
legend: {
  show: false,
},
colors:['rgba(var(--warning),1)'],
fill: {
  type: ["gradient", "solid"],
  opacity: [0.8, .1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.1,
    opacityTo: 0.1,
    colorStops: [
      {
        offset: 0,
        color: 'rgba(var(--primary),.1)',
        opacity: 1,
      },
      {
          offset: 50,
          color: 'rgba(var(--primary),.1)',
          opacity: 1,
        },
      {
        offset: 100,
        color: 'rgba(var(--primary),.1)',
        opacity: 1,
      },
    ],
  }
},
markers: {
  size: 0
},
xaxis: {
  type: 'category',
  categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  tooltip: {
      enabled: false
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
//   breakpoint: 1440,
//   options: {
//     chart: {
//       height: 200
//     },
//   }
// }]
};

var chart = new ApexCharts(document.querySelector("#timeSpent"), options);
chart.render();


// langauge selection //
$(function() {
  $('.select-langauge').select2();
});

document.querySelector("#showPassword").addEventListener("click",()=>{
  var passwordInput = document.getElementById('password');
  var toggleButton = document.querySelector('.eyes-icon');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.classList.remove('ph-eye-slash');
      toggleButton.classList.add('ph-eye');
  } 
  else {
      passwordInput.type = 'password';
      toggleButton.classList.remove('ph-eye');
      toggleButton.classList.add('ph-eye-slash');
  }
});
document.querySelector("#showPassword1").addEventListener("click",()=>{
  var passwordInput = document.getElementById('password1');
  var toggleButton = document.querySelector('.eyes-icon1');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.classList.remove('ph-eye-slash');
      toggleButton.classList.add('ph-eye');
  } 
  else {
      passwordInput.type = 'password';
      toggleButton.classList.remove('ph-eye');
      toggleButton.classList.add('ph-eye-slash');
  }
});
document.querySelector("#showPassword2").addEventListener("click",()=>{
  var passwordInput = document.getElementById('password2');
  var toggleButton = document.querySelector('.eyes-icon2');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleButton.classList.remove('ph-eye-slash');
      toggleButton.classList.add('ph-eye');
  } 
  else {
      passwordInput.type = 'password';
      toggleButton.classList.remove('ph-eye');
      toggleButton.classList.add('ph-eye-slash');
  }
});

//  **------image js**
GLightbox({
  touchNavigation: true,
  loop: true,
  width: "90vw",
  height: "90vh",
});