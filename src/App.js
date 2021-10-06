import styles from './App.module.css';
import Header from './components/Header';
import Product from './components/Product';
import Filter from './components/Filter';
import Dropdown from './components/Dropdown';
import Breadcrumb from './components/Breadcrumb';
import products from './assets/dunelm-products.json';

export default function App() {
  const filters = [
    'Highlights',
    'Stock Availability',
    'Colour',
    'Type',
    'Finish',
    'Material',
    'Range',
    'Assembly',
    'Product Benefits',
    'Brand',
    'Price',
  ];

  return (
    <div>
      <Header />
      <div className={styles.appContainer}>
        <div>
          <Breadcrumb />

          <div className={styles.titleContainer}>
            <h2 className={styles.title}>
              Chest of Drawers<span className={styles.titleResults}>({products.length} results)</span>
            </h2>
            <Dropdown />
          </div>

          <div className={styles.results}>
            <div className={styles.filters}>
              <span className={styles.filtersTitle}>Filters</span>
              {filters.map((filter) => (
                <Filter key={filter} className={styles.filter}>
                  {filter}
                </Filter>
              ))}
            </div>

            <div className={styles.products}>
              {products.map((product) => (
                <Product product={product} key={product.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
