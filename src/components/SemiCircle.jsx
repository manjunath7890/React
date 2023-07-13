import React, { useRef, useEffect } from "react";
import Chart from "react-apexcharts";

const SemiCircleRadialGauge = ({
  val = 0,
  value = 0,
  colorBlue,
  colorGrey,
  colorGreen,
  maxValue = 45,
  label,
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current.chart;
    if (chart && value <= maxValue) {
      chart.updateOptions({
        series: [value],
        labels: [label],
      });
    }
  }, [value, maxValue, label]);

  const chartOptions = {
    chart: {
      height: 230,
      type: "radialBar",
      offsetY: -10,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 7,
        opacity: 0.45,
        color: "#00dddd", // Aqua Blue
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        hollow: {
          margin: 0,
          size: "65%",
          background: "transparent",
          image: undefined,
        },
        
        track: {
          background: colorBlue,
          strokeWidth: "100%",
          margin: 0,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            offsetY: 50,
            color: colorGreen,
            fontWeight: "boold",
            fontSize: "20px",
          },
          value: {
            formatter: function () {
              return parseInt(val * 10).toFixed(0);
            },
            show: true,
            color: colorGrey,
            fontSize: "50px",
            fontWeight: "bold",
            offsetY: -10,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: [colorGreen],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
      dashArray: 4,
    },
    labels: [label],
    series: [value],
    colors: [colorGreen],
    title: {
      text: undefined,
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type={chartOptions.chart.type}
        height={chartOptions.chart.height}
        width={"100%"}
        ref={chartRef}
      />
    </div>
  );
};

export default SemiCircleRadialGauge;
