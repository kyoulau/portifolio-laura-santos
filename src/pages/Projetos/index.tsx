function Projetos() {
  return (
    <div className="bg-neutral-800 min-h-screen font-inter">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true" 
      />

      <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center justify-start max-w-7xl mx-auto" >
        
        <div
          className="relative transition-transform duration-300 hover:scale-105 m-2.5 p-8"
        >
        </div>

        <div className="text-white text-center md:text-left">
          <h1 className="text-2xl font-serif font-bold mb-4 text-white underline">Personal projects & publications</h1>
          

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a 
              href="https://api-python-dev-ops-392622763463.southamerica-east1.run.app/docs"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  API where I apply all DevOps culture practices. 
                </p>
              </a>
              <br />
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://github.com/kyoulau/node-rest"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  House reservation - API 
                </p>
              </a>
          </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://ponderalegal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  Pondera Legal - Law Game website
                </p>
              </a>
          </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://www.youtube.com/watch?v=sREDC9PIkmU&t=52s"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  PetMania 
                </p>
              </a>
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://github.com/kyoulau/Visual-Novel---Lalitha"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  Coração Urbano - python Game. 
                </p>
              </a>
          </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://github.com/kyoulau/Livraria-Cultura/blob/main/src/app/app.config.server.ts"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  Livraria Cultura
                </p>
              </a>
          </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://www.linkedin.com/posts/laura-santos-costa_ol%C3%A1-rede-querida-aqui-estou-eu-mais-uma-activity-7317631019073851392-SVCB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADib-YEBr93dI0g2sWZvzBxpo2xcb-skepc"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  Version Control with Git & GitHub
                </p>
              </a>
          </div>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a 
              href="https://medium.com/@laucosan05/estrutura-de-dados-com-pilhas-e-filas-em-java-6cbe30b68b78"
              target="_blank"
              rel="noopener noreferrer">
                <p className="text-white hover:text-gray-400">
                  Estrutura de dados com pilhas e filas
                </p>
              </a>
          </div>
        </div>      
      </div>
      
    </div>
  );
}

export default Projetos;
