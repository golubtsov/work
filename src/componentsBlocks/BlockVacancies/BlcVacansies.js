import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import './BlcVacansies.scss';
import ChechNull from "../../classes/CheckNull";
import Vacancy from "../../classes/Vacancy";
import CardVacancy from "../CardVacancy/CardVacancy";
import Pagination from "../Pagination/Pagination";
import { pagesLength } from "../../redux/reducer";

function BlcVacansies() {

    const listVacancies = React.createRef();
    const dispatch = useDispatch();
    let page = useSelector((state) => state.toolkit.page);
    let query = useSelector((state) => state.toolkit.query);
    let [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.hh.ru/vacancies?text=${query}&page=${page}`)
            .then(res => {
                dispatch(pagesLength(res.data.pages));
                for (const e of res.data.items) {
                    listVacancies.current.innerHTML = '';
                    createClassVacancy(e);
                }
            })
    }, [page, query]);

    function createClassVacancy(el) {
        let vacancy = new Vacancy(
            el.id,
            el.name,
            el.area,
            el.salary,
            el.employer
        );
        vacancy = new ChechNull().checkNull(vacancy);
        vacancies = [...vacancies, vacancy];
        setVacancies(vacancies);
    }

    return (
        <>
            <div className="blc-vacansies">
                <div className="list-vacancies" ref={listVacancies}>
                    {vacancies.map(el => <CardVacancy info={el} key={el.id} />)}
                </div>
            </div>
            <Pagination />
        </>
    );
}

export default BlcVacansies;