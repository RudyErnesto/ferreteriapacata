import React from 'react';
import ProducItem from '@components/ProducItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API ='https://api.escuelajs.co/api/v1/products?limit=5&offset=1';

const ProductList = () => {
	const products = useGetProducts(API);

    return (
        <section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProducItem product ={product} key = {product.id}  />
				))}
			</div>
		</section>
    );
}

export default ProductList;