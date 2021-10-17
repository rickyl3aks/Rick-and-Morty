import React from "react";

const Btn = ({ prev, next }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={prev}>
        Prev
      </button>
      <button className="btn" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Btn;
