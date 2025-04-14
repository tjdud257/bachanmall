import React, { useState, useEffect } from 'react';
import '../App.css';
import styles from '../pages/Product.module.css';
import { Link } from 'react-router-dom';

const CategoryProductList = ({ category, label }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(product => product.category === category)
                setProducts(filtered)
                //category와 일치한 값들만 따로 배열로 정장하는 함수 => filter함수
            });

    }, [category])
    return (
        <div>
            <h2>{label}</h2>
            <ul className={styles.productList}>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.img} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p className={styles.content}>{product.content}</p>
                            <p className={styles.price}>{product.price}</p>
                            {product.choice && <span className={styles.choice}>인기</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryProductList