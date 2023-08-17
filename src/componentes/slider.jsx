import GreeBo from "../assets/GreenBo.png";

const Slide = () => {
  return (
    <>
      <div className="h-[70vh] flex mt-5">
        <div className="h-full w-[60%] bg-cover bg-degrade flex items-center justify-center">
          <h1 className="w-[80%] text-[7vh] font-bold text-white text-center"> <span>Blockchain para o minitoramento de </span><span className="text-[#86D7A2]">CO2 </span><span>e</span> <span  className="text-[#86D7A2]"> Eficiência Energética</span> </h1>
        </div>
        <div className="w-[40%] justify-center flex items-center">
          <img src={GreeBo} alt="" className="w-[50vh] h-[50vh]" />
        </div>
      </div>
    </>
  );
};
export default Slide;
