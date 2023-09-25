import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    //Sempre que o pathname mudar, a janela vai ir para o top(0, 0)
    useEffect(() => {
        window.scrollTo(0, 700);
    }, [pathname]);

    return null;
}