import Image from "next/image";

export default function Header() {
  return (
    <header
      className="max-w-7xl w-full bg-bg-custom rounded-full mt-5 border-2 border-border-custom
     flex justify-center jus"
    >
      <nav className="flex justify-between items-center py-4 font-extralight font-Roboto w-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="max-w-10 ml-10 cursor-pointer hover:scale-105 transition duration-700 max-md:ml-6"
        />
        {/* <img
          className="max-w-10 ml-10 cursor-pointer hover:scale-105 transition duration-700 max-md:ml-6"
          src="/logo.png"
          alt=""
        /> */}
        <a href="#sobre" rel="smooth">
          <li className="list-none text-white font-extralight uppercase hover:text-orange-400 hover:font-medium hover:scale-105 transition duration-300 cursor-pointer max-md:text-sm">
            Sobre
          </li>
        </a>
        <a href="#trabalhos" rel="smooth">
          <li className="list-none text-white font-extralight uppercase hover:text-orange-400 hover:font-medium hover:scale-105 transition duration-300 cursor-pointer max-md:text-sm">
            Portfólio
          </li>
        </a>
        <a href="#projetos" rel="smooth">
          <li className="list-none text-white font-extralight uppercase mr-10 hover:text-orange-400 hover:font-medium hover:scale-105 transition duration-300 cursor-pointer max-md:text-sm">
            Meus Projetos
          </li>
        </a>
      </nav>
    </header>
  );
}
