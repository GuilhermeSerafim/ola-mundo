import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

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

    return (
        <Routes>
            {/* Aqui dentro de todos os posts que forem encontrados, ele vai renderizar o elemento PaginaPadrao junto (porque tem o Outlet na pagina padrão)*/}
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}

export default Post;