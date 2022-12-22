import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Home.module.scss';

const MainContainer = ({ children }) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <header className={styles.header}>
                <Link href="https://post-adding-site.vercel.app/" className={styles.A}>Home</Link>
                <Link href="https://post-adding-site.vercel.app/posts" className={styles.A}>Posts</Link>
                <Link href="https://post-adding-site.vercel.app/add-post" className={styles.A}>Add Post</Link>
            </header>
            {children}
        </>
    );
}

export default MainContainer;
