const InputDados = ({ foto, tipo, medida, data }) => {
  return (
    <>
      <div className="xl:h-[9vh] flex items-center 2xl:h-[10vh]">
        <div className="xl:w-full xl:text-[20px] border flex items-center justify-between shadow-md rounded-md  shadow-[#A8A6A6] h-[7vh] border-[#D9D9D9] 2xl:text-[24px] 2xl:h-[8vh]">
          {/* TIPO */}
          <div className="xl:flex h-full ml-[5vh] justify-start items-center w-[21%] ">
            {/* <img className="w-[50px] h-[50px]" src={foto} alt="" /> */}
            <p className="">{tipo}</p>
          </div>
          {/* DATA */}
            <div className="w-[15%] flex justify-center">
                <p className="">{data}</p>
            </div>
          {/* MEDIDA */}
            <div className="w-[15%] flex justify-center">
                <p className="">{medida}</p>
            </div>
          {/* DADOS */}
          <div className="h-full items-center flex w-[15%] justify-center">
            <input type="text" className="bg-[#E6E6E6] focus:bg-[white] text-[17px] p-3 pointer-events-auto h-[80%] w-[10vh] border border-[#CDCACA] rounded-md" />
          </div>
        </div>
      </div>
    </>
  );
};
export default InputDados;
