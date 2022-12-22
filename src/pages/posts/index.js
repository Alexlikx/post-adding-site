import Head from "next/head";
import Link from "next/link";
import styles from "../../../styles/Posts.module.scss";
import MainContainer from "../../components/MainContainer";

const Posts = ({ posts }) => {
    return (
        <MainContainer>
            <Head>
                <title>Posts</title>
            </Head>
            <div className={styles.postGrid}>
                {posts.map((item) => (
                    <div key={item._id} className={styles.card}>
                        <h4>{item.title}</h4>
                        <p>{item.info}</p>
                        <Link href={'posts/' + item._id} className={styles.link}>Check Post</Link>
                    </div>
                ))}
            </div>
        </MainContainer>
    );
}

export const getServerSideProps = async () => {
    try {
        const request = await fetch('https://post-adding-site.vercel.app/api/post');
        const posts = await request.json();
        return {
            props: { posts }
        }
    } catch (e) {
        console.log(e);
    }
}

export default Posts;
