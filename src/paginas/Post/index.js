import { useParams } from "react-router-dom";
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
const Post = () => {
    
    //Aqui ele retorna apenas o parametro da url ("1", "2", "3"...)
    const parametros = useParams();
    //Aqui ele retorna o objeto de acordo com o parametro passado
    const post = posts.find((post) => {
        return post.id === Number(parametros.id) //Porque o id era uma string e estamos utilizando ===
    })

    console.log(post); //Para entender melhor

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >

        </PostModelo>
    )
}

export default Post;