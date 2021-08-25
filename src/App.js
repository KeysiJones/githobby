import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faLinkedin,
  faFacebook,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faLinkedin, faCheckSquare, faCoffee);

function App() {
  // axios
  //   .get("https://api.github.com/users/KeysiJones")
  //   .then((res) => console.log(res));
  return (
    <div className="bg-gray-700 h-full pt-8 pb-8">
      <div className="items-center flex flex-col text-center">
        <a href="https://github.com/keysijones">
          <img
            alt="opa"
            className="rounded-full"
            style={{ height: "170px" }}
            src="https://avatars.githubusercontent.com/u/55116367?v=4"
          />
        </a>
        <p className="text-white text-2xl mt-2">Keysi Jones</p>
        <p className="text-white text-xl mt-2">Porto Alegre, Brasil</p>
        <p className="text-white text-sm mt-2">*No GitHub desde 10/09/2019</p>
      </div>
      <div className="text-center my-10">
        <p className="text-xl text-white">Sobre mim</p>
      </div>
      <div className="text-white border-gray-400 rounded-xl w-9/12 text-center mx-auto grid">
        {/* <p className="text-xl">Sobre mim</p> */}
        <p className="text-md">
          Adoro desenvolver software e andar de bicicleta, gosto de pessoas e de
          computadores. Sou fluente em Espanhol e já morei no Chile por 2 anos
          enquanto servia voluntariamente como missionário da{" "}
          <a href="https://lds.org">
            <b>Igreja De Cristo</b>
          </a>
        </p>
      </div>
      <div className="text-center my-10">
        <p className="text-xl text-white">Projetos Desenvolvidos</p>
      </div>
      <div className="justify-items-center text-white border-2 border-gray-400 p-4 rounded-xl w-9/12 text-center mx-auto mt-12 grid">
        <p className="text-xl">Instituto Helper</p>
        <p className="mt-2 text-md">
          Instituto Helper é um site desenvolvido em Flutter para facilitar o
          acesso dos alunos do Instituto Porto Alegre às aulas online. O site
          mostra os cursos disponíveis de acordo com o dia da semana selecionado
          pelo aluno e o leva até a aula que é feita online.
        </p>
        <br />
        <a href="https://instituto-helper.netlify.app/">
          <img
            className="rounded-3xl"
            alt=""
            src="https://keysijones-portfolio.vercel.app/static/media/instituto.74d94b97.png"
          />
        </a>
      </div>
      <div className="justify-items-center text-white border-2 border-gray-400 p-4 rounded-xl w-9/12 text-center mx-auto mt-12 grid">
        <p className="text-xl">English4Developers</p>
        <p className="mt-2 text-md">
          Site criado para divulgar um curso de Inglês voltado para
          desenvolvedores de software. Feito para funcionar especialmente em
          celulares.
        </p>
        <br />
        <a href="https://english4developers.vercel.app/">
          <img
            className="rounded-lg"
            alt=""
            src="https://keysijones-portfolio.vercel.app/static/media/english4developers.d04615e9.png"
          />
        </a>
      </div>
      <div className="justify-items-center text-white border-2 border-gray-400 p-4 rounded-xl w-9/12 text-center mx-auto mt-12 grid">
        <p className="text-xl">Keysi Jones's Blog</p>
        <p className="mt-2 text-md">
          Blog pessoal para registrar conhecimento e histórias da minha vida.
        </p>
        <br />
        <a href="https://keysijones-blog.vercel.app/">
          <img
            className="rounded-lg"
            alt=""
            src="https://keysijones-portfolio.vercel.app/static/media/blog.b66fce36.png"
          />
        </a>
      </div>
      <div className="text-center text-white text-2xl mt-12">
        <p>Fale comigo</p>
      </div>
      <div className="border-2 bg-white border-white p-2 mt-12 text-center flex justify-around rounded-full mx-4">
        <a href="https://www.github.com/keysijones">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/keysijones">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/jonessud/">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://wa.me/5551985236176/?text=Oie">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default App;
