
import React, { useState } from "react";

export default function QuoteGenerator() {
  // ✅ Editable base prices per word by academic level
  const basePrices = {
    Diploma: 0.05,
    Undergraduate: 0.08,
    Masters: 0.10,
    PhD: 0.20,
  };

  // ✅ Grade multipliers
  const gradeMultipliers = {
    "First Class": 1.2,
    "2:1": 1.1,
    "2:2": 1.0,
    "Third Class": 0.9,
  };

  // ✅ Urgency multipliers
  const urgencyMultiplier = {
    "7+ Days": 1.0,
    "4-6 Days": 1.2,
    "2-3 Days": 1.5,
    "24 Hours": 2.0,
  };

  // ✅ Extra options
  const extraPrices = {
    turnitin: 5,
    slides: 10,
    references: 3,
  };

  const [service, setService] = useState("Assignment");
  const [level, setLevel] = useState("Undergraduate");
  const [grade, setGrade] = useState("2:1");
  const [wordCount, setWordCount] = useState(1000);
  const [urgency, setUrgency] = useState("7+ Days");
  const [extras, setExtras] = useState({
    turnitin: false,
    slides: false,
    references: false,
  });

  const calculateQuote = () => {
    let base = basePrices[level] * wordCount;
    base *= gradeMultipliers[grade];
    base *= urgencyMultiplier[urgency];
    let extrasTotal = Object.entries(extras)
      .filter(([_, v]) => v)
      .reduce((sum, [k]) => sum + extraPrices[k], 0);
    return (base + extrasTotal).toFixed(2);
  };

  return (
    <div style={{
      maxWidth: "600px", margin: "40px auto", padding: "20px",
      background: "#fff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ textAlign: "center" }}>Quote Generator</h2>

      <label>Service:
        <select value={service} onChange={e => setService(e.target.value)}>
          {["Assignment", "Final Year Project", "Dissertation", "Case Study"].map(opt => <option key={opt}>{opt}</option>)}
        </select>
      </label><br />

      <label>Academic Level:
        <select value={level} onChange={e => setLevel(e.target.value)}>
          {["Diploma", "Undergraduate", "Masters", "PhD"].map(opt => <option key={opt}>{opt}</option>)}
        </select>
      </label><br />

      <label>Target Grade:
        <select value={grade} onChange={e => setGrade(e.target.value)}>
          {["First Class", "2:1", "2:2", "Third Class"].map(opt => <option key={opt}>{opt}</option>)}
        </select>
      </label><br />

      <label>Word Count:
        <input type="number" value={wordCount} onChange={e => setWordCount(Number(e.target.value))} />
      </label><br />

      <label>Urgency:
        <select value={urgency} onChange={e => setUrgency(e.target.value)}>
          {["7+ Days", "4-6 Days", "2-3 Days", "24 Hours"].map(opt => <option key={opt}>{opt}</option>)}
        </select>
      </label><br />

      <fieldset>
        <legend>Add-ons</legend>
        {Object.entries(extras).map(([k, v]) => (
          <label key={k}>
            <input type="checkbox" checked={v} onChange={e => setExtras({ ...extras, [k]: e.target.checked })} />
            {" "}{k.charAt(0).toUpperCase() + k.slice(1)} (+£{extraPrices[k]})
          </label>
        ))}
      </fieldset>

      <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        Estimated Quote: £{calculateQuote()}
      </h3>
    </div>
  );
}
