// src/pages/Forum.tsx
import styles from './Login.module.css';
import imagem4 from '../assets/imagem4.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className={styles.LoginContainer}>
      <img src={imagem4} alt="Equipe 1" className={styles.aboutImage} />
        <div className={styles.BotaoTextContainer}>    
          <h2 className={styles.titleSection}>Brechuff</h2>
          <Link to="/about" className={styles.aboutButton}>
            Fazer Login com google
          </Link>
        </div>
    </div>
  );
}
