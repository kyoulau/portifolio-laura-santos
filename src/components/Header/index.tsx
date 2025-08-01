import SubtleBorderLink from "../SubtleBorderLink"

function Header() {
  return (
    <header className="bg-gray-900 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center">
        <div className="bg-neutral-700 p-2 rounded-full shadow-inner">
          <div className="flex items-center space-x-6">

            <SubtleBorderLink to="/">Início</SubtleBorderLink>
            <SubtleBorderLink to="/sobre">Sobre Mim</SubtleBorderLink>
            <SubtleBorderLink to="/projetos-bala">Projetos</SubtleBorderLink>
            <SubtleBorderLink to="/contato">Contato</SubtleBorderLink>
            
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header