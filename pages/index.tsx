import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.main}><h1 className={styles.title}>Welcome to the Generator</h1>
      <div className={styles.grid}>
        <Link href='/laban-generator' passHref>
          <div className={styles.card}><p>Laban Generator</p></div>
        </Link>
      </div>
    </div>);
};

export default Home;
