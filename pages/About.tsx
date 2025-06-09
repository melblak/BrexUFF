// src/pages/Forum.tsx
import styles from './About.module.css';
import imagem1 from '../assets/imagem1.jpg';
import imagem2 from '../assets/imagem2.jpg';
import imagem3 from '../assets/imagem3.jpg';

export default function About() {
  return (
    <div className={styles.forumContainer}>
      <section className={styles.forumSection}>
        <div className={styles.forumTextContainer}>
          <h2 className={styles.titleSection}>Quem somos?</h2>
          <p className={styles.forumText1}> 
            Somos alunos da Universidade Federal Fluminense (UFF) 
            do curso de Ciência da Computação com a ideia de aplicar práticas 
            sustentáveis no mundo do mercado de vestuário, trazendo para os campus 
            de nossa universidade uma ferramenta de reuso e reciclagem de peças afim 
            de tornar mais acessível e incentivar o consumo consciente.
          </p>
        </div>
        <img src={imagem1} alt="Equipe 1" className={styles.aboutImage} />
      </section>

      <section className={styles.forumSection}>
        <div className={styles.forumTextContainer}>
          <h2 className={styles.titleSection}>Como surgiu</h2>
          <p className={styles.forumText2}>A ideia do bazar online nasceu durante a disciplina Computação 
            e Meio Ambiente, em um projeto de extensão que nos desafiava a propor soluções sustentáveis para 
            a sociedade. Foi assim que pensamos em criar uma plataforma digital
             voltada para a troca e venda de roupas usadas entre os estudantes  de nossa universidade.</p>
        </div>
        <img src={imagem2} alt="Equipe 2" className={styles.aboutImage} />
      </section>

      <section className={styles.forumSection}>
        <div className={styles.forumTextContainer}>
          <h2 className={styles.titleSection}>Nosso objetivo</h2>
          <p className={styles.forumText1}>O que queremos é incentivar o consumo consciente e reduzir o desperdício no setor
             da moda, promovendo o reuso de roupas dentro do ambiente universitário. Queremos tornar a moda mais acessível, 
            sustentável e colaborativa, criando um espaço seguro para compartilhar, trocar e reaproveitar. </p>
        </div>
        <img src={imagem3} alt="Equipe 3" className={styles.aboutImage} />
      </section>
    </div>
  );
}
