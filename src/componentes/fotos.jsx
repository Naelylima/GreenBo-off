
const Foto = ({ nome_area, area, foto }) => {
    return (
        < >

            <div className="xl:w-[200px] h-[200px] flex flex-col items-center rounded-[100%] border-[1px] border-black">
                <img src={foto} alt="" />
                <h1>{nome_area}</h1>
                <h1>{area}</h1>
            </div>
        </>
    );
};
export default Foto;