function Footer() {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

  return (
    // Footer principal com fundo escuro, texto claro e centralizado
    <footer className="bg-neutral-900 text-neutral-400 py-6 text-center font-inter">
      <div className="container mx-auto px-6">
        {/* Texto de copyright com o ano atual e seu nome */}
        <p className="text-sm md:text-base">
          &copy; {currentYear} Laura Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;