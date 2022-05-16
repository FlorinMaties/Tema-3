import { useEffect, useState } from "react";

const Exercitiul4 = () => {
  const [initialMessage, setInitalMessage] = useState("Loading, please wait");

  useEffect(() => {
    setTimeout(() => {
      setInitalMessage("Finished loading");
    }, 5000);
  }, []);

  return (
    <div className="ExercitiulX">
      <p>Exercitiul4 {initialMessage}</p>
    </div>
  );
};

export default Exercitiul4;
