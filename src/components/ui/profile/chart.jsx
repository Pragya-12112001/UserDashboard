import Chart from "react-apexcharts";

export const UserChart = ({darkMode})=>{
  
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 350,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  
  return (
    <div className={`flex px-5 py-6 justify-center items-center rounded-lg
      ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}
    `}>
    <Chart 
      options={options.options} 
      series={options.series}
      type="donut"
      height={350}
    />
    </div>
  )
}