import React from "react";
import QuotePage from "./components/QuotePage.jsx";


const App = () => {
  const quotesData = [
    { id: 1, quote: "Food is symbolic of love when words are inadequate.", writer: "Alan D. Wolfelt" },
    { id: 2, quote: "One cannot think well, love well, sleep well, if one has not dined well.", writer: "Virginia Woolf" },
    { id: 3, quote: "You don't need a silver fork to eat good food.", writer: "Paul Prudhomme" },
    { id: 4, quote: "Life is uncertain. Eat dessert first.", writer: "Ernestine Ulmer" }
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Geek Food: Inspiring Quotes</h1>
      <QuotePage quotes={quotesData} />
    </div>
  );
};

export default App;