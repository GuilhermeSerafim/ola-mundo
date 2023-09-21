import { Link } from 'react-router-dom';
import styles from './Post.module.css';
import BotaoPrincipal from 'componentes/BotaoPrincipal';

const PostCard = ({ post }) => {
    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`./assets/posts/${post.id}/capa.png`} //Caminho ficou dinamico
                    alt='Capa dos cards'
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard;