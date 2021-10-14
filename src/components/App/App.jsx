import React from "react";
import "./App.css";
import NoteInput from "../NoteInput/NoteInput";
import NoteDisplay from "../NoteDisplay/NoteDisplay";
import { Grid } from "@material-ui/core";

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
        <Grid item>
          <NoteInput />
        </Grid>
        <Grid item>
          <NoteDisplay />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
