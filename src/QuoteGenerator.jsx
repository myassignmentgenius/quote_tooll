import React, { useState } from "react";

export default function QuoteGenerator() {
  const [service, setService] = useState("Assignment");
  const [level, setLevel] = useState("Undergraduate");
  const [wordCount, setWordCount] = useState(1000);
  const [urgency, setUrgency] = useState("7+ Days");
  const [extras, setExtras] = useState({
    turnitin: false,
    slides: false,
    references: false,
  });

  const basePrices = {
    Diploma: 0.03,
    Undergraduate: 0.04,
    Masters: 0.05,
    PhD: 0.06,
  };

  const urgencyMultiplier = {
    "7+ Days": 1.0,
    "4-6 Days": 1.2,
    "2-3 Days": 1.5,
    "24 Hours": 2.0,
  };

  const extraPrices = {
    turnitin: 5,
    slides: 10,
    references: 3,
  };

  const calculateQuote = () => {
    let base = basePrices[level] * wordCount * urgencyMultiplier[urgency];
    let extrasTotal = Object.entries(extras)
      .filter(([key, value]) => value)
      .reduce((sum, [key]) => sum + extraPrices[key], 0);
    return (base + extrasTotal).toFixed(2);
  };

  return (
    <div style={{
      maxWidth: "600px", margin: "40px auto", padding: "20px",
      background: "#fff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ textAlign: "center" }}>Quote Generator</h2>
      <label>Service:
        <select value={service} onChange={e => setService(e.target.value)}>{["Assignment","Final Year Project","Dissertation","Case Study"].map(opt => <option key={opt}>{opt}</option>)}</select>
      </label><br/>
      <label>Academic Level:
        <select value={level} onChange={e => setLevel(e.target.value)}>{["Diploma","Undergraduate","Masters","PhD"].map(opt => <option key={opt}>{opt}</option>)}</select>
      </label><br/>
      <label>Word Count:
        <input type="number" value={wordCount} onChange={e => setWordCount(Number(e.target.value))} />
      </label><br/>
      <label>Urgency:
        <select value={urgency} onChange={e => setUrgency(e.target.value)}>{["7+ Days","4-6 Days","2-3 Days","24 Hours"].map(opt => <option key={opt}>{opt}</option>)}</select>
      </label><br/>
      <fieldset>
        <legend>Add-ons</legend>
        {Object.keys(extras).map(key => (
          <label key={key}>
            <input type="checkbox" checked={extras[key]} onChange={e => setExtras({ ...extras, [key]: e.target.checked })} />
            {key.charAt(0).toUpperCase() + key.slice(1)} ({key === "turnitin" ? "+£5" : key === "slides" ? "+£10" : "+£3"})
          </label>
        ))}
      </fieldset>
      <h3>Estimated Quote: £{calculateQuote()}</h3>
    </div>
  );
}
