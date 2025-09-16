import { useState } from "react";

function App() {
  const [compliment, setCompliment] = useState("");

  const getCompliment = async () => {
    try {
      const response = await fetch("http://localhost:3000/compliment");
      const data = await response.json();
      setCompliment(data.compliment);
    } catch (error) {
      console.error("Error fetching compliment:", error);
    }
  };

  return (
    <div>
      <h1>Compliment Generator</h1>
      <button onClick={getCompliment} style={{ margin: "10px", padding: "8px 16px" }}>
        Get Compliment
      </button>
      <p>{compliment || "Compliment will appear here..."}</p>
    </div>
  );
}

export default App;