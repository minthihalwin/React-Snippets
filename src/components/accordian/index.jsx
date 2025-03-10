// single selection
// multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    console.log("getCurrentId :", getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
