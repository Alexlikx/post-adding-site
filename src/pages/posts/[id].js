import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainContainer from '../../components/MainContainer';

const Id = ({ post }) => {
    if(post.statusCode === 404) {
        
    }
    return (
        <MainContainer>
            <h1>asdads</h1>
        </MainContainer>
    );
}

Id.getInitialProps = async context => {
    const query = await fetch(`http://localhost:3000/api/${context.query.id}`);
    if (query.status == 404) {
        return { message: "Not Found", statusCode: 404 }
    };
    const post = await query.json();
    return { post };
};


export default Id;
