import React from "react";

const ListaCuloriAdaugate = (props) => {
  const { listaCuloare, setListaCuloare } = props;

  const handleDeleteFromList = (colorName) => {
    console.log("NUMBE PE CARE DAU CLICK", colorName);
    setListaCuloare(
      listaCuloare.filter((val) => {
        return val !== colorName;
      })
    );
  };

  return (
    <div>
      {listaCuloare.map((val) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: val || "white",
              width: "100px",
              height: "100px",
            }}
          >
            <p>{val}</p>
            <button onClick={() => handleDeleteFromList(val)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListaCuloriAdaugate;
