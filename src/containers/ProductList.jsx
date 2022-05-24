import React from 'react';
import ProducItem from '@components/ProducItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API ='https://api.escuelajs.co/api/v1/products?limit=10&offset=1';

const ProductList = () => {
	const products = useGetProducts(API);

    return (
        <section className={styles['main-container']}>
			<div className={styles.ProductList}>
				{products.map(product =>(
					<ProducItem product ={product} key = {product.id}  />
				))}
			</div>
		</section>
    );
}

export default ProductList;