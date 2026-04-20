import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [diet, setDiet] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/generate-recipe", {
        ingredients,
        diet,
      });
      setRecipe(res.data.recipe);
    } catch (err) {
      alert("Error connecting to backend");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🍳 AI Recipe Generator</h1>

      <textarea
        placeholder="Enter ingredients (e.g. chicken, rice, tomato)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <input
        placeholder="Diet (optional: vegan, halal...)"
        value={diet}
        onChange={(e) => setDiet(e.target.value)}
      />

      <button onClick={generateRecipe}>
        {loading ? "Generating..." : "Generate Recipe"}
      </button>

      {recipe && (
        <div className="result">
          <h2>🍽️ Your Recipe</h2>
          <pre>{recipe}</pre>
        </div>
      )}
    </div>
  );
}

export default App;