import greenBo from    '../assets/GreenBo.png'
import seta from  '../assets/arrow-up.png'
import moeda from '../assets/moedaP&B.png'
const CardMoeda = () => {
    return (
      <>
      
      <div className="xl:pt-3">
        <div className="xl:w-[95%] h-[85px] flex items-center justify-around pl-3 pr-3 border shadow-[#A8A6A6] shadow-md rounded-xl border-[#DADADA]">
            {/* GreenBo Coin ICONE*/}
            <div className="bola xl:bg-[#1670A8] w-[50px] flex items-center justify-center h-[50px] rounded-full">
                <img src={greenBo} className="xl:w-[40px] h-[40px]" alt="" />
            </div>
            {/* AREA */}
            <div className="area xl:">
                <p>PT</p>
            </div>
            {/* VARIAÇÃO DA MOEDA E ICON */}
            <div className="volatil flex items-center justify-between w-[20%]">
                    <img src={seta} className='w-[18px] h-[20px]' alt="" />
                    <p className='variacao xl:text-[#DC3546] font-semibold'>+ 168.001% </p>
            </div>
            {/* ICON MOEDA E VALOR */}
            <div className="flex w-[15%] justify-between">
                <img src={moeda} className='w-[30px] h-[30px]' alt="" />
                <p className='valor'>- 0,89</p>
            </div>
            {/* DATA E TAVEZ HORA */}
            <div className="">
                <p>25/10/2003</p>
            </div>

        </div>

      </div>
      </>
    );
  };
  export default CardMoeda;
  