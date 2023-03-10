import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementPage, decrementPage } from '../../redux/reducer';
import { scrollTop } from '../../functions/scrollTop';

import './Pagination.scss';

function Pagination() {

    const listPages = React.createRef();
    const dispatch = useDispatch();

    let page = useSelector((state) => state.toolkit.page);

    useEffect(() => { }, [page]);

    return (
        <div className='pagination'>
            <ul className="list-pages" ref={listPages}>
                <li className='btn decrement' onClick={() => {
                    dispatch(decrementPage());
                    scrollTop();
                }}>{'<'}</li>
                <li>{page + 1}</li>
                <li className='btn increment' onClick={() => {
                    dispatch(incrementPage());
                    scrollTop();
                }}>{'>'}</li>
            </ul>
        </div >
    )
}

export default Pagination
