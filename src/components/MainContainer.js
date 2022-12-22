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
                <Link href="http://localhost:3000/" className={styles.A}>Home</Link>
                <Link href="http://localhost:3000/posts" className={styles.A}>Posts</Link>
                <Link href="http://localhost:3000/add-post" className={styles.A}>Add Post</Link>
            </header>
            {children}
        </>
    );
}

export default MainContainer;
