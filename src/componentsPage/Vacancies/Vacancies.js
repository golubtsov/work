import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPage, newQuery } from "../../redux/reducer";

import './Vacancies.scss';
import BlcVacansies from "../../componentsBlocks/BlockVacancies/BlcVacansies";
import Footer from "../../componentsBlocks/Footer/Footer";

function Vacancies() {

    const dispath = useDispatch();
    const intText = React.createRef();
    let page = useSelector((state) => state.toolkit.page);
    let query = useSelector((state) => state.toolkit.query);

    useEffect(() => { }, [query, page]);

    function getQueryPoisk() {
        let poisk = intText.current.value;
        dispath(addPage())
        dispath(newQuery(poisk));
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