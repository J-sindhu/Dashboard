

var barChartsOption= {
    series: [{
    data: [10,8,6,4,2]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar : {
        show : false
    },
  },
plotOptions: {
    bar: {
      distrubuted : true,
      borderRadius: 4,
      horizontal: false,
      columnWidth : "40%",
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show :false
  },
  xaxis: {
    categories: ["Dell","Lenovo","Microsoft","Apple","HP"],
  },
  yaxis : {
    title: {
        text: "Count"
    }
  }
  };

  var barChart= new ApexCharts(document.querySelector("#bar-charts"),barChartsOption);
  barChart.render();



  var areaChartOptions = {
    series: [{
    name: 'Purchase Order',
    data: [44, 55, 31, 47, 31,43]
  }, {
    name: 'Sales Order',
    data: [55, 69, 45, 61, 43, 54]
  }],
    chart: {
    height: 350,
    type: 'line',
    toolbar : {
      show : false,
    }
  },
  dataLabels : {
    enabled :false,
  },
  color: [

    "#4f35a1","#246dec"
  ],
  stroke: {
    curve: 'smooth'
  },
  
  labels: ["jan","Feb","Mar","April","may","June"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Order',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales order',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,

  }
  };

  var areachart = new ApexCharts(document.querySelector("#area-charts"), areaChartOptions);
  areachart.render();