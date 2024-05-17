import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import DownIcon from "../../Assets/Icons/DownIcon";

const CostStats = () => {
  // State to track the selected period
  const [selectedPeriod, setSelectedPeriod] = useState("Last 6 months");
  const handlePeriodClick = (period) => {
    setSelectedPeriod(period);
  };

  const [chartData] = useState({
    series: [1217, 5629],
    options: {
      chart: {
        width: 100,
        type: "donut",
      },
      labels: ["Budgeted", "Actual"],
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        formatter: function (val, opts) {
          const seriesValue = opts.w.globals.series[opts.seriesIndex];  
          return (
            val + "<br/>" + `<span class="cost-title">${seriesValue}</span>`
          );
        },
        position: "bottom",
        fontFamily: "Mulish",
        fontSize: "12px",
        fontWeight: 500,
        markers: {
          width: 9,
          height: 9,
          offsetY: -8,
        },
        labels: {
          colors: ["#00000061", "#00000061"],
          useSeriesColors: false,
        },
        itemMargin: {
          horizontal: 10,
          vertical: 0,
        },
      },
      fill: {
        colors: ["#3751FF", "#FF9F40"],
      },
      colors: ["#3751FF", "#FF9F40"],
    },
  });

  return (
    <div className="cost-stats">
      <div className="cost-stats-title d-flex align-items-center justify-content-between">
        <div className="fs-16 fw-medium">Cost Stats</div>
        <div className="dropdown select-dropdown">
          <button className="select-title" data-bs-toggle="dropdown">
            <span className="fs-14 d-flex align-items-center gap-2">
              {selectedPeriod} <DownIcon />
            </span>
          </button>
          <ul className="dropdown-menu select-menu">
            <li onClick={() => handlePeriodClick("Last 6 months")}>
              Last 6 months
            </li>
            <li onClick={() => handlePeriodClick("Last 8 months")}>
              Last 8 months
            </li>
            <li onClick={() => handlePeriodClick("Last 12 months")}>
              Last 12 months
            </li>
          </ul>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width={220}
          className="chat-box"
        />
      </div>
    </div>
  );
};

export default CostStats;
