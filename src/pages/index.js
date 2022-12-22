import MainContainer from '../components/MainContainer';
import styles from '../../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <MainContainer>
      <main className={styles.main}>
        <div>
          <h1>Hello, here you can Add, Check Posts</h1>
          <div className={styles.post_titles}>
            <span>
              <span>To add Post click</span>
              <Link href="https://post-adding-site.vercel.app/add-post" className={styles.A_underlined}>Here</Link>
            </span>
          </div>
          <div className={styles.post_titles}>
            <span>
              <span>To watch Posts click</span>
              <Link href="https://post-adding-site.vercel.app/post" className={styles.A_underlined}>Here</Link>
            </span>
          </div>
        </div>
      </main>
    </MainContainer >
  )
}
