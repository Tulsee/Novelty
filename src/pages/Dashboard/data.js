import {
  AiOutlineDollarCircle,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const stats = [
  {
    label: "TODAY'S TOTAL INCOME",
    value: 100,
    icon: <AiOutlineDollarCircle size={50} color="#652D86" />,
  },
  {
    label: "TOTAL TRANSACTIONS SUCCESS",
    value: 70,
    icon: <AiOutlineCheckCircle size={50} color="#652D86" />,
  },
  {
    label: "TOTAL TRANSACTIONS FAILURES",
    value: 60,
    icon: <AiOutlineCloseCircle size={50} color="#652D86" />,
  },
];

const options = {
  chart: {
    background: "#e4f5f3",
  },
  xaxis: {
    categories: [
      "11 july",
      "13 july",
      "15 july",
      "17 july",
      "19 july",
      "20 july",
      "21 july",
    ],
    labels: {
      formatter: function (val) {
        return val;
      },
    },
    title: {
      text: "Time/Date",
    },
  },
  dataLabels: {
    enabled: false,
  },
};

const series = [
  {
    name: "fonepay",
    data: [20000.0, 40000.0, 30000.0, 50000.0, 10000, 25000, 70000],
  },
  {
    name: "credit card",
    data: [26000.0, 3300.0, 40000.0, 55000.0, 50000, 60000, 20000],
  },
  {
    name: "cash",
    data: [40000.0, 30000.0, 35000.0, 50000.0, 25000, 30000, 40000],
  },
];

const options1 = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  title: {
    text: "Earning Vs Time",
  },
  xaxis: {
    categories: ["11 july", "13 july", "15 july", "17 july", "19 july"],
    labels: {
      formatter: function (val) {
        return "Date";
      },
    },
    title: {
      text: "Earning",
    },
  },
  yaxis: {
    title: {
      text: "Time/Date",
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    offsetX: 40,
  },
};

export { stats, options, series, options1 };
