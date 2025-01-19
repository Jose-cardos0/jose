export default function Header() {
  return (
    <header
      className="max-w-7xl w-full bg-bg-custom rounded-full mt-5 border-2 border-border-custom
     flex justify-center jus"
    >
      <nav className="flex justify-between items-center py-4 font-extralight font-Roboto w-full">
        <img
          className="max-w-10 ml-10 cursor-pointer hover:scale-105 transition duration-700"
          src="/logo.png"
          alt=""
        />
        <a href="#sobre" rel="smooth">
          <li className="list-none text-white font-extralight uppercase hover:text-orange-400 hover:font-medium hover:scale-105 transition duration-300 cursor-pointer">
            Sobre
          </li>
        </a>
        <a href="#trabalhos" rel="smooth">
          <li className="list-none text-white font-extralight uppercase hover:text-orange-400 hover:font-medium hover:scale-105 transition duration-300 cursor-pointer">
            Portfólio
          </li>
        </a>
        <a href="#projetos" rel="smooth">
          <li className="list-none text-white font-extralight uppercase mr-10 hover:text-orange-400 hover:font-medium hover:scale-105 transition duration-300 cursor-pointer">
            Meus Projetos
          </li>
        </a>
      </nav>
    </header>
  );
}
