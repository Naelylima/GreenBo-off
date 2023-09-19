import ReactApexChart from "react-apexcharts";

const GraficoRanking = ({ nome_area: nome, area, foto }) => {
  const options = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany",
      ],
    },
    title: {
      text: "Business",
      align: 'center',
      style: {
        fontSize:  '25px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      },
    },
  };
  return (
    <>
      <ReactApexChart
        options={options}
        series={options.series}
        type="bar"
        height={600}
      />
    </>
  );
};
export default GraficoRanking;
