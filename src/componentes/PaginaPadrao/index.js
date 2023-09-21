import Banner from 'componentes/Banner';
import style from './PaginaPadrao.module.css';
import { Outlet } from 'react-router-dom';

const PaginaPadrao = ({ children }) => {
    return (
        <main>
            <Banner/>

            <Outlet/>
            {children}
        </main>
    )
}

export default PaginaPadrao;