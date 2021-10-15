import React from "react";
import "./App.css";
import NoteInput from "../NoteInput/NoteInput";
import NoteDisplay from "../NoteDisplay/NoteDisplay";
import { Grid } from "@material-ui/core";
import NoteList from "../NoteList/NoteList";

function App() {
  return (
    <div className='App'>
      <Grid
        container
        spacing={2}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={8}>
          <NoteInput />
        </Grid>
        <Grid item xs={3}>
          <NoteList />
        </Grid>
        <Grid item xs={8}>
          <NoteDisplay />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
