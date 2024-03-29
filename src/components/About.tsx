import getCurrentAge from '../utils/getCurrentAge';

export default function About() {
  const currentAge = getCurrentAge(new Date(1997, 1, 22));

  return (
    <section
      id="about"
      className="min-h-screen py-16 bg-white text-zinc-800 flex flex-col items-center gap-8"
    >
      <h1 className="flex flex-col text-center items-center text-4xl">
        Sobre mim
      </h1>
      <div className="px-4 text-justify max-w-screen-sm flex flex-col gap-4">
        <p>
          Brasileiro, natural de Nova Friburgo, cidade da região serrana do
          estado do Rio de Janeiro. Sou casado e tenho
          <span>{` ${currentAge} anos.`}</span>
        </p>
        <p>
          Cresci em contato com jogos eletrônicos e desde cedo tinha vontade de
          aprender a fazer os meus próprios. Quando tive a oportunidade de
          estudar sobre programação na faculdade de Engenharia Mecânica e fazer
          alguns programas bem simples para apresentar trabalhos, descobri o
          potencial que essa área tem e me encantei. Sou apaixonado por lógica e
          resolver desafios de programação só faz com que essa paixão aumente.
        </p>
        <p>
          Trabalhei por 4 anos na área de Design Gráfico e nesse período
          exercitei muito minhas habilidades de comunicação, dar e receber
          feedback, inteligência emocional e atendimento ao cliente além das
          habilidades relacionadas ao design, por meio da ferramenta CorelDraw,
          e de controle de qualidade e de processos.
        </p>
        <p>
          Atualmente, estou finalizando o curso de desenvolvimento web full
          stack da Trybe e estou em busca da minha primeira oportunidade
          profissional na área.
        </p>
        <p>
          Meu objetivo profissional é me desenvolver e trabalhar para que no
          futuro possa me orgulhar do quanto impactei a vida das pessoas.
        </p>
      </div>
    </section>
  );
}
