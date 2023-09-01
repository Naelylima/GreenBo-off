import NavBar from "../componentes/nav";
import Footer from "../componentes/footer";
import logoBosch from "../assets/boschLogo.png";
import { useNavigate } from "react-router-dom";
import InputDados from "../componentes/inputDados";
import car from "../assets/transporter-car-front.svg";
import eficiencia from "../assets/efficiency.svg";

function RegistroHistorico() {
  let navigate = useNavigate();
  return (
    <>
      <div className="items-center content-center">
        <NavBar pagina={"login"} />

        {/* INICIO */}
        <div className="grid ml-[10vh] mr-[10vh]">
          <hr class="xl:w-[100%] h-px my-5 bg-gray-200 border-[0px] border-black"></hr>
          <div className="xl:flex w-full h-[10vh]  items-center justify-between ">
            <h1 className="xl:text-[4vh] w-[40%] 2xl:text-[5vh] 2xl:">
              Históricos de formulários
            </h1>

            {/* Escopos 1 e 2 */}
            <div className="xl:flex justify-between w-[35%] 2xl:w-[32%]">
              <div className="">
                <input
                  type="search"
                  placeholder="Buscar Formulário"
                  className="xl:h-[6vh] w-[20vh] outline-none border p-4 rounded-md border-[#BCBFC0] 2xl:h-[7vh] 2xl:w-[27vh] "
                />
              </div>
              <div className="">
                <button placeholder="" className="xl:h-[6vh] rounded-md w-[20vh] hover:bg-[#004975] text-white bg-[#00629A] text-[19px] 2xl:h-[7vh] 2xl:w-[27vh]">Novo formulário</button>
              </div>
            </div>
          </div>
          <div className="xl:flex justify-end h-[5vh]">
            <p className="xl:text-[#838586] text-[20px]">* Os dados são atualizados a cada 1 mês</p>
          </div>

          {/* Titulos de inserção */}
          <div className="mt-[0.5vh]">
            <div className="xl:border font-medium h-[6vh] rounded-md w-full border-[#AFB7BA] bg-[#EFF3F6] flex justify-between items-center text-[18px] 2xl:text-[22px] 2xl:h-[7vh]">
              <p className="w-[20%] ml-[5vh] flex justify-start 2xl:">
                Tipo de dado
              </p>
              <p className="w-[15%] flex justify-center">Última atualização</p>
              <p className="w-[15%] flex justify-center">Unidade Medida</p>
              <p className="w-[15%] flex justify-center">Dados</p>
            </div>
          </div>

          {/* Inputs de dados */}
          <div className="xl:mt-[2vh] h-[52vh] 2xl:h-[50vh]">
            <InputDados
              foto={car}
              tipo={"Escopo 1"}
              medida={"Kg"}
              data={"25/10/2023"}
            />
            <InputDados
              foto={eficiencia}
              tipo={"Escopo 2"}
              data={"25/10/2023"}
              medida={"m²"}
            />
            <InputDados
              foto={eficiencia}
              tipo={"Escopo 2"}
              data={"25/10/2023"}
              medida={"m²"}
            />
            <InputDados
              foto={eficiencia}
              tipo={"Escopo 3"}
              data={"25/10/2023"}
              medida={"m²"}
            />
          </div>
          {/* Botão salvar */}
          <div className="w-full flex justify-end">
            
          </div>
        </div>
      </div>
      <hr class="xl:w-[100%] h-px my-4 bg-gray-200 border-[0px] border-black"></hr>

      <Footer />
    </>
  );
}

export default RegistroHistorico;
