import "./App.css";
import axios from "axios";

function App() {
  axios
    .get("https://api.github.com/users/KeysiJones")
    .then((res) => console.log(res));

  return (
    <div className="bg-gray-700 h-full p-6">
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
      <div className="text-white border-2 border-gray-400 p-4 rounded-xl w-9/12 text-center mx-auto mt-12 grid">
        <p className="text-xl">About me</p>
        <p className="mt-2 text-md">
          Java Backend Software Engineer Passionate about technology, especially
          programming. I like to code, to ride a bike, to be with my family...
          and etc..
        </p>
      </div>
      <div className="text-white border-2 border-gray-400 p-4 rounded-xl w-9/12 text-center mx-auto mt-12 grid">
        <p className="text-xl">About me</p>
        <p className="mt-2 text-md">
          Java Backend Software Engineer Passionate about technology, especially
          programming. I like to code, to ride a bike, to be with my family...
          and etc..
        </p>
      </div>
    </div>
  );
}

export default App;
