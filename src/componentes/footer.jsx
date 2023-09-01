import greenBo from "../assets/greenBo-vazado.png";
const Footer = () => {
  return (
    <>
      <div className="xl:w-[135vh] 2xl:w-[190vh] flex items-center justify-between">
        <div className="h-[7vh] w-[65vh] flex items-center justify-around">
          <p className="text-lg">
            © Robert Bosch Ltda. 2023, todos os direitos reservados
          </p>
        </div>

        <img src={greenBo} className="w-[5vh] h-[5vh]" />
      </div>
    </>
  );
};
export default Footer;
