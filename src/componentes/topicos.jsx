const Topicos = ({img,titulo, texto}) => {
    return (
        <>
            <div className=" w-[35vh] flex items-center ">
                <img className='h-[70px] w-[70px] mr-[1vh]' src={img} alt="" />
                <div className="text-justify">
                    <h1 className='text-[16px] font-bold'>{titulo}</h1>
                    <p>{texto}</p>
                </div>
            </div>
        </>
    )
}
export default Topicos;