import styles from './Rodape.module.css';
//Usar svg como se fosse um componente
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'
const Rodape = () => {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada/>

            Desenvolvido por Guilherme
        </footer>
    )
}

export default Rodape;