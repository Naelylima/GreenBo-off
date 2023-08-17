import boschNav from "../assets/barra-nav-Bosch.png";
import logoGreenBo from "../assets/logo-GreenBo.svg";
import chat from "../assets/chat.png";

const NavBar = () => {
  return (
    <>
      <div className="navBar ">

        {/* Barra colorida */}
        <div className="barra">
          <img src={boschNav} className="h-[1vh] w-full" />
        </div>

        {/* Atalhos */}
        <div className="logo flex w-full justify-around mt-[2vh] h-[5vh] items-center">
          <img className="h-[30px]" src={logoGreenBo} />
          <div className="atalhos flex justify-around w-[35vh]">
            <div className="">
              <img src="" alt="" />
              <p>Entre em contato conosco</p>
            </div>
            <p>Login</p>
          </div>
        </div>
      </div>
    
      
    </>
  );
};
export default NavBar;
