import { useState } from "react";

const DetaliiProdus = (props) => {
  const [clickonName, setClickOnName] = useState(false);

  const clickHandler = () => {
    setClickOnName(!clickonName);
  };

  return (
    <div
      className="extercitiu-2"
      style={{ backgroundColor: props.culoare || "green " }}
    >
      <p onClick={clickHandler} className={clickonName && "favorite-color"}>
        {props.denumire || "lipsa denumire"}
      </p>

      <p>{props.preț || "lipsa pret"}</p>
      <p>{props.categorie || "lipsa categorie"}</p>
      <p>{props.culoare || "lipsa culoare"}</p>

      {/* {clickonName ? <p>Numele de alături este colorat</p> : ""} */}
      {clickonName && <p>Numele de alături este colorat</p>}
    </div>
  );
};

export default DetaliiProdus;
