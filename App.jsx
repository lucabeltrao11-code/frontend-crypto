import { useState } from "react";
import PriceChart from "./components/PriceChart";
import AnalysisPanel from "./components/AnalysisPanel";

function App() {
  const [crypto, setCrypto] = useState("bitcoin");
  const [analysis, setAnalysis] = useState(null);

  const fetchAnalysis = async () => {
    try {
      const res = await fetch(
        `https://meu-analise-mercado.onrender.com/analisar/${crypto}?dias=30`
      );
      const data = await res.json();
      setAnalysis(data);
    } catch (err) {
      console.error(err);
      alert("Erro ao buscar dados da API. Tente novamente.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Dashboard de Análise de Cripto</h1>

      <input
        type="text"
        value={crypto}
        onChange={(e) => setCrypto(e.target.value.toLowerCase())}
        placeholder="Digite o nome da cripto"
        style={{ padding: "0.5rem", fontSize: "1rem" }}
      />

      <button
        onClick={fetchAnalysis}
        style={{ marginLeft: "1rem", padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        Analisar
      </button>

      {analysis && (
        <>
          <PriceChart crypto={crypto} />
          <AnalysisPanel analysis={analysis} />
        </>
      )}
    </div>
  );
}

export default App;
