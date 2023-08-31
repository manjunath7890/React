// import React, { useEffect, useRef } from 'react';
// import RadialBarChart from './RadialBarChart';

// const App = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       series: [67],
//       chart: {
//         height: 350,
//         type: 'radialBar',
//         offsetY: -10,
//       },
//       plotOptions: {
//         radialBar: {
//           startAngle: -135,
//           endAngle: 135,
//           dataLabels: {
//             name: {
//               fontSize: '16px',
//               color: undefined,
//               offsetY: 120,
//             },
//             value: {
//               offsetY: 76,
//               fontSize: '22px',
//               color: undefined,
//               formatter: function (val) {
//                 return val + '%';
//               },
//             },
//           },
//         },
//       },
//       fill: {
//         type: 'gradient',
//         gradient: {
//           shade: 'dark',
//           shadeIntensity: 0.15,
//           inverseColors: false,
//           opacityFrom: 1,
//           opacityTo: 1,
//           stops: [0, 50, 65, 91],
//         },
//       },
//       stroke: {
//         dashArray: 4,
//       },
//       labels: ['Median Ratio'],
//     };

//     if (chartRef.current) {
//       const chart = new ApexCharts(chartRef.current, options);
//       chart.render();
//     }
//   }, []);

//   return (
//     <div>
//       <RadialBarChart options={options} />
//     </div>
//   );
// };

// export default App;
// // 