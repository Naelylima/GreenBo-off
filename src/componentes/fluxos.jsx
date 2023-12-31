
const Fluxo = ({cor, numero, texto}) => {
  return (
    <>
     <div className={`xl:h-[25vh] hover:-translate-y-1 hover:h-[27vh] hover:scale-110  duration-300 shadow-xl  shadow-[#A8A6A6] p-2 2xl:h-[25vh] w-[45vh] flex items-center rounded-lg justify-center  ${cor} 2xl:`}>
        <h1 className="xl:text-[60px] 2xl:text-[70px] w-[20%] flex items-center justify-center">{numero}</h1>
        <p className="text-[20px] w-[75%] text-justify 2xl:text-[22px]">{texto}</p>
     </div>
    </>
  );
};
export default Fluxo;
