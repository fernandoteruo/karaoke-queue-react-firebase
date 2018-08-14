import React from 'react';
import {AddSongContainer} from "../../containers/songs/AddSongContainer";
import {ListPlayingToPlaySongsContainer} from "../../containers/songs/ListPlayingToPlaySongsContainer";
export const HomeComponent = () => (
    <section>
        <h3>Inclua sua música</h3>
        <AddSongContainer />
        <h3>Fila de músicas atual</h3>
        <ListPlayingToPlaySongsContainer/>
    </section>
);