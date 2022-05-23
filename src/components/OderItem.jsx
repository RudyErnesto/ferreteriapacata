import React, {useContext} from 'react'
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
const OderItem = ({ product }) => {

	const { removeFromCart } = useContext(AppContext);
	const handleRemove = product =>{
		removeFromCart(product);
	}

    return (
        <div className={styles.OderItem}>
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick = {()=> handleRemove(product)}/>
		</div>
    );
}

export default OderItem;