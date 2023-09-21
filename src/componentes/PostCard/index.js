import styles from './Post.module.css';

const PostCard = ({ post }) => {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`./assets/posts/${post.id}/capa.png`} //Caminho ficou dinamico
                alt='Capa dos cards'
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}

export default PostCard;