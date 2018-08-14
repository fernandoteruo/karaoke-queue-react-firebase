import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./ListSongsComponent.css";
import {SongComponent} from "./SongComponent";

export const ListSongsComponent = ({songs, handleClick}) => (
    <Grid container className="list">
        <Grid item xs={2} className="heading heading-left">Ordem</Grid>
        <Grid item xs={4} className="heading heading-middle">Quem?</Grid>
        <Grid item xs={4} className="heading heading-right">Música</Grid>
        {songs.map((song,index) => (
            <SongComponent key={index} song={song} index={index} onClick={e => handleClick(e, song.id, songs)}/>
        ))}
    </Grid>
);