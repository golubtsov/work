import React, { useEffect, useState } from "react";
import axios from "axios";

import ChechNull from "../../classes/CheckNull";

import './Blc_Vacansies.scss';
import Vacancy from "../../classes/Vacancy";

function Blc_Vacansies() {

    let page = 0;
    let vacancies = [];

    useEffect(() => {
        axios.get(`https://api.hh.ru/vacancies?text=it+Россия&page=${page}`)
            .then(res => {
                for (const e of res.data.items) {
                    createClassVacancy(e);
                }
            })
            .then(() => console.log(vacancies))
    }, []);

    function createClassVacancy(el) {
        let vacancy = new Vacancy(
            el.id,
            el.name,
            el.area,
            el.salary,
            el.employer,
            el.snippet
        );
        vacancy = new ChechNull().checkNull(vacancy);
        vacancies = [...vacancies, vacancy];
    }

    return (
        <div className="blc-vacansies">
            <div className="list-vacancies">
                <div className="card-vacanc">

                </div>
            </div>
        </div>
    );
}

export default Blc_Vacansies;