import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './NoteList.css';

function NoteList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'GET_ALL_NOTES'});
    });

    return (
        <div>
            <h2>NoteList</h2>
        </div>
    );
};

export default NoteList;