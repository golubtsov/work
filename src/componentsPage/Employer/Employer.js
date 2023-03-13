import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setDisplay } from '../../redux/reducer';
import EmployerClass from '../../classes/EmployerClass';

import './Employer.scss';

function Employer(props) {

    const description = React.createRef();
    const popup = React.createRef();
    const [employer, setEmployer] = useState({});
    const displayPopup = useSelector(state => state.toolkit.displayPopup);
    const dispatch = useDispatch();

    useEffect(() => {
        getInfoEmployer(props.id);
    }, [displayPopup]);

    const getInfoEmployer = (id) => {
        if (id != undefined) {
            axios.get(`https://api.hh.ru/employers/${id}`)
                .then(res => {
                    setEmployer(new EmployerClass(
                        res.data.id,
                        res.data.name,
                        res.data.description
                    ));
                    description.current.innerHTML = res.data.description;
                })
        }
    }

    return (
        <div style={{ display: displayPopup }} className='popup-employer' ref={popup}>
            <div className="close">
                <div className="btn-close" onClick={() => dispatch(setDisplay('none'))}></div>
            </div>
            <div className="window-popup">
                <div className="container">
                    <h2 className='title'>{employer.name}</h2>
                    <div className='description' ref={description}></div>
                </div>
            </div>
        </div>
    )
}

export default Employer
