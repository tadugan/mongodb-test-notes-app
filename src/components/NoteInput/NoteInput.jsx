import { Button, Card, Grid, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './NoteInput.css';

function NoteInput() {

    const [ category, setCategory ] = useState('category');
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');

    const dispatch = useDispatch();

    const addNote = (event) => {
        event.preventDefault();

        if (areInputsInvalid()) {
            return;
        }

        const newNote = {
                title: title,
                textBody: text,
                category: category
        }

        // Add note to database
        dispatch({type: 'SUBMIT_NEW_NOTE', payload: newNote});

        clearInputs();
    };

    const clearInputs = () => {
        setCategory('category');
        setText('');
        setTitle('');
    };

    const areInputsInvalid = () => {
        if (text === '') {
            return true;
        }
        else if (title === '') {
            return true;
        } 
        else if (category === 'category' || category === '') {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className="input-content">
            <Card className="input-card">
                <form onSubmit={addNote}>
                    <Grid
                        container
                        spacing={1}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item>
                            <h2 className="input-header">Write a note</h2>
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Note Title"
                                className="input-title"
                                value={title}
                                onChange={(event) => {setTitle(event.target.value)}}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Write your note here!"
                                multiline
                                minRows={5}
                                className="input-text"
                                variant="outlined"
                                value={text}
                                onChange={(event) => {setText(event.target.value)}}
                            />
                        </Grid>
                        <Grid item>
                            <Select
                                value={category}
                                variant="outlined"
                                onChange={(event) => {setCategory(event.target.value)}}
                                className="input-category"
                            >
                                <MenuItem value="category">Choose a Category</MenuItem>
                                <MenuItem value="work">Work</MenuItem>
                                <MenuItem value="family">Family</MenuItem>
                                <MenuItem value="coding">Coding</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" type="submit">Add Note</Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </div>
    );
};

export default NoteInput;