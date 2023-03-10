import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from '../../redux/reducer';

import './Pagination.scss';

function Pagination() {

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [itemsPage, setItemsPage] = useState([]);
    const listPages = React.createRef();
    const dispatch = useDispatch();

    let page = useSelector((state) => state.toolkit.page);

    useEffect(() => { }, [page]);

    const active = (el, index) => {
        el.currentTarget.classList.add('active');
        // console.log(index);
    }

    const addElemItemsPade = (item) => {
        setItemsPage(itemsPage.push(item.currentTarget))
        console.log(itemsPage);
    }

    return (
        <div className='pagination'>
            <ul className="list-pages" ref={listPages}>
                <button className='decrement'>{'<'}</button>
                {console.log(page)}
                {pages.map((el, index) => (
                    <li className='item-page' key={index} onClick={(e) => {
                        dispatch(addPage(index));
                        active(e, index);
                    }}>{el}</li>
                ))}
                <button className='increment'>{'>'}</button>
            </ul>
        </div >
    )
}

export default Pagination
