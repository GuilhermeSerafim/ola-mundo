import styles from "./Sobremim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Guilherme
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto do Guilherme sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou um aprendiz Fullstack na Tokio Marine, e fico muito contente de compartilhar um pouco da minha jornada contigo.
            </p>
            <p className={styles.paragrafo}>
                Minha história com a programação teve início na ETEC Abdias do Nascimento, quando escolhi cursar o ensino médio técnico em desenvolvimento de sistemas. Essa fase foi repleta de desafios, especialmente porque estava na pandemia e não tinha acesso a um computador. No entanto, como qualquer aventureiro destemido, eu não deixei essas adversidades deterem meus sonhos.
            </p>
            <p className={styles.paragrafo}>
                Na ETEC, a maior parte do aprendizado era teórico, e, de certa forma, eu programava no caderno, transformando ideias em linhas de código mentalmente. A falta de recursos não foi um empecilho para a minha determinação em trilhar esse caminho.
            </p>
            <p className={styles.paragrafo}>
                Assim como aprendi com as palavras inspiradoras de Walt Disney, enxerguei o impossível como uma oportunidade e um terreno fértil para quem ousa sonhar grande. Com essa motivação, tracei planos audaciosos para o meu futuro em 2023.
            </p>
            <p className={styles.paragrafo}>
                Quando finalmente consegui adquirir meu próprio computador, embarquei em uma jornada de aprendizado intensivo. Ingressei no Oracle Next Education, onde foquei principalmente em desenvolvimento front-end. Simultaneamente, participei do Projeto Sementes do Brasil da Tokio Marine na FIAP, concentrando-me no desenvolvimento back-end. Essa dupla imersão em tecnologias diferentes foi um desafio incrível, mas eu sempre adorei superar obstáculos.
            </p>
            <p className={styles.paragrafo}>
                Ao concluir o projeto Sementes, recebi uma oportunidade empolgante: fui convidado a integrar a equipe de tecnologia da Tokio Marine como jovem aprendiz Full Stack. Ao integrar a equipe da Tokio Marine, tive a oportunidade de fazer parte de uma empresa reconhecida como a melhor em São Paulo, segundo o Great Place To Work® Brasil!
            </p>
            <p className={styles.paragrafo}>
                Minha história é um exemplo de que, com determinação, coragem e apoio mútuo, podemos transformar obstáculos em oportunidades e alcançar nossos objetivos.
            </p>
        </PostModelo>
    )
}