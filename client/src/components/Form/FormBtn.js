import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, fontWeight: "lighter" }} className="btn btn-dark">
      {props.children}
    </button>
  );
}
