import { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";

export default function PriceChart({ crypto }) {
  const chartRef = useRef();

  useEffect(() => {
    const chart = createChart(chartRef.current, {
      width: 600,
      height: 300,
      layout: { backgroundColor: "#ffffff", textColor: "#000" },
    });

    const lineSeries = chart.addLineSeries();

    const fetchPrices = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=30`
        );
        const data = await res.json();

        const formatted = data.prices.map(([timestamp, price]) => ({
          time: Math.floor(timestamp / 1000),
          value: price,
        }));

        lineSeries.setData(formatted);
      } catch (err) {
        console.error("Erro ao buscar preços:", err);
      }
    };

    fetchPrices();

    return () => chart.remove();
  }, [crypto]);

  return <div ref={chartRef}></div>;
}
