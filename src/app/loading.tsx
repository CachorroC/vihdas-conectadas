import Image from 'next/image';
import styles from '#@/styles/page.module.css';

export default function Loader () {
      return (
        <div className={styles.loader}>
          <Image src={ '/img/loader.png' } alt={ 'loader image' } priority={true} width={200} height={ 200 } />
        </div>
      );
}