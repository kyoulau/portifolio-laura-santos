function Footer() {
  const currentYear = new Date().getFullYear();

  return (
        <footer className=" py-4 text-center text-white text-sm border-t">
          <p>© {currentYear} Laura Santos. Todos os direitos reservados.</p>
        </footer>
  );
}

export default Footer;