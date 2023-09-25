import NavBar from "../componentes/nav";
import Footer from "../componentes/footer";
import logoBosch from "../assets/boschLogo.png";
import { useNavigate } from "react-router-dom";
import InputDados from "../componentes/inputDados";
import car from "../assets/transporter-car-front.svg";
import eficiencia from "../assets/efficiency.svg";
import { useState } from "react";

function InsercaoDados() {
  let navigate = useNavigate();
  const [verificaClick, setVerifica] = useState(false);
  return (
    <>
      <div className="items-center content-center">
        <NavBar pagina={"login"} />
        <div className="grid ml-[10vh] mr-[10vh]">
          <hr class="xl:w-[100%] h-px my-5 bg-gray-200 border-[0px] border-black"></hr>
          <div className="">
            <h1 className="xl:text-[4vh] 2xl:text-[5vh]">Inserção de dados</h1>
          </div>
          {/* Escopos 1 e 2 */}
          <div className="w-full flex justify-end ">
            <div className="xl:justify-between text-[18px] flex w-[40%] 2xl:w-[27%] ">
              {/* BOTAO 1 */}
              <button
                onClick={() => setVerifica(false)}
                className="xl:w-[23vh] text-[20px] h-[50px] bg-[#1670A8] hover:bg-[#004975] rounded-t-lg justify-center flex items-center text-white"
              >
                <h1>Escopo 1 (Co2)</h1>
              </button>
              {/* BOTAO 2 */}
              <button
                onClick={() => setVerifica(true)}
                className="xl:w-[23vh] text-[20px] h-[50px] bg-[#1670A8] hover:bg-[#004975] rounded-t-lg justify-center flex items-center text-white"
              >
                <h1>Escopo 2 (Energia)</h1>
              </button>
            </div>
          </div>

          {/* Titulos de inserção */}
          <div className="mt-[0.5vh]">
            <div className="xl:border font-medium h-[6vh] rounded-md w-full border-[#AFB7BA] bg-[#EFF3F6] flex justify-between items-center text-[18px] 2xl:text-[22px] 2xl:h-[7vh]">
              <p className="w-[21%] ml-[5vh] flex justify-start 2xl:">
                Tipo de dado
              </p>
              <p className="w-[15%] flex justify-center">Data</p>
              <p className="w-[15%] flex justify-center">Unidade Medida</p>
              <p className="w-[15%] flex justify-center">Dados</p>
            </div>
          </div>
          {/* Inputs de dados */}

          {verificaClick == false ? (
            <>
              <div className="xl:mt-[2vh] h-[49vh] 2xl:h-[48vh]">
                <InputDados
                  tipo={"Combustão móvel"}
                  medida={"Kg"}
                  data={"25/10/2023"}
                />
                <InputDados
                  tipo={"Combustão estácionaria"}
                  data={"25/10/2023"}
                  medida={"m²"}
                />
              </div>
            </>
          ) : (
            <>
              <div className="xl:mt-[2vh] h-[49vh] 2xl:h-[48vh]">
                <InputDados
                  foto={car}
                  tipo={"Heat, steam, cold"}
                  medida={"MWh"}
                  data={"25/10/2023"}
                />
                <InputDados
                  foto={eficiencia}
                  tipo={"Total electricity consumption"}
                  data={"25/10/2023"}
                  medida={"MWh"}
                />
              </div>
            </>
          )}

          {/* Botão salvar */}
          <div className="w-full flex justify-end">
            <button onClick={()=> console.log('salvar')} className="xl:bg-[#1670A8] hover:bg-[#004975] w-[20%] h-[6vh] text-white text-[20px] rounded-md 2xl:w-[15%] 2xl:h-[7vh]">
              Salvar dados
            </button>
          </div>
        </div>
      </div>
      <hr class="xl:w-[100%] h-px my-4 bg-gray-200 border-[0px] border-black"></hr>

      <Footer />
    </>
  );
}

export default InsercaoDados;
