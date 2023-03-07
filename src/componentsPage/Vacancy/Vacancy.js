import React, { useEffect, useState } from "react";
import axios from "axios";
import ChechNull from "../../classes/CheckNull";
import BigVacancy from "../../classes/BigVacancy";

import '../../componentsBlocks/CardVacancy/CardVacancy.scss';
import './Vacancy.scss';

function Vacancy() {

    let description = React.createRef();
    const [infoVacancy, setInfoVacancy] = useState({});
    const [salary, setSalary] = useState('');

    useEffect(() => {
        axios.get(`https://api.hh.ru/vacancies/${getIdVacancy()}`)
            .then(res => {
                let bigVacancy = new BigVacancy(
                    res.data.id,
                    res.data.name,
                    res.data.area,
                    res.data.salary,
                    res.data.employer.name,
                    res.data.experience.name,
                    res.data.schedule.name,
                    res.data.employment.name,
                    res.data.description,
                    res.data.key_skills
                );
                setInfoVacancy(new ChechNull().checkNull(bigVacancy));
                createSalary(new ChechNull().checkNull(bigVacancy.salary));
                description.current.innerHTML = bigVacancy.description;
            });
    }, []);

    function getIdVacancy() {
        let idVacancy = new URL(window.location).pathname.split('/')[2];
        return idVacancy;
    }

    function createSalary(el) {
        if (el === 'Не указано') {
            setSalary('');
            return;
        }
        if (el.from !== 'Не указано' && el.to !== 'Не указано') {
            let res = `от ${el.from} до ${el.to} руб.`;
            setSalary(res);
        } else if (el.from === 'Не указано') {
            let res = `до ${el.to} руб.`;
            setSalary(res);
        } else if (el.to === 'Не указано') {
            let res = `от ${el.from} руб.`;
            setSalary(res);
        }
    }
    return (
        <div className="container">
            <div className="blc-info">
                <div className="card-vacanc">
                    <div className="blc-title">
                        <h3>{infoVacancy.name}</h3>
                        <span className="blc-logo"><img src="https://hhcdn.ru/employer-logo-original/812403.png" className="logo" /></span>
                    </div>
                    <div className="blc-salary">
                        <p className="salary">{salary}</p>
                    </div>
                    <div className="blc-employment">
                        <p className="text-info">Требуемый опыт работы: {infoVacancy.experience}</p>
                        <p className="text-info">{infoVacancy.employment}</p>
                        <p className="text-info">{infoVacancy.schedule}</p>
                    </div>
                    <div className="blc-employment">
                        <p className="employment"><b>{infoVacancy.employer}</b></p>
                    </div>
                    <div className="blc-otlick">
                        <button className="btn-otclick">Смотреть</button>
                    </div>
                </div>
                <div className="blc-description">
                    <div className="description" ref={description}></div>
                </div>
            </div>
        </div>
    );
}

export default Vacancy;