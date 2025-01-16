export default function Header() {
  return (
    <main className="w-screen ">
      <header className="max-w-7xl m-auto bg-bg-custom rounded-full mt-5 border-2 border-border-custom  ">
        <nav
          className="flex justify-between
         items-center py-4 font-extralight font-Roboto"
        >
          <img className="max-w-10 ml-10" src="/logo.png" alt="" />
          <li className="list-none text-white font-extralight uppercase">
            Sobre
          </li>
          <li className="list-none text-white font-extralight uppercase">
            Portfólio
          </li>
          <li
            className="list-none
           text-white font-extralight uppercase mr-10"
          >
            Meus Projetos
          </li>
        </nav>
      </header>
    </main>
  );
}
