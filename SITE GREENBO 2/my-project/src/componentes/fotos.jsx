const Foto = ({ nome_area: nome, area, foto }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className={`xl:w-[25vh] h-[25vh] flex flex-col items-center rounded-[100%]  ${foto} bg-cover`}
        ></div>

        <h1 className="text-[25px] mt-4">{nome}</h1>
        <h1 className="text-[20px]">{area}</h1>
      </div>
    </>
  );
};
export default Foto;
