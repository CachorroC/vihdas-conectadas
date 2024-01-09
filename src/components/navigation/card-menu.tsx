import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

export function CardMenu () {
      return (
        <div className={styles.menu}>
          <Link className={styles.flipCard} href={'/'}>
            <div className={styles.frontCard}>
              <Image src={ '/img/1.png' }  fill={true} alt={ '' }/>
            </div>
            <div className={styles.backCard}>
              <Image src={ '/img/2.png' }  fill={true} alt={ '' } />
            </div>
          </Link>
          <Link className={styles.flipCard} href={'/PanoramaBogota'}>
            <div className={styles.frontCard}>
              <Image src={ '/img/3.png' }  fill={true} alt={ '' } />
            </div>
            <div className={styles.backCard}>
              <Image src={ '/img/4.png' }  fill={true} alt={ '' }/>
            </div>
          </Link>
          <Link className={styles.flipCard} href="index3.html">
            <div className={styles.frontCard}>
              <Image src={'/img/5.png'}  fill={true} alt={ '' } />
            </div>
            <div className={styles.backCard}>
              <Image src={'/img/6.png'}  fill={true} alt={ '' } />
            </div>
          </Link>
          <Link className={styles.flipCard} href="index4.html">
            <div className={styles.frontCard}>
              <Image src={'/img/7.png'}  fill={true} alt={ '' } />
            </div>
            <div className={styles.backCard}>
              <Image src={'/img/8.png'}  fill={true} alt={ '' } />
            </div>
          </Link>
          <Link className={styles.flipCard} href="index5.html">
            <div className={styles.frontCard}>
              <Image src={'/img/9.png'}  fill={true} alt={ '' } />
            </div>
            <div className={styles.backCard}>
              <Image src={'/img/10.png'}  fill={true} alt={ '' } />
            </div>
          </Link>
          <Link className={styles.flipCard} href="index6.html">
            <div className={styles.frontCard}>
              <Image src={'/img/11.png'}  fill={true} alt={ '' } />
            </div>
            <div className={styles.backCard}>
              <Image src={'/img/12.png' } fill={true} alt={ '' } />
            </div>

          </Link>

        </div>
      );
}