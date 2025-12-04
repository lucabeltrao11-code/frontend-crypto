export default function AnalysisPanel({ analysis }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Resultados da Análise</h2>
      <p>Preço atual: ${analysis.preco_atual}</p>
      <p>RSI: {analysis.RSI}</p>
      <p>MACD: {analysis.MACD}</p>
      <p>Signal: {analysis.Signal}</p>
      <p>Recomendação: {analysis.Recomendação}</p>
    </div>
  );
}
