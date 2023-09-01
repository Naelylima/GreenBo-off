import aspas from "../assets/aspas.png";
const BoxCitacao = ({ texto }) => {
  return (
    <>
      <div className="box xl:justify-center items-center w-[60vh] flex flex-col xl:h-[27vh] shadow-xl shadow-[#A8A6A6] border-black border-[1px] rounded-[15px] 2xl:w-[75vh] 2xl:h-[30vh]">
        <div className="w-[90%]  ">
          <img className="xl:h-[15px] w-[15px]" src={aspas} alt="" />
          <p className="xl:text-[2.3vh] w-full italic flex h-[18vh] items-center 2xl:h-[20vh] 2xl:text-[25px]">
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
