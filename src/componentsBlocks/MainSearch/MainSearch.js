import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { newQuery } from '../../redux/reducer';

import './MainSearch.scss';

function MainSearch() {

    const dispatch = useDispatch();
    const textSearch = React.createRef();

    return (
        <div className='blc-search'>
            <div className="title">
                <h1>Найди профессию, о которой мечтаешь</h1>
            </div>
            <section>
                <input className='text-search' type="text" placeholder='Профессия, должность' ref={textSearch} />
                <Link onClick={() => dispatch(newQuery(textSearch.current.value))} to="/vacancies" className='btn-search'>Найти</Link>
            </section>
        </div>
    )
}

export default MainSearch
