import boschNav from "../assets/barra-nav-Bosch.png";
import logoGreenBo from "../assets/logo-GreenBo.svg";
import chat from "../assets/chat.png";
import Login from "../pages/login";
import { useNavigate } from "react-router-dom";

const NavBar = ({ pagina }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className="navBar ">
        {/* Barra colorida */}
        <div className="barra">
          <img src={boschNav} className="h-[1vh] w-full" />
        </div>

        {/* Atalhos */}
        <div className="logo flex justify-between mt-[2vh] h-[5vh] ml-[10vh] items-center">
          <img className="h-[4vh]" src={logoGreenBo} />
          {pagina == "cadastro" || pagina == "login" ? (
            <>
              <div className="atalhos xl:flex justify-around w-[40vh] mr-[10vh] 2xl:text-[20px] ">
                <p className="text-black">Entre em contato conosco</p>
                <a
                  onClick={() => navigate("/")}
                  className=" text-black hover:cursor-pointer"
                >
                  Home
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="atalhos xl:flex justify-around w-[35vh] mr-[10vh] 2xl:text-[20px]">
                <div className="">
                  <img src="" alt="" />
                  <a href="">Entre em contato conosco</a>
                </div>
                <a onClick={() => navigate("/login")} className="hover:cursor-pointer">Login</a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default NavBar;
