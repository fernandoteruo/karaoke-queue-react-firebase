import React from 'react';
import Button from '@material-ui/core/Button';
import {ListSongsComponent} from "../songs/ListSongsComponent";
import {SongStatus} from "../../utils/SongStatus";

export const AdminComponent = ({songs, handleClick}) => (
    <section>
        <Button onClick={e => handleClick(e, SongStatus.played, songs)}>Apagar Tocadas</Button>
        <Button onClick={e => handleClick(e, SongStatus.all, songs)}>Apagar Todas</Button>
        <ListSongsComponent songs={songs}/>
    </section>
);