import NavBar from "../componentes/nav";
import Footer from "../componentes/footer";
import logoBosch from "../assets/boschLogo.png";
import { useNavigate } from "react-router-dom";
import CadInformacoes from "../componentes/cardInformacoes";
import GraficoRanking from "../componentes/graficoRanking";
import ChartColumn from "../componentes/chartColumn";
import CadInformacoesRanking from "../componentes/cardInformRanking";
import trofeu from "../assets/trofeu.png";
import medalha from "../assets/medalha.png";

function Ranking() {
  let navigate = useNavigate();
  return (
    <>
      <div className="items-center content-center">
        <NavBar pagina={"login"} />
        <div className="grid ml-[10vh] mr-[10vh] ">
          <hr class="xl:w-[100%] h-px my-5 bg-gray-200 border-[0px] border-black"></hr>

          {/* Titulo */}
          {/* <div className="h-[10vh]">
            <h1 className="xl:text-[4vh] 2xl:text-[5vh]">Ranking</h1>
          </div> */}

          {/* Cards */}
          <div className="xl:flex justify-between h-[18vh] 2xl:">
          <CadInformacoesRanking
            valor={"$ 200,80"}
            legenda={"GreenCoin"}
          />
          <CadInformacoesRanking
            valor={"24 KW/h"}
            legenda={"Variação do consumo de energia"}
          />
          <CadInformacoesRanking
            valor={"20 t"}
            legenda={"Variação da emissão de CO2"}
          />
          
        </div>
          {/* Ranking column */}
          <div className="flex justify-between items-end ">
            <div className="xl:w-[55%] p-5 2xl:w-[50%] rounded-[15px] border-[#DADADA] shadow-md shadow-[#A8A6A6] border ">
              <GraficoRanking />
            </div>
            <div className="w-[40%] flex items-end content-end justify-between 2xl:w-[40%]">
              <ChartColumn
                h={"xl:h-[48vh] 2xl:h-[47vh]"}
                bg={"bg-[#007BC0]"}
                posicao={"2nd"}
                empresa={"PS"}
                porcentagem={"18,4"}
                img={medalha}
              />
              <ChartColumn
                h={"xl:h-[58vh] 2xl:h-[60vh]"}
                bg={"bg-[#005587]"}
                posicao={"1st"}
                empresa={"ED"}
                porcentagem={"22,4"}
                img={trofeu}
              />
              <ChartColumn
                h={"xl:h-[40vh] 2xl:h-[40vh]"}
                bg={"bg-[#007BC0]"}
                posicao={"3rd"}
                empresa={"HSE"}
                porcentagem={"18,2"}
                img={medalha}
              />
            </div>
            {/* Grafico do ranking */}
          </div>
        </div>
        <hr class="xl:w-[100%] h-px my-4 bg-gray-200 border-[0px] border-black"></hr>
        <Footer />
      </div>
    </>
  );
}

export default Ranking;
