import styles from './Breadcrumb.module.css';

export default function Breadcrumb(props) {
  return (
    <div className={styles.breadcrumb}>
      <span>Home</span>
      <span>/</span>
      <span>Home And Furniture</span>
      <span>/</span>
      <span>Furniture</span>
      <span>/</span>
      <span>Bedroom Furniture</span>
    </div>
  );
}
