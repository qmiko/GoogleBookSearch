import React from "react";
import "./List.css";

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ol className="list-group">{children}</ol>
    </div>
  );
}
