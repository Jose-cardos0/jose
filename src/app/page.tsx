import Image from "next/image";

import Header from "./header";

//icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
//backend
import { IoLogoFirebase } from "react-icons/io5";
import { PiFileSqlFill } from "react-icons/pi";
import { DiMongodb } from "react-icons/di";
//redes
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="w-screen flex-col items-center justify-center m-auto">
      <div className="max-w-7xl">
        <Header />
      </div>
      <section className="w-screen mt-5">
        <div
          className="max-w-7xl bg-bg-custom border-2 
        border-border-custom  mx-auto rounded-md "
        >
          <div className="flex items-center justify-between m-10 ">
            <div className="flex-col">
              <p className="font-extralight font-Roboto">
                Programador FullStack
              </p>
              <h1 className="mt-20 font-Roboto font-light text-xl">
                Olá, me chamo José!
              </h1>
              <p className="font-extralight font-Roboto text-sm">
                Sou um programador FullStack <br />e Design gráfico.
              </p>
              <div className="mt-5 ">
                <button
                  className="bg-white px-2 py-1 mr-4  
                 rounded-md hover:scale-105 transition
                  duration-300 
                 "
                >
                  <p
                    className="font-light 
                  font-Roboto text-black"
                  >
                    Hire me | +
                  </p>
                </button>
                <button
                  className="bg-gray-300
                 px-2 py-1 border-gray-200  
                 rounded-md hover:scale-105 transition
                  duration-300 "
                >
                  <p className="font-light font-Roboto text-black">
                    Copy Email | +
                  </p>
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-16" src="/logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen mt-5">
        <div
          className="max-w-7xl bg-Forground 
          mx-auto rounded-md flex gap-4 "
        >
          <div
            className="flex items-center justify-between  bg-bg-custom border
           border-border-custom w-1/2 p-10  "
          >
            <h2 className="font-extralight font-Roboto text-sm">
              Trabalhos recentes
            </h2>
            <div className="flex-col">
              <div className="font-extralight font-Roboto text-sm border-l mr-5 relative ">
                <p className="ml-4">Sertão Transportes</p>
                <p className="ml-4 text-xs italic">
                  Desenvolvimento web, site institucional com banco de dados
                  back-end
                </p>
                <div className="ml-4">
                  <button className="">
                    <p
                      className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                    >
                      • Visualizar
                    </p>
                  </button>
                </div>
                <div className="absolute bg-white p-1 rounded-full -left-1"></div>
              </div>
              <div
                className="font-extralight font-Roboto text-sm 
              border-l mr-5 relative mt-5 "
              >
                <p className="ml-4">Santuário da Divina Misericórdia</p>
                <p className="ml-4 text-xs italic">
                  Desenvolvimento web, site institucional com conexão rest api
                </p>
                <div className="ml-4">
                  <button className="">
                    <p
                      className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                    >
                      • Visualizar
                    </p>
                  </button>
                </div>
                <div className="absolute bg-white p-1 rounded-full -left-1"></div>
              </div>
              <div
                className="font-extralight font-Roboto text-sm 
              border-l mr-5 relative mt-5 "
              >
                <p className="ml-4">Natville</p>
                <p className="ml-4 text-xs italic">
                  Desenvolvimento web, site institucional com conexão rest api
                </p>
                <div className="ml-4">
                  <button className="">
                    <p
                      className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                    >
                      • Visualizar
                    </p>
                  </button>
                </div>
                <div className="absolute bg-white p-1 rounded-full -left-1"></div>
              </div>
              <div
                className="font-extralight font-Roboto text-sm 
              border-l mr-5 relative mt-5 "
              >
                <p className="ml-4">L2 Skelth</p>
                <p className="ml-4 text-xs italic">
                  Desenvolvimento web, brand page institucional
                </p>
                <div className="ml-4">
                  <button className="">
                    <a
                      href="https://skelth.org/novo/"
                      target="_blank"
                      className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                    >
                      • Visualizar
                    </a>
                  </button>
                </div>
                <div className="absolute bg-white p-1 rounded-full -left-1"></div>
              </div>
              <div
                className="font-extralight font-Roboto text-sm 
              border-l mr-5 relative mt-5 "
              >
                <p className="ml-4">API Rest</p>
                <p className="ml-4 text-xs italic">
                  Desenvolvimento web, api rest node js para produtos
                </p>
                <div className="ml-4">
                  <button className="">
                    <a
                      href="https://skelth.org/novo/"
                      target="_blank"
                      className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                    >
                      • Visualizar
                    </a>
                  </button>
                </div>
                <div className="absolute bg-white p-1 rounded-full -left-1"></div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center   bg-bg-custom border
           border-border-custom w-1/2 p-10 flex-col"
          >
            <h2 className="font-extralight font-Roboto text-sm mb-2 text-center">
              Conheça um pouso mais sobre mim
            </h2>
            <p className="font-extralight font-Roboto text-sm">
              Um jovem nordestino cheio de paixão pelo universo digital, que
              combina seu talento como programador com um grande amor pela
              cultura geek. Sua habilidade em unir criatividade e tecnologia
              reflete o entusiasmo que você tem pelo que faz! 🚀
            </p>
            <div
              className="relative w-full 
            flex items-center justify-center   "
            >
              <div className="-ml-14 overflow-hidden">
                <iframe
                  className=" mt-6  ml-14 shadow-2xl shadow-blue-700 overflow-hidden    "
                  src="https://prototype-game-space.vercel.app/"
                  width="85%"
                  height="200px"
                  title="game jsdeveloper"
                ></iframe>
                <a
                  href="https://prototype-game-space.vercel.app/"
                  target="_blank"
                >
                  <img
                    src="/notebook.png"
                    alt=""
                    className="absolute 
               max-w-md top-0 mt-4 
                  hover:scale-105 transition duration-500 -ml-4 overflow-hidden "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen mt-5">
        <div
          className="max-w-7xl bg-Forground 
          mx-auto rounded-md flex gap-4 "
        >
          <div
            className="flex items-center justify-between  bg-bg-custom border
           border-border-custom w-full p-10 flex-col  "
          >
            <h2
              className="text-start w-full 
            font-extralight font-Roboto text-sm mb-5 border-b "
            >
              Tecnologias dominadas
            </h2>
            <h2 className="text-start w-full font-extralight font-Roboto text-sm mb-2">
              • Front-end
            </h2>
            <div className="flex items-start gap-2 w-full">
              <FaHtml5
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <FaCss3Alt
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <IoLogoJavascript
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <FaNodeJs
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <SiTypescript
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <RiNextjsFill
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <RiTailwindCssFill
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
            </div>

            <h2
              className="text-start w-full font-extralight
             font-Roboto text-sm mb-2 mt-5"
            >
              • Back-end
            </h2>
            <div className="flex items-start items-center w-full">
              <IoLogoFirebase
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <PiFileSqlFill
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <DiMongodb
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition duration-500"
              />
              <h1 className="font-bold text-3xl">C#</h1>
              <FaNodeJs
                size={40}
                color="#ffff"
                className=" hover:scale-105 transition 
                duration-500 ml-2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen mt-5">
        <div
          className="max-w-7xl bg-Forground 
          mx-auto rounded-md flex gap-4 flex-col "
        >
          <div
            className="flex items-center justify-between  bg-bg-custom border
           border-border-custom w-full p-10   "
          >
            <div className="flex gap-10">
              <video
                src="/videoCelular.mp4"
                className="max-w-60 rounded-3xl  "
                autoPlay
                muted
              ></video>
              <div>
                <h2
                  className="font-extralight font-Roboto
             text-sm  w-full mb-5"
                >
                  • Meus projetos
                </h2>
                {/*primeiro */}
                <div className="w-full flex-col items-end mb-5 ">
                  <div className="font-extralight font-Roboto text-sm border-l mr-5 relative ">
                    <p className="ml-4">Agendamento online</p>
                    <p className="ml-4 text-xs italic">
                      Desenvolvimento web, aplicativo web, back-end em firebase,
                      comunicação com api whastweb.
                    </p>
                    <div className="ml-4">
                      <button className="">
                        <p
                          className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                        >
                          • Visualizar
                        </p>
                      </button>
                    </div>
                    <div className="absolute bg-white p-1 rounded-full -left-1"></div>
                  </div>
                </div>
                {/*segundo */}
                <div className="w-full flex-col items-end ">
                  <div className="font-extralight font-Roboto text-sm border-l mr-5 relative mb-5">
                    <p className="ml-4">Web Carros</p>
                    <p className="ml-4 text-xs italic">
                      Desenvolvimento web, back-end em firebase, comunicação com
                      api whastweb, interface de usuário e administrador.
                    </p>
                    <div className="ml-4">
                      <button className="">
                        <p
                          className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                        >
                          • Visualizar
                        </p>
                      </button>
                    </div>
                    <div className="absolute bg-white p-1 rounded-full -left-1"></div>
                  </div>
                </div>
                {/*terceiro */}
                <div className="w-full flex-col items-end ">
                  <div className="font-extralight font-Roboto text-sm border-l mr-5 relative ">
                    <p className="ml-4">Controle de Almoxarifado</p>
                    <p className="ml-4 text-xs italic">
                      Desenvolvimento web, back-end em nodejs, relatório em
                      excel, interface de usuário, administrador, funcionário,
                      produto, fornecedor, estoque, entrada, saída, estoque
                      atual.
                    </p>
                    <div className="ml-4">
                      <button className="">
                        <p
                          className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                        >
                          • Visualizar
                        </p>
                      </button>
                    </div>
                    <div className="absolute bg-white p-1 rounded-full -left-1"></div>
                  </div>
                </div>
                {/*quarto */}
                <div className="w-full flex-col items-end ">
                  <div className="font-extralight font-Roboto text-sm border-l mr-5 relative mt-5 ">
                    <p className="ml-4">Mine-Blog JS Developer</p>
                    <p className="ml-4 text-xs italic">
                      Desenvolvimento web, back-end em firebase, interface de
                      usuário, administrador, post, editar post, cadastro e
                      recuperação de dados.
                    </p>
                    <div className="ml-4">
                      <button className="">
                        <p
                          className="text-xs hover:scale-105 duration-300 
                    transition hover:text-orange-400 hover:font-bold"
                        >
                          • Visualizar
                        </p>
                      </button>
                    </div>
                    <div className="absolute bg-white p-1 rounded-full -left-1"></div>
                  </div>
                </div>
                {/*quarto */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen mt-5">
        <div
          className="max-w-7xl bg-Forground 
          mx-auto rounded-md flex gap-4 flex-col "
        >
          <div
            className="flex items-start justify-between  bg-bg-custom border
           border-border-custom  p-10 flex-col   "
          >
            <h1 className="font-extralight font-Roboto">• Mídias sociais</h1>
            <div className="flex gap-3 mt-5">
              <a href="" target="_blanck">
                <FaInstagramSquare
                  color="#ffff"
                  size={40}
                  className="hover:scale-105 transition duration-500"
                />
              </a>
              <a href="" target="_blanck">
                <FaWhatsappSquare
                  color="#ffff"
                  size={40}
                  className="hover:scale-105 transition duration-500"
                />
              </a>
              <a href="" target="_blanck">
                <FaLinkedin
                  color="#ffff"
                  size={40}
                  className="hover:scale-105 transition duration-500"
                />
              </a>
              <a href="#" target="_blanck">
                <FaGithub
                  color="#ffff"
                  size={40}
                  className="hover:scale-105 transition duration-500"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
