import tomada from '../assets/tomada.png'
const CadInformacoes = ({valor, legenda, img}) => {
  return (
    <div className="xl:w-[38vh] h-[13vh] border border-[#DADADA] shadow-md flex items-center justify-evenly shadow-[#A8A6A6] rounded-xl 2xl:h-[15vh] 2xl:w-[50vh]">
        <div className="xl:w-[70px] h-[70px] rounded-full flex justify-center items-center bg-[#1670A8] 2xl:w-[80px] 2xl:h-[80px]">
            <img src={img} className='xl:w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]' alt="" />
        </div>
        <div className="flex items-center flex-col justify-center">
            <h1 className='xl:text-[40px] font-medium 2xl:text-[50px]'>{valor}</h1>
            <p className='xl:text-[18px] 2xl:text-[20px]'>{legenda}</p>
        </div>
    </div>
  );
};
export default CadInformacoes;
