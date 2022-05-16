import DetaliiProdus from "./DetaliiProdus";

const Exercitiul1 = () => {
  return (
    <div className="ExercitiulX">
      <DetaliiProdus
        denumire="Sapun"
        pret="33.4 RON"
        categorie="beauty"
        culoare="red"
      />
      <DetaliiProdus
        denumire="Sampon"
        pret="666.2 RON"
        categorie="beauty"
        culoare="purple"
      />
      <DetaliiProdus denumire="Ruj" />
      <p>Extercitiul1</p>
    </div>
  );
};

export default Exercitiul1;
