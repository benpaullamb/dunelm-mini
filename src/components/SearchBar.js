import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  return (
    <div className={styles.searchBar}>
      <input type='text' placeholder='What are you looking for?' className={styles.searchBarInput} />
      <button className={styles.searchBarButton}>
        Search <i className='material-icons'>chevron_right</i>
      </button>
    </div>
  );
}
