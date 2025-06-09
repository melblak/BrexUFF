// src/pages/ProductPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.css';

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[]; // array de URLs das imagens (miniaturas e principais)
}

// Exemplo de “banco de dados” local. Substitua pela sua fonte real (API/Firebase, etc).
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Camisa Polo Masculina',
    price: 79.9,
    images: [
      'https://via.placeholder.com/400x400?text=Camisa+Frontal',
      'https://via.placeholder.com/400x400?text=Camisa+Verso',
      'https://via.placeholder.com/400x400?text=Camisa+Detalhe+1',
      'https://via.placeholder.com/400x400?text=Camisa+Detalhe+2'
    ],
  },
  {
    id: '2',
    name: 'Vestido Floral Estampado',
    price: 119.9,
    images: [
      'https://via.placeholder.com/400x400?text=Vestido+Frente',
      'https://via.placeholder.com/400x400?text=Vestido+Lateral',
      'https://via.placeholder.com/400x400?text=Vestido+Costas',
      'https://via.placeholder.com/400x400?text=Vestido+Detalhe'
    ],
  },
  // ... outros produtos, conforme necessário
];

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Carrega o produto “simulado” ao montar o componente
  useEffect(() => {
    // Em um caso real, você buscaria via API/Firebase com o ID vindo de useParams
    const found = sampleProducts.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedImageIndex(0);
    } else {
      setProduct(null);
    }
  }, [id]);

  // Se não achar produto, pode exibir “Produto não encontrado”
  if (!product) {
    return (
      <div style={{ padding: '24px' }}>
        <h2>Produto não encontrado</h2>
      </div>
    );
  }

  // Função que muda a imagem selecionada ao clicar na thumbnail
  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className={styles.container}>
      {/* ========== Seção Esquerda ========== */}
      <div className={styles.leftSection}>
        {/* Coluna de Thumbnails */}
        <div className={styles.thumbnails}>
          {product.images.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`${product.name} miniatura ${idx + 1}`}
              className={`${styles.thumbnail} ${
                idx === selectedImageIndex ? styles.selected : ''
              }`}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>

        {/* Imagem Principal */}
        <div className={styles.mainImageWrapper}>
          <img
            src={product.images[selectedImageIndex]}
            alt={`${product.name} imagem principal`}
            className={styles.mainImage}
          />
        </div>
      </div>

      {/* ========== Seção Direita (Nome, Preço, Chat) ========== */}
      <div className={styles.rightSection}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        <button className={styles.chatButton}>Chat</button>
      </div>
    </div>
  );
}
