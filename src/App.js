import './App.css';
import { useState } from 'react';
import CardJogo from './componetes/CardJogo/CardJogo';
import Cardinformacao from './componetes/CardInformacao/CardInformacao';
import Topo from './componetes/Topo/Topo';

export default function App() {
 
  const [tipoDoComponeteCard, setTipoDoComponeteCard] = useState("DayZ");

  const alterarState = () =>{
    if (tipoDoComponeteCard === "DayZ"){
      setTipoDoComponeteCard("Rust");
    }else{
      setTipoDoComponeteCard("DayZ")
    }
  };

  return (
    <div className="App">
      <Topo alterarJogo = {alterarState}/>  
      <CardJogo nomeJogo = {tipoDoComponeteCard}/>
      <Cardinformacao nomeJogo = {tipoDoComponeteCard}/>
    </div>
  );
}


