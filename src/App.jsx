import { useState } from "react";
import NavBar from "./componentes/nav";
import Slide from "./componentes/slider";
import Topicos from "./componentes/topicos";
import dados from "./assets/dados.png";
import ambiental from "./assets/ambiental.png";
import armazenamento from "./assets/armazenamento.png";
import Fluxo from "./componentes/fluxos";
import Flexa from "./componentes/flexa";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Slide />
      {/* TAG PORQUE BLOCKCHAIN? */}
      <div className="w-full flex justify-center h-[90vh] items-center">
        <div className="bg-[#D1E4FF] w-[95%] h-[60vh] rounded-[16px] p-[3vh] flex items-center flex-col 2xl:">
          <div className="titulo flex items-center justify-center">
            <h1 className="xl:text-[50px] 2xl:text-[8vh]">
              Por que a blockchain?
            </h1>
          </div>
          <div className="xl:textos w-[70%] text-center text-[22px] p-[2vh] h-[80%] flex items-center 2xl:text-[28px]">
            <p>
              Ela é uma tecnologia que permite a descentralização de informação,
              por realizar o registro de informações de uma forma que torna
              difícil ou impossível alterar, hackear ou enganar o sistema.
            </p>
          </div>
          {/* Topicos */}
          <div className="topicos flex w-full h-full justify-evenly items-center">
            {/* dados */}
            <Topicos
              img={dados}
              titulo={"Tranparência de Dados"}
              texto={
                "Nenhum usuário pode alterar ou corromper um dados após ele ser armazenado"
              }
            />
            {/* Responsabilidade Ambiental */}
            <Topicos
              img={ambiental}
              titulo={"Responsabilidade Ambiental"}
              texto={
                "Compromisso de proteger o meio ambiente para a atual e as futuras gerações"
              }
            />
            {/* Armazenamento Seguro */}
            <Topicos
              img={armazenamento}
              titulo={"Armazenamento Seguro"}
              texto={"Todas as transações validadas são imutáveis."}
            />
          </div>
        </div>
      </div>
      {/* TAG Como o GreenBo funciona? */}
      <div className="Fluxograma xl:h-[90vh] ">
        <div className="flex align-center">
          <h1 className="xl:text-[45px] w-[50%] flex justify-center">
            Como o GreenBo funciona?
          </h1>
          <hr class="w-[50%] h-px my-8 bg-gray-200 border-[0.5px] border-black"></hr>
        </div>
        <div className="fluxos xl:flex items-center w-[90%] justify-center 2xl:w-full">
          <Fluxo/>
          <Flexa/>
          <Fluxo/>
          <Flexa/>
          <Fluxo/>
          <Flexa/>
        </div>
      </div>
    </>
  );
}

export default App;
