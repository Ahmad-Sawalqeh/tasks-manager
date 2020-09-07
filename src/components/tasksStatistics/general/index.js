import React from 'react';
import { useSelector } from "react-redux";

const General = () => {

    const { list, counter: { deleted, edited } } = useSelector(state => state);

    return (
        <>
            <h5 className='font-weight-bold text-left my-3'>General :</h5>
            <div className='d-flex justify-content-between'>
                <p>Number of Tasks : </p><p>{list.length}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Deleted Tasks : </p><p>{deleted}</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Edited Tasks : </p><p>{edited}</p>
            </div>
        </>
    )
}

export default General;