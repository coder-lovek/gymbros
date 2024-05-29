import React, { useState } from "react";

function Cards({ gymName, description, options, img }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const calculateNetAmount = () => {
    if (selectedOption) {
      return options[selectedOption];
    }
    return "Select a duration";
  };

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "300px" }}>
        <div style={{ maxHeight: "150px", overflow: "hidden" }}>
          <img className="card-img-top" src={img} alt="Card image cap" style={{ maxWidth: "100%", height: "auto", objectFit: "fill" }} />
        </div>
        <div className="card-body" style={{ overflow: "auto" }}>
          <h5 className="card-title">{gymName}</h5>
          <p className="card-text">{description}</p>
          <div className="container w-100">
            <select className="m-2 h-100" name="" id="" onChange={handleOptionChange}>
              <option value="">Select duration</option>
              {Object.entries(options).map(([key, value]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            <div className="d-inline h-100 fs-5">{calculateNetAmount()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
