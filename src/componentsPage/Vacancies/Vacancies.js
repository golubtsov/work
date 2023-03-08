import React, { useEffect, useState } from "react";
import BlcVacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import Footer from "../../componentsBlocks/Footer/Footer";

import './Vacancies.scss';

function Vacancies() {

    const intText = React.createRef();
    let [query, setQuery] = useState('it+Россия');
    let [page, setPage] = useState(0);

    useEffect(() => {
        console.log(query);
    }, [query, page]);

    function getQueryPoisk() {
        query = intText.current.value;
        setQuery(query);
        console.log(query);
        intText.current.value = '';
    }

    function keyEnter(key) {
        if (key.keyCode === 13) {
            getQueryPoisk();
        }
    }

    return (
        <div className="vacans">
            <div className='blc-poisk'>
                <div className="poisk">
                    <input onKeyDown={keyEnter} type="text" ref={intText} placeholder="Профессия, должность" />
                    <button onClick={getQueryPoisk} className='btn-poisk'>Найти</button>
                </div>
            </div>
            <>
                <BlcVacansies paramPoisk={{ "text": query, "page": page }} />
            </>
            <Footer />
        </div>
    );
}

export default Vacancies;