import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function PhCharts({ Chartdata }) {
  const [data, setData] = useState({
    series: [
      {
        name: "Ph",
        data: [],
      },
    ],

    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
        colors: ["#2eca6a"],
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          gradientToColors: ["#9A66FF"],
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#5733FF"], // Vivid Purple

      },
      xaxis: {
        type: "datetime",
        categories: [],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  useEffect(() => {
    if (Chartdata.PH) {
      const values = Chartdata.PH.map((it) => parseFloat(it.value).toFixed(2));

      const time = Chartdata.PH.map((it) => it.timestamp);

      // console.log(values);
      // console.log(time);

      setData((data) => ({
        ...data,
        series: [
          {
            name: "Ph",
            data: values,
          },
        ],
        options:{
          ...data.options,
        xaxis: {
          type: "datetime",
          categories: time,
        },
      }
      }));
    }
  },[Chartdata.PH]);

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    ></Chart>
  );
}

export default PhCharts;