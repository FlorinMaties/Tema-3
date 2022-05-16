import { useState } from "react";

import Exercitiul1 from "./Componente/Exercitiul1";
import Exercitiul2 from "./Componente/Exercitiul2";
import Exercitiul3 from "./Componente/Exercitiul3";
import Exercitiul4 from "./Componente/Exercitiul4";
import ListaCuloriAdaugate from "./Componente/ListaCuloriAdaugate";

function App() {
  const [listaCuloare, setListaCuloare] = useState([]);

  console.log("LISTSSSSSS", listaCuloare);

  return (
    <div className="App">
      <Exercitiul1 />
      <Exercitiul2 />
      <Exercitiul3
        setListaCuloare={setListaCuloare}
        listaCuloare={listaCuloare}
      />
      <Exercitiul4 />
      <ListaCuloriAdaugate
        listaCuloare={listaCuloare}
        setListaCuloare={setListaCuloare}
      />
    </div>
  );
}

export default App;
