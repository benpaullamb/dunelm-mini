import styles from './Header.module.css';
import logo from '../assets/logo.svg';
import IconButton from './IconButton';
import SearchBar from './SearchBar';
import FreeSection from './FreeSection';

export default function Header() {
  const categories = [
    'Christmas',
    'Furniture',
    'Beds',
    'Bedding',
    'Curtains',
    'Blinds',
    'Rugs',
    'Decor',
    'Lighting',
    'Cushions',
    'Decorate',
    'Kitchen',
    'Bath',
    'Storage',
    'Garden',
  ];

  return (
    <header>
      <div className={styles.track}>
        <div>
          <span className={styles.trackItem}>Track Order</span>
          <span className={styles.trackItem}>Store Finder</span>
          <span className={styles.trackItem}>Help</span>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div className={styles.mainSearch}>
            <img src={logo} alt='Dunelm Logo' className={styles.mainLogo} />
            <SearchBar />
            <div className={styles.mainButtons}>
              <IconButton icon='favorite_border'>Favourites</IconButton>
              <IconButton icon='person_outline'>My Account</IconButton>
              <IconButton icon='shopping_bag'>Basket</IconButton>
            </div>
          </div>
          <div className={styles.mainCategories}>
            {categories.map((cat) => (
              <span key={cat} className={styles.mainCat}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
      <FreeSection />
      <div className={styles.autumn}>
        <div>
          <span className={styles.autumnText}>Welcome to autumn, welcome to the land of cosy.</span>
          <span className={styles.autumnAction}>Shop now &gt;</span>
        </div>
      </div>
    </header>
  );
}
