import styles from './Post.module.css';

const Post = ({ post }) => {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`./assets/posts/${post.id}/capa.png`} //Caminho ficou dinamico
            />
        </div>
    )
}

export default Post;