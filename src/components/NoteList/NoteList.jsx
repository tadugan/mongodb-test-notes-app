import { Button, List, ListItem, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './NoteList.css';

function NoteList() {

    const dispatch = useDispatch();
    const allNotes = useSelector((store) => store.allNotes);

    const selectCurrentNote = (noteObject) => {
        dispatch({type: 'SET_CURRENT_NOTE', payload: noteObject})
    };

    useEffect(() => {
        dispatch({type: 'GET_ALL_NOTES'});
    }, [dispatch]);

    return (
        <div>
            <h3 className="note-list-header">Notes</h3>
            <Paper>
                <List className="note-list-list">
                    {allNotes.map((note, index) => {
                        return (
                            <ListItem>
                                    <Button onClick={() => selectCurrentNote(note)}>{note.title}</Button>
                            </ListItem>
                        )
                    })}
                </List>
            </Paper>
        </div>
    );
};

export default NoteList;