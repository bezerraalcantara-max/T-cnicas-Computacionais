const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No primeiro contato com a IA, você sentiu um certo receio sobre o impacto e o realismo dessa nova tecnologia.",
                    "Ficou preocupado com a velocidade dos avanços tecnológicos e como eles mudam o mundo tão rápido."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "De imediato, você ficou muito empolgado com as infinitas possibilidades de criação e aprendizado que a IA oferece.",
                    "Enxergou a novidade como uma oportunidade incrível de evolução para a sociedade e para os estudos."
                ]
            }           
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao: [
                    "Na hora de fazer os deveres, preferiu usar a IA como uma assistente de estudos para simplificar pesquisas complexas.",
                    "Decidiu economizar tempo e focar na compreensão rápida dos dados usando ferramentas inteligentes."
                ]
            },
            {
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: [
                    "Para produzir o trabalho escolar, você escolheu valorizar o método tradicional de debate com colegas e a escrita totalmente autoral.",
                    "Preferiu confiar no seu próprio repertório e nas discussões em grupo para construir o conhecimento."
                ]
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA afetará o mercado de trabalho. O que você defende?",
        alternativas: [
            {
                texto: "A IA vai tirar o emprego de muitas pessoas e gerar desemprego em massa.",
                afirmacao: [
                    "Durante as discussões na sala, defendeu que precisamos ter cuidado para que a automação não prejudique os trabalhadores humanos.",
                    "Mostrou grande sensibilidade social ao alertar sobre os riscos de substituição da mão de obra por máquinas."
                ]
            },
            {
                texto: "A IA vai criar novas profissões e oportunidades que ainda nem existem.",
                afirmacao: [
                    "No debate com a turma, mostrou uma visão otimista de que a tecnologia vai transformar o mercado e abrir novas carreiras.",
                    "Defendeu que a inovação sempre força a humanidade a evoluir e aprender novas habilidades profissionais."
                ]
            }
        ]
    },
    {
        enunciado: "Para ilustrar o projeto, a professora pediu para criar uma imagem que representasse o futuro da tecnologia. Como você decidiu criar essa arte?",
        alternativas: [
            {
                texto: "Usando uma IA geradora de imagens para criar um cenário futurista em poucos segundos.",
                afirmacao: [
                    "Na parte visual, decidiu explorar o potencial das ferramentas geradoras para dar vida a conceitos complexos de forma rápida.",
                    "Aproveitou a tecnologia para alcançar um resultado visual impressionante sem precisar dominar técnicas de desenho."
                ]
            },
            {
                texto: "Desenhando ou editando manualmente para expressar sua própria criatividade.",
                afirmacao: [
                    "Fez questão de manter o foco na habilidade artística manual, dedicando seu tempo para produzir uma arte 100% autoral.",
                    "Valorizou o esforço próprio e o toque humano na criação, expressando sua identidade através do traço manual."
                ]
            }
        ]
    },
    {
        enunciado: "No fim do bimestre, você precisa deixar uma conclusão no mural da escola sobre o papel da IA no nosso dia a dia. Qual ideia você escolhe resumir?",
        alternativas: [
            {
                texto: "A IA deve ser usada com moderação e regulada para não perdermos nosso pensamento crítico.",
                afirmacao: [
                    "Por fim, concluiu que a IA deve ser usada com limites claros para que o ser humano não perca sua capacidade crítica.",
                    "Encerrou o projeto alertando que a tecnologia é apenas uma ferramenta e o controle deve continuar sempre conosco."
                ]
            },
            {
                texto: "A IA veio para revolucionar o mundo e devemos aprender a usá-la ao máximo.",
                afirmacao: [
                    "Por fim, encerrou a atividade destacando que abraçar a inovação tecnológica é o melhor caminho para a evolução da sociedade.",
                    "Concluiu de forma inspiradora, incentivando todos a dominarem as novas tecnologias em vez de temê-las."
                ]
            }
        ]
    }
];


let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
historiaFinal += afirmacoes + “ “;
atual++;
mostraPergunta();
}

mostraPergunta();

function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}