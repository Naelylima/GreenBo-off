import NavBar from "../componentes/nav";
import Footer from "../componentes/footer";
import logoBosch from "../assets/boschLogo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <>
      <div className="items-center content-center">
        <NavBar pagina={"login"} />

        <div className="xl:h-[82vh] 2xl:h-[83vh]  bg-gradient-to-tr from-[#004975] from-0% via-[#1C776C] via-50.52% to-[#37A264] to-100% w-screen  mt-4 flex justify-around items-center">
          <div className="bg-white w-[60vh] h-[60vh] rounded-xl shadow-lg shadow-[rgb(69, 84, 92, 0.40)] flex flex-col items-center">
            <img src={logoBosch} className="w-[30vh] h-[12vh] mt-2" />

            <div className="mt-6">
              <p className="text-2xl text-black mb-2">Usuário:</p>
              <input
                type="text"
                className="rounded-lg border-0 bg-[#DDD] px-3 outline-none w-[40vh] h-[4vh] text-sm text-black"
              />
            </div>

            <div className="mt-6">
              <p className="text-2xl text-black mb-2">Senha:</p>
              <input
                type="password"
                className="rounded-lg border-0 bg-[#DDD] px-3 outline-none w-[40vh] h-[4vh]"
              />
            </div>

            <button className="mt-12  hover:ease-out duration-400 hover:bg-gray-300 w-[20vh] h-[4vh] rounded-lg bg-[#DDD] shadow-md shadow-[rgb(69, 84, 92, 0.40)] text-xl text-black">
              Logar
            </button>
            <a
              onClick={() => navigate("/cadastro")}
              className="h-[6vh] items-center flex hover:cursor-pointer	"
            >
              <span>
                Não tem conta? 
                <span className="text-[#1670A8] font-bold"> Cadastre-se</span>
              </span>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Login;
