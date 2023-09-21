import { useParams } from "react-router-dom";

const Post = () => {
    
    const parametros = useParams();
    console.log(parametros)

    return (
        <h1>Post: {parametros.id}</h1>
    )
}

export default Post;