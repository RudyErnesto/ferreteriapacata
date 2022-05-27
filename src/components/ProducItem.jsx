import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import styles from "@styles/ProductItem.module.scss";

const ProducItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProducItem}>
      <Image
        loader={() => product?.images[0]}
        src={product?.images[0]}
        alt={product?.title}
        width="100%"
        height="100%"
        layout={"responsive"}
      />
      <div className={styles["product-info"]}>
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProducItem;
