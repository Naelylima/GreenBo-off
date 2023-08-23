import aspas from "../assets/aspas.png";
const BoxCitacao = ({ texto }) => {
  return (
    <>
      <div className="box xl:justify-center items-center w-[500px] flex flex-col h-[215px] shadow-xl shadow-[#A8A6A6] border-black border-[1px] rounded-[15px]">
        <div className="w-[90%] ">
          <img className="xl:h-[15px] w-[15px]" src={aspas} alt="" />
          <p className="xl:text-[17px] w-full italic flex h-[17vh] items-center 2xl:h-[25vh] 2xl:">
            {texto}
          </p>
        </div>
        <div className="w-[90%]">
          <hr className="border-[#006C3A] border-[2px] w-[20%]" />
        </div>
      </div>
    </>
  );
};
export default BoxCitacao;
