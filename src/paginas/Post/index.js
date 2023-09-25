import { useParams } from "react-router-dom";
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import styles from "./Post.module.css"
import PostCard from "componentes/PostCard";

const Post = () => {

    //Aqui ele retorna apenas o parametro da url ("1", "2", "3"...) - Ele pega o /caminho/:nomedoparametro
    const parametros = useParams();
    console.log(parametros)
    //Aqui ele retorna o objeto de acordo com o parametro passado
    const post = posts.find((post) => {
        return post.id === Number(parametros.id) //Porque o id era uma string e estamos utilizando ===
    })

    if (!post) {
        return (
            <NaoEncontrada />
        )
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id)) //Imprime todos os post (4) menos cujo parametro é igual
        .sort((a, b) => b.id - a.id) //Ordem descrecente a partir daquele post
        .slice(0, 4); //inicio do array, quantidade de itens que quero imprimir

    return (

        <PaginaPadrao>
            <PostModelo
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>
                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>

            </PostModelo>
        </PaginaPadrao>

    )
}

export default Post;