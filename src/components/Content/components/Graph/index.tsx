import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    y: {
      max: 300,
      min: 0,
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      Align: "start",
      labels: {
        boxHeight: 1,
        padding: 15,
    }
    },
  },
};

const labels = [
  "2020/08",
  "2020/09",
  "2020/10",
  "2020/11",
  "2020/12",
  "2021/01",
  "2021/02",
  "2021/03",
  "2021/04",
  "2021/05",
  "2021/06",
  "2021/07",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Vendas de 2020",
      data: [50, 70, 105, 120, 155, 105, 125, 135, 175, 105, 115, 190],
      borderColor: "#FF00C7",
      backgroundColor: "#FF00C7",
      tension: 0.4,
    },
    {
      label: "Vendas de 2021",
      data: [140, 120, 200, 160, 210, 150, 180, 150, 135, 210, 185, 245],
      borderColor: "#3374AB",
      backgroundColor: "#3374AB",
      tension: 0.4,
    },
  ],
};

export function Graph() {
  return (
    <>
    <Container>
    <h2>Relatório de Vendas</h2>
      <Line options={options} data={data} />
    </Container>
      
    </>
  );
}
