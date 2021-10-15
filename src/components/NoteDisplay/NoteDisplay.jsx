import { Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import './NoteDisplay.css';

function NoteDisplay() {

    const currentNote = useSelector(store => store.currentNote);

    return (
            <Paper>
                <div className="note-display-content">
                        <h3 className="note-display-header">{currentNote.title}</h3>
                        <p>{currentNote.textBody}</p>
                </div>
            </Paper>
    );
};

export default NoteDisplay;