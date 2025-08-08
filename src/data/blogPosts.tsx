import { type BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Recomendações de Livros para pensadores profundos",
    excerpt: "Post onde recomendo uma série dos meus livros favoritos para ler.",
    date: "2023-05-15",
    tags: ["Livros"],
    content: (
      <>
        <h2 className="text-xl font-semibold mt-6 mb-3 text-neutral-200">Leitura existencialista</h2>
        <p className="mb-4 text-gray-200">Em vez de focar em enredos tradicionais com um herói e um final feliz, a literatura existencialista frequentemente se concentra em personagens que enfrentam crises, dilemas morais e a necessidade de criar seus próprios valores em um mundo sem respostas fáceis.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-200">1.A metamorfose - Franz Kafka</h2>
        <p className="mb-4 text-gray-200">Gregor não entende por que se transformou, e a narrativa não se preocupa em dar uma explicação. O leitor é jogado no absurdo da situação, assim como o personagem. A vida simplesmente acontece, sem lógica ou propósito.</p>
        
        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-200">2.Kafka à beira-mar - Haruki Murakami</h2>
        <p className="mb-4 text-gray-200">Assim como na filosofia existencialista, o livro de Murakami coloca seus personagens em uma jornada para encontrar um sentido para suas vidas. O jovem Kafka Tamura foge de casa para escapar de uma profecia de Édipo, buscando controle sobre seu próprio destino e criando sua própria identidade, em vez de ser definido por seu pai ou por uma maldição.</p>

        <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-200">3.Crime e Castigo - Fiódor Dostoiévski</h2>
        <p className="mb-4 text-gray-200">O verdadeiro "castigo" de Raskolnikov não vem da polícia, mas de sua própria consciência. A culpa o consome, causando delírios, febre e um profundo isolamento. Essa angústia é a representação da "má-fé" existencial, a tortura de viver uma vida que vai contra a sua própria essência.</p>
      </>
    )
  },
];