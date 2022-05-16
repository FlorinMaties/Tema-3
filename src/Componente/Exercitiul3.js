import { useState } from "react";

const Exercitiul3 = (props) => {
  const [value, setValue] = useState("");
  const { setListaCuloare, listaCuloare } = props; // descructurare

  const handleAddColor = () => {
    setListaCuloare(listaCuloare.concat(value));
    setValue("");
  };

  return (
    <div className="ExercitiulX">
      <p>Exercitiul3</p>
      <input
        placeholder="insert color"
        value={value}
        onChange={(input) => {
          setValue(input.target.value);
        }}
      />
      <button onClick={handleAddColor}>Add</button>
    </div>
  );
};

export default Exercitiul3;
