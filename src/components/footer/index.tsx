function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400 py-6 text-center font-inter">
      <div className="container mx-auto px-6">
        <p className="text-sm md:text-base">
          &copy; {currentYear} Laura Santos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;