
const Timeline = () => {
    const Data = [
        {
            year: 2022,
            title: "The birth of a heroine.",
            description: "I started a comprehensive computer course and discovered my affinity for computing. My curiosity led me to explore front-end development with HTML and CSS for my personal blog on Tumblr."
        },
        {
            year: 2023,
            title: "Bachelor in Information Systems",
            description: "I started my undergraduate degree in Information Systems at PUCPR with a 100% PROUNI scholarship."
        },
        {
            year: 2024,
            title: "FullStack developer at Cheers",
            description: "My first experience in the field was as a member of the system's code maintenance team."
        },
        {
            year: 2024,
            title: "Monitor at PUCPR",
            description: "Class monitor for Database classes at PUCPR University"
        },
        {
            year: 2024,
            title: "Information Systems Academic Center",
            description: "During the founding of our academic center, I was vice-secretary, and I am currently the director of events."
        },
        {
            year: 2025,
            title: "Software Developer at Volvo Group",
            description: "In my current internship, I work with REST APIs using NestJS and microservices."
        }
    ];

    return (
        <div className="p-8 min-h-screen flex items-center justify-center">
            <style>
                {`
                .-container {
                    position: relative;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px 0;
                }
                .-container::after {
                    content: '';
                    position: absolute;
                    width: 4px;
                    background-color: #cbd5e1; 
                    top: 0;
                    bottom: 0;
                    left: 50%;
                    margin-left: -2px;
                    border-radius: 9999px; 
                }

                /* Item da linha do tempo */
                .-item {
                    padding: 10px 0;
                    position: relative;
                    background-color: inherit;
                    width: 50%;
                }

                /* Bolinha do ano */
                .-item .-year {
                    padding: 8px 12px; /* Ajuste para o tamanho da bolinha */
                    position: absolute;
                    width: 70px; /* Largura fixa para a bolinha */
                    height: 70px; /* Altura fixa para a bolinha */
                    background-color: #4f46e5; /* Cor da bolinha (roxo índigo) */
                    color: white;
                    border-radius: 50%;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    font-size: 1.125rem; /* text-lg */
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                .-item .-content {
                    padding: 20px 30px;
                    background-color: white;
                    position: relative;
                    border-radius: 0.75rem; /* rounded-lg */
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }

                /* Posicionamento dos itens (esquerda/direita) */
                .-item:nth-child(odd) {
                    left: 0;
                    padding-right: 90px; /* Espaço para a bolinha */
                }
                .-item:nth-child(even) {
                    left: 50%;
                    padding-left: 90px; /* Espaço para a bolinha */
                }

                /* Posicionamento das bolinhas */
                .-item:nth-child(odd) .-year {
                    right: -35px; /* Metade da largura da bolinha para centralizar */
                }
                .-item:nth-child(even) .-year {
                    left: -35px; /* Metade da largura da bolinha para centralizar */
                }

                /* Seta do balão de conteúdo */
                .-item:nth-child(odd) .-content::after {
                    content: " ";
                    position: absolute;
                    top: 25px;
                    right: -15px;
                    border-width: 8px;
                    border-style: solid;
                    border-color: transparent transparent transparent white;
                }
                .-item:nth-child(even) .-content::after {
                    content: " ";
                    position: absolute;
                    top: 25px;
                    left: -15px;
                    border-width: 8px;
                    border-style: solid;
                    border-color: transparent white transparent transparent;
                }

                @media screen and (max-width: 768px) {
                    .-container::after {
                        left: 20px; /* Move a linha para a esquerda */
                    }
                    .-item {
                        width: 100%;
                        padding-left: 60px; /* Ajusta o padding para a bolinha */
                        padding-right: 20px; /* Adiciona um padding à direita */
                    }
                    .-item:nth-child(odd),
                    .-item:nth-child(even) {
                        left: 0;
                        padding-left: 60px; /* Alinha todos os itens à esquerda */
                        padding-right: 20px;
                    }
                    .-item .-year {
                        left: 0; /* Alinha a bolinha à esquerda */
                        transform: translateX(-50%); /* Centraliza a bolinha na linha */
                        top: 10px; /* Ajusta a posição vertical da bolinha */
                    }
                    .-item:nth-child(odd) .-content::after,
                    .-item:nth-child(even) .-content::after {
                        left: 45px; /* Ajusta a seta do balão */
                        border-color: transparent white transparent transparent;
                    }
                }
                `}
            </style>

            <div className="-container">
                {Data.map((item, index) => (
                    <div key={index} className="-item">
                        <div className="-year">{item.year}</div>
                        <div className="-content">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
