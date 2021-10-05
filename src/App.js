import styles from './App.module.css';
import Header from './components/Header';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <div className={styles.App__container}>
        <div>
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span>/</span>
            <span>Home And Furniture</span>
            <span>/</span>
            <span>Furniture</span>
            <span>/</span>
            <span>Bedroom Furniture</span>
          </div>

          <h2 className={styles.title}>
            Chest of Drawers<span className={styles.title__results}>(260 results)</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
