import GreeBo from "../assets/GreenBo.png";

const Slide = () => {
  return (
    <>
      <div className="xl:h-[87vh] flex mt-5 2xl:h-[90vh]">
        <div className="xl:w-[95%] 2xl:h-full 2xl:w-[60%] bg-cover bg-degrade flex items-center justify-center">
          <h1 className="w-[80%] text-[7vh] font-bold text-white text-center 2xl:text-[9vh]">
            <span>Blockchain para o minitoramento de </span>
            <span className="text-[#86D7A2]">CO2 </span>
            <span>e</span>{" "}
            <span className="text-[#86D7A2]"> Eficiência Energética</span>{" "}
          </h1>
        </div>
        <div className="justify-center flex items-center">
          <img
            src={GreeBo}
            alt=""
            className="xl:w-[50vh] h-[45vh] 2xl:w-[65vh] 2xl:h-[65vh]"
          />
        </div>
      </div>
    </>
  );
};
export default Slide;
