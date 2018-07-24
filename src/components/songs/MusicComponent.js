import React from 'react';
import {AddMusicContainer} from "../../containers/songs/AddMusicContainer";
import {ListMusicContainer} from "../../containers/songs/ListMusicContainer";
export const MusicComponent = () => (
    <section>
        <h3>Inclua sua música</h3>
        <AddMusicContainer />
        <h3>Fila de músicas atual</h3>
        <ListMusicContainer status={['new', 'active']}/>
    </section>
);