import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmployerClass from '../../classes/EmployerClass';
import { setDisplay } from '../../redux/reducer';

import './Employer.scss';

function Employer(props) {

    const popup = React.createRef();
    const dispatch = useDispatch();

    let displayPopup = useSelector(state => state.toolkit.displayPopup);

    useEffect(() => { }, [displayPopup]);

    return (
        <div style={{ display: displayPopup }} className='popup-employer' ref={popup}>
            <div className="close">
                <div className="btn-close" onClick={() => dispatch(setDisplay('none'))}></div>
            </div>
            <div className="window-popup"></div>
        </div>
    )
}

export default Employer
