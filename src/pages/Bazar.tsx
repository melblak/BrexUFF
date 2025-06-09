// src/pages/Bazar.tsx
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bazar.module.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

// Exemplo de dados de produtos (substitua pelos seus dados reais)
const allProducts: Product[] = [
  {
    id: 1,
    name: 'Camiseta Básica Preta',
    price: 49.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Camiseta+Preta',
    category: 'Camisetas',
  },
  {
    id: 2,
    name: 'Calça Jeans Skinny',
    price: 129.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Calça+Jeans',
    category: 'Calças',
  },
  {
    id: 3,
    name: 'Vestido Floral',
    price: 89.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Vestido+Floral',
    category: 'Vestidos',
  },
  {
    id: 4,
    name: 'Blusa de Tricô Rosa',
    price: 79.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Blusa+Tricô',
    category: 'Blusas',
  },
  {
    id: 5,
    name: 'Saia Midi Estampada',
    price: 69.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Saia+Estampada',
    category: 'Saias',
  },
  {
    id: 6,
    name: 'Shorts Jeans Destroyed',
    price: 59.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Shorts+Jeans',
    category: 'Shorts',
  },
  // ... adicione quantos quiser
];

export default function Bazar() {
  const navigate = useNavigate();

  // Estado para categoria selecionada (null = todas)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Obter lista de categorias únicas dos produtos
  const categories = useMemo(() => {
    return Array.from(new Set(allProducts.map((p) => p.category)));
  }, []);

  // Filtra os produtos conforme a categoria selecionada
  const filteredProducts = useMemo<Product[]>(() => {
    if (!selectedCategory) return allProducts;
    return allProducts.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Quando o usuário muda a categoria
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value === '' ? null : value);
  };

  return (
    <div className={styles.container}>
      {/* Seção lateral de filtros */}
      <aside className={styles.filters}>
        <h2>Filtros</h2>

        <div className={styles.filterGroup}>
          <label htmlFor="category">Categoria:</label>
          <select id="category" onChange={handleCategoryChange} value={selectedCategory || ''}>
            <option value="">Todas</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Aqui, você pode adicionar mais filtros (faixa de preço, tamanho, cor etc.) */}
      </aside>

      {/* Seção de catálogo */}
      <section className={styles.catalog}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={styles.productCard}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productInfo}>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productPrice}>
                R$ {product.price.toFixed(2).replace('.', ',')}
              </div>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666' }}>
            Nenhum produto encontrado para esta categoria.
          </p>
        )}
      </section>
    </div>
  );
}
