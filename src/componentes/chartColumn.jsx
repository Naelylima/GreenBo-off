const ChartColumn = ({ h, margem, bg, posicao, empresa, porcentagem, img }) => {
  return (
    <>
      <div className={`flex flex-col justify-end  items-center`}>
        {/* Posição */}
        <div className="">
          <h1 className="xl:text-[5.5vh]">{posicao}</h1>
        </div>
        {/* Bloco azul */}
        <div className={`xl:w-[17vh] hover:-translate-y-1 hover:h-[27vh] hover:scale-110  duration-300 ${bg} ${h} rounded-t-2xl justify-around items-center flex flex-col 2xl:w-[20vh]`}>
          <div className="xl:w-full flex flex-col items-center">
            <h1 className="xl:text-[2.5vh] text-white">{empresa}</h1>
            <p className="xl:text-[2h] text-white">{porcentagem}%</p>
          </div>
          <div className="flex justify-end items-end ">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChartColumn;
