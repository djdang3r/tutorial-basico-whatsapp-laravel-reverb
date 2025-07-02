//ecommerce

var colors = ['#457ffc', '#73788c', '#06b38b', '#eb565a', '#fbc05b', '#29b0f2', '#e8eaf2'];
var options = {
  series: [{
    name: 'Inflation',
    data: [4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 0.2]
  }],
  chart: {
    height: 305,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: 'top', // top, center, bottom
      },
    }
  },
  colors: ['#457ffc', '#73788c', '#06b38b', '#eb565a', '#fbc05b', '#29b0f2', '#e8eaf2'],
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: colors,
    }
  },


  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    position: 'top',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: true,
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "%";
      }
    }

  },
  title: {
    text: '',
    floating: true,
    offsetY: 330,
    align: 'center',
    style: {
      color: colors
    }
  },
  colors: ['#457ffc', '#73788c', '#06b38b', '#eb565a', '#fbc05b', '#29b0f2', '#e8eaf2'],
};

var chart = new ApexCharts(document.querySelector("#column2"), options);
chart.render();


$(function() {
  $('#example').DataTable();
  $('#DataTableone').DataTable();
});

//  **------checkbox**

$(function() {
  $("#select_all_checkbox").on("click", function () {
    $(this)
      .closest("table")
      .find("tbody :checkbox")
      .prop("checked", this.checked)
      .closest("tr")
      .toggleClass("selected", this.checked);
  });

  $("tbody :checkbox").on("click", function () {

    $(this)
      .closest("tr")
      .toggleClass("selected", this.checked);

    $(this).closest("table")
      .find("#select_all_checkbox")
      .prop("checked",
        $(this)
          .closest("table")
          .find("tbody :checkbox:checked").length ==
        $(this)
          .closest("table")
          .find("tbody :checkbox").length
      );
  });
});

// **------ Delivered**

$(function() {
  $("#select_all_delivered").on("click", function () {
    $(this)
      .closest("table")
      .find("tbody :checkbox")
      .prop("checked", this.checked)
      .closest("tr")
      .toggleClass("selected", this.checked);
  });

  $("tbody :checkbox").on("click", function () {

    $(this)
      .closest("tr")
      .toggleClass("selected", this.checked);

    $(this).closest("table")
      .find("#select_all_delivered")
      .prop("checked",
        $(this)
          .closest("table")
          .find("tbody :checkbox:checked").length ==
        $(this)
          .closest("table")
          .find("tbody :checkbox").length
      );
  });
});

//  **------Pickups**

$(function() {
  $("#select_all_pickups").on("click", function () {
    $(this)
      .closest("table")
      .find("tbody :checkbox")
      .prop("checked", this.checked)
      .closest("tr")
      .toggleClass("selected", this.checked);
  });

  $("tbody :checkbox").on("click", function () {

    $(this)
      .closest("tr")
      .toggleClass("selected", this.checked);

    $(this).closest("table")
      .find("#select_all_pickups")
      .prop("checked",
        $(this)
          .closest("table")
          .find("tbody :checkbox:checked").length ==
        $(this)
          .closest("table")
          .find("tbody :checkbox").length
      );
  });
});

//  **------Returns**

$(function() {
  $("#select_all_returns").on("click", function () {
    $(this)
      .closest("table")
      .find("tbody :checkbox")
      .prop("checked", this.checked)
      .closest("tr")
      .toggleClass("selected", this.checked);
  });

  $("tbody :checkbox").on("click", function () {

    $(this)
      .closest("tr")
      .toggleClass("selected", this.checked);

    $(this).closest("table")
      .find("#select_all_returns")
      .prop("checked",
        $(this)
          .closest("table")
          .find("tbody :checkbox:checked").length ==
        $(this)
          .closest("table")
          .find("tbody :checkbox").length
      );
  });
});

//  **------ Cancelled **

$(function() {
  $("#select_all_cancelled").on("click", function () {
    $(this)
      .closest("table")
      .find("tbody :checkbox")
      .prop("checked", this.checked)
      .closest("tr")
      .toggleClass("selected", this.checked);
  });

  $("tbody :checkbox").on("click", function () {

    $(this)
      .closest("tr")
      .toggleClass("selected", this.checked);

    $(this).closest("table")
      .find("#select_all_cancelled")
      .prop("checked",
        $(this)
          .closest("table")
          .find("tbody :checkbox:checked").length ==
        $(this)
          .closest("table")
          .find("tbody :checkbox").length
      );
  });
});