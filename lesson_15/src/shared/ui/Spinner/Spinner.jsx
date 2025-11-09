// Spinner.jsx
import React from "react";

function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="50"
        height="50"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#20E6FF"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="80 200"
          strokeDashoffset="0"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1.2s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Spinner;
