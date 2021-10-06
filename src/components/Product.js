import styles from './Product.module.css';

export default function Product(props) {
  const { product } = props;
  const statusClass = product.status === 'New' ? styles.statusNew : styles.status;

  return (
    <a href={product.link} className={styles.product}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div>
        {product.status && <span className={statusClass}>{product.status}</span>}
        <span className={styles.title}>{product.title}</span>
        <span className={styles.price}>£{product.price}</span>
      </div>
    </a>
  );
}
