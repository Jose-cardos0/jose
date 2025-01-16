import Image from "next/image";

import Header from "./header";

export default function Home() {
  return (
    <main className="w-screen flex-col items-center justify-center m-auto">
      <div className="max-w-7xl">
        <Header />
      </div>
      <section className="w-full mt-5">
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
                  className="bg-orange-400 px-2 py-1 mr-4  
                 rounded-md hover:scale-105 transition duration-300
                  hover:shadow-2xl hover:shadow-gray-300"
                >
                  <p className="font-light font-Roboto">Hire me | +</p>
                </button>
                <button className="bg-gray-500 px-2 py-1 border-gray-200  rounded-xl hover:scale-105 transition duration-300 hover:shadow-2xl hover:shadow-gray-300">
                  <p className="font-light font-Roboto">Copy Email | +</p>
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-16" src="/logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-5">
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
            </div>
          </div>
          <div
            className="flex items-center justify-between  bg-bg-custom border
           border-border-custom w-1/2 p-10"
          >
            <h2 className="font-extralight font-Roboto text-sm">
              Conheça um pouso mais sobre mim
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
