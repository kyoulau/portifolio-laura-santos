function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-32 w-full border-t border-ash pt-8 pb-4 text-center">
      <p className="font-retro text-[11px] tracking-[0.2em] text-mist/70 uppercase">
        © {currentYear} Laura Santos — todos os direitos reservados
      </p>
    </footer>
  );
}

export default Footer;
