import { useState } from "react";
import NavBar from "./componentes/nav";
import Slide from "./componentes/slider";
import Topicos from "./componentes/topicos";
import dados from "./assets/dados.png";
import ambiental from "./assets/ambiental.png";
import armazenamento from "./assets/armazenamento.png";
import Fluxo from "./componentes/fluxos";
import Flexa from "./componentes/flexa";
import aspas from "./assets/aspas.png";
import turma from "./assets/turma.jpg";
import robert from "./assets/robert-bosch.svg";
import BoxCitacao from "./componentes/boxCitacoes";
import naely from './assets/naely.jpg'
import capo from './assets/capo.jpg'
import luiza from './assets/luiza.jpg'
import michael from './assets/michael.jpg'
// import flexaDireita from './assets/seta-down.png'
import Foto from "./componentes/fotos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Slide />
      {/* TAG PORQUE BLOCKCHAIN? */}
      <hr class="w-[100%] h-px my-8 bg-gray-200 border-[0px] border-black"></hr>
      <div className="w-full flex justify-center h-[90vh] items-center">
        <div className="bg-[#D1E4FF] shadow-xl shadow-[#A8A6A6] w-[90%] h-[70vh] rounded-[16px] p-[3vh] flex items-center flex-col 2xl:">
          <div className="titulo flex items-center justify-center">
            <h1 className="xl:text-[7vh] 2xl:text-[9vh]">
              Por que a blockchain?
            </h1>
          </div>
          <div className="xl:textos w-[80%] text-center text-[3vh] p-[2vh] h-[80%] flex items-center 2xl:text-[32px] 2xl:w-[70%]">
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
      <div className="Fluxograma xl:h-[90vh] 2xl:h-[90vh] w-full ">
        <div className="flex items-center">
          <h1 className="xl:text-[45px] w-[50%] flex justify-center 2xl:text-[6vh]">
            Como o GreenBo funciona?
          </h1>
          <hr class="w-[50%] h-px my-8 bg-gray-200 border-[0.5px] border-black"></hr>
        </div>
        <div className="w-full flex h-full flex-col items-center ">
          <div className="fluxos xl:flex items-center w-[90%] justify-between h-[45%] 2xl:justify-around ">
            <Fluxo
              numero={"1"}
              cor={"bg-[#86D7A2]"}
              texto={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam facere velit ex, ill"
              }
            />
            <Flexa />
            <Fluxo
              numero={"2"}
              cor={"bg-[#9DC9FF]"}
              texto={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam facere velit ex, ill"
              }
            />
            <Flexa />
            <Fluxo
              numero={"3"}
              cor={"bg-[#86D7A2]"}
              texto={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam facere velit ex, ill"
              }
            />
          </div>

          <div className="fluxos xl:flex items-center w-[90%] h-[45%] justify-between 2xl:justify-around">
            {/* <Flexa /> */}
            <Fluxo
              numero={"4"}
              cor={"bg-[#9DC9FF]"}
              texto={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam facere velit ex, ill"
              }
            />
            <Flexa />
            <Fluxo
              numero={"5"}
              cor={"bg-[#86D7A2]"}
              texto={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam facere velit ex, ill"
              }
            />
            <Flexa />
            <Fluxo
              numero={"6"}
              cor={"bg-[#9DC9FF]"}
              texto={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ullam facere velit ex, ill"
              }
            />
          </div>
        </div>
      </div>
      {/* Resposabilidades */}
      <div className="h-[100vh] justify-center flex items-center flex-col">
        <div className="">
          {/* Titulo */}
          <div className="flex items-center">
            <h1 className="xl:text-[5vh] flex justify-center w-[40%] 2xl:text-[6vh] 2xl:w-[40%] ">
              Responsabilidades
            </h1>
            <hr class="xl:w-[65%] h-px my-8 bg-gray-200 border-[0.5px] border-black 2xl:w-[65%] "></hr>
          </div>
          <div className="xl:w-full justify-center flex 2xl:justify-evenly">
            <div className="Box1 xl:flex w-[50%] justify-center flex-col 2xl:w-[50%]">
              <img className="xl:h-[15px] w-[15px]" src={aspas} alt="" />
              <p className="xl:text-[3.5vh] w-full italic flex h-[27vh] items-center 2xl:h-[25vh] 2xl:text-[37px] 2xl:w-full">
                No espírito do nosso fundador, demonstramos, particularmente,
                responsabilidade social e ambiental – onde quer que façamos
                negócios
              </p>
              <hr className="border-[#006C3A] border-[2px] w-[20%]" />
            </div>
            <div className="Box2 xl:w-[40%] flex justify-end 2xl:w-auto">
              <img className="2xl: h-[50vh]" src={robert} alt="" />
            </div>
          </div>
        </div>
        {/* Box de citações */}
        <div className="xl:flex w-[90%] h-[35vh] items-center justify-around">
          <BoxCitacao
            texto={
              "Na Bosch, priorizamos realizar ações que gerem resultados efetivos e que possam ser comprovados em nossa cadeia de valor e para a sociedade, alinhados ao nosso propósito de tecnologia para a vida."
            }
          />
          <BoxCitacao
            texto={
              "Até 2030, a Bosch investirá um bilhão de euros em custos adicionais comprando eletricidade verde, participando de programas de compensação de carbono e adquirindo energia de fontes renováveis"
            }
          />
        </div>
      </div>
      {/* TAG A primeira versão do GreenBo*/}
      <hr class="w-[100%] h-px my-8 bg-gray-200 border-[0px] border-black"></hr>
      <div className="xl:h-[75vh] bg-[#9dc9ff7a]  2xl:w-full h-[80vh] items-center flex justify-center">
        <div className="xl:flex 2xl:w-[90%] justify-evenly">
          <div className="flex flex-col w-[45%] justify-center text-justify">
            <h1 className="xl:text-[4.4vh] xl:h-[10vh] 2xl:text-[6vh] 2xl:h-[12vh]">
              A primeria versão do GreenBo
            </h1>
            <p className="xl:text-[22px] 2xl:text-[26px] leading-[2] ">
              O GreenBo foi desenvolvido durante a 4ª Edição do Hackathon, uma
              semana de competição interna dentro da CaP/ETS, pelos aprendizes
              do curso Técnico de Mecatrônica e Digital Solutios, sendo eles:
              Ingrid Santos De Oliveira, Jenifer Gomes Ramalho e Larissa Augusta
              Rezende De Oliveira, Lucas Capovila, Luiza Pereira Moraes, Michael
              Douglas Camilo Lopes e Naely Lima Pereira.
            </p>
          </div>

          <div className="imagem w-[45%] shadow-xl shadow-[#A8A6A6] ">
            <img className="" src={turma} alt="" />
          </div>
        </div>
      </div>
      {/* Entre em contato */}
      <div className="xl:w-full flex justify-center">
        <div className="xl:w-[90%] h-[50vh] justify-center flex flex-col">
          <div className="h-[30%]">
            <h1 className="xl:text-[4.5vh]">Entre em contato conosco</h1>
          </div>
          <div className="fotos xl:w-full justify-evenly flex">
            <Foto nome_area={'Lucas Capovila'} area={'CaP/ETS'} foto={capo}/>
            <Foto nome_area={'Luiza Moraes'} area={'CaP/ETS'} foto={luiza} />
            <Foto nome_area={'Michael Douglas'} area={'CaP/ETS'} foto={michael}/>
            <Foto nome_area={'Naely Pereira'} area={'CaP/ETS'} foto={naely}/>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
