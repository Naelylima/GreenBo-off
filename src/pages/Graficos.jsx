import CadInformacoes from "../componentes/cardInformacoes";
import Chart from "../componentes/graficoTeste";
import NavBar from "../componentes/nav";
import tomada from "../assets/tomada.png";
import moeda from "../assets/moeda.png";
import co2 from "../assets/co2.png";
import ChartComponent from "../componentes/graficoTeste";
import CardMoeda from "../componentes/cardMoeda";
import Footer from "../componentes/footer";

function Graficos() {
  return (
    <>
      <NavBar pagina={"login"} />
      <div className="grid ml-[10vh] mr-[10vh]">
        <hr class="xl:w-[100%] h-px my-4 bg-gray-200 border-[0px] border-black"></hr>
        {/* Card */}
        <div className="flex justify-between">
          <CadInformacoes
            valor={"$ 200,80"}
            legenda={"GreenCoin"}
            img={moeda}
          />
          <CadInformacoes
            valor={"24 KW/h"}
            legenda={"Variação do consumo de energia"}
            img={tomada}
          />
          <CadInformacoes
            valor={"20 t"}
            legenda={"Variação da emissão de CO2"}
            img={co2}
          />
        </div>
        {/* Chart */}
        <div className="xl:flex h-[50vh] items-center justify-between">
          <div className="xl:w-[49%] h-[40vh] 2xl:w-[45%]">
            <ChartComponent />
          </div>
          <div className="w-[49%] h-[40vh]  2xl:">
            <ChartComponent />
          </div>
        </div>
        {/* Buniss */}
        <div className="w-full flex justify-between">
          <div className="w-[50%]">
            <div className="textos ">
              <h1 className="text-[38px]">Business Ranking</h1>
              <p className="text-[20px]">Last month</p>
            </div>
            <div className="cards mt-3 overflow-y-auto max-h-[300px] flex flex-col scroll-smooth">
              <CardMoeda />
              <CardMoeda />
              <CardMoeda />
              <CardMoeda />
            </div>
          </div>
          <div className="xl:w-[50%] 2xl:w-[49%]">
            <ChartComponent />
          </div>
        </div>
      </div>
      <hr class="w-[100%] mt-4 h-px my-1 bg-gray-200 border-[0px] border-black"></hr>
      <Footer />
    </>
  );
}

export default Graficos;
