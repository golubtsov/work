import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ChechNull from "../../classes/CheckNull";
import BigVacancy from "../../classes/BigVacancy";
import Footer from "../../componentsBlocks/Footer/Footer";
import Employer from "../Employer/Employer";
import CheckLogo from "../../classes/CheckLogo";
import { whiteBacground } from "../../consts/consts";
import { setDisplay } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";

import '../../componentsBlocks/CardVacancy/CardVacancy.scss';
import './Vacancy.scss';

function Vacancy() {

    const description = React.createRef();
    const listKeySkills = React.createRef();
    const [infoVacancy, setInfoVacancy] = useState({});
    const [salary, setSalary] = useState('');
    const [src, setSrc] = useState(whiteBacground);
    const dispatch = useDispatch();

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
                createKeySkills(bigVacancy.key_skills);
                if (!CheckLogo.prototype.checkLogo(res.data.employer.logo_urls)) {
                    setSrc(res.data.employer.logo_urls['240']);
                }
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

    function createKeySkills(list) {
        for (const el of list) {
            listKeySkills.current.innerHTML += `<li>${el.name}</li>`;
        }
    }

    function getInfoEmployer() {

    }

    return (
        <>
            <div className="container">
                <div className="blc-info">
                    <div className="card-vacanc">
                        <div className="blc-title">
                            <h3>{infoVacancy.name}</h3>
                            <span className="blc-logo"><img src={src} className="logo" /></span>
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
                            <p className="employer"><b onClick={() => dispatch(setDisplay('flex'))}>{infoVacancy.employer}</b></p>
                        </div>
                        <div className="blc-otlick">
                            <button className="btn-otclick">Смотреть</button>
                        </div>
                    </div>
                    <div className="blc-description">
                        <div className="description" ref={description}></div>
                        <div className="key-skills">
                            <div className="blc-title">
                                <h3>Ключевые навыки</h3>
                            </div>
                            <div className="skills">
                                <ul className="list-skills" ref={listKeySkills}>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Employer />
        </>
    );
}

export default Vacancy;