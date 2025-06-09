import React from 'react';
import styles from './Home.module.css';
import aboutImg from '../assets/about.jpg';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
        <div className={styles.homeContainer}>

          <div className={styles.messageBox}>
            <p className={styles.messageText}>
              Doe, Troque ou compre peças únicas e sustentáveis.
            </p>
          </div>

        </div>
      

      {/* Seção Sobre Nós */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutTextContainer}>
          <h2>Sobre nós</h2>
          <p className={styles.aboutText}> 
            O Brechuff é um bazar sustentável criado por estudantes da UFF
            com um propósito simples, mas poderoso: repensar a forma como
            consumimos moda. Acreditamos que a moda não precisa ser descartável
            — por isso, promovemos a troca constante de peças, estendendo a vida
            útil das roupas e diminuindo os impactos ambientais.
          </p>
          <Link to="/about" className={styles.aboutButton}>
            Saiba mais
          </Link>
        </div>

        <img
          src={aboutImg}
          alt="Equipe trabalhando em bazar"
          className={styles.aboutImage}
        />
      </section>
    </>
  );
}
