import React from 'react';
import './Filters.scss';

const Filters = () => {
    return (
        <div className="filtersContainer">
            <div className="inputItem">
                <input type='checkbox' id='male'></input>
                <label htmlFor='male'>Male</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='female'></input>
                <label htmlFor='female'>Female</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='avl'></input>
                <label htmlFor='avl'>Available</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='mng'></input>
                <label htmlFor='mng'>Management</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='mrk'></input>
                <label htmlFor='mrk'>Marketing</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='sls'></input>
                <label htmlFor='sls'>Sales</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='fnc'></input>
                <label htmlFor='fnc'>Finance</label>
            </div>
            <div className="inputItem">
                <input type='checkbox' id='it'></input>
                <label htmlFor='it'>IT</label>
            </div>
        </div>
    )
}

export default Filters