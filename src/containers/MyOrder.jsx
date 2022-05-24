import React, {useContext} from 'react';
import OrderItem from '@components/OderItem';
import AppContext from '@context/AppContext';
import close from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';
const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumaTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator+currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
    return (
        <aside className={styles.MyOrder}>
			<div className={styles['title-container']}>
				<img src={close} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className={styles['my-order-content']}>
				{state.cart.map(product => (
					<OrderItem product = {product} key ={`orderItem-${product.id}`} />
				))}
				<div className={styles['order']}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumaTotal()}</p>
				</div>
				<button className={styles['primary-button']}>
					Checkout
				</button>
			</div>
		</aside>
    );
}

export default MyOrder;