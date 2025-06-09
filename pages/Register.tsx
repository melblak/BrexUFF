// src/pages/Forum.tsx
import styles from './Register.module.css';
import imagem5 from '../assets/imagem5.jpg';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className={styles.LoginContainer}>
      <img src={imagem5} alt="Equipe 1" className={styles.aboutImage} />
        <div className={styles.BotaoTextContainer}>    
          <h2 className={styles.titleSection}>Brechuff</h2>
          <Link to="/about" className={styles.aboutButton}>
            Criar conta com google
          </Link>
        </div>
    </div>
  );
}
