import Head from 'next/head';
import { useState } from 'react';
import styles from '../../styles/AddPage.module.scss'
import MainContainer from '../components/MainContainer';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [info, setInfo] = useState('');

    const addPost = async () => {
        const post = await fetch('http://localhost:3000/api/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, info: info })
        })
        console.log(post);
    }

    return (
        <MainContainer>
            <Head>
                <title>Add Post</title>
            </Head>
            <div className={styles.form}>
                <div>
                    <h1>Add post</h1>
                    <h4>Title</h4>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title' />
                    <h4>Info</h4>
                    <input onChange={(e) => setInfo(e.target.value)} value={info} placeholder='Title' />
                    <button className={styles.addPost} onClick={addPost}>Add Post</button>
                </div>
            </div>
        </MainContainer>
    );
}

export default AddPost;
