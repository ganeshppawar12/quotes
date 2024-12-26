
import React from "react";

const QuotePage = ({ quotes }) => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {quotes.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <p style={{ fontSize: "18px", fontStyle: "italic" }}>
            "{item.quote}"
          </p>
          <p style={{ fontSize: "16px", fontWeight: "bold", textAlign: "right", margin: "10px 0 0" }}>
            - {item.writer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuotePage;