import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./ListMusicComponent.css";
import Button from '@material-ui/core/Button';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export const ListMusicComponent = ({songs, handleClick}) => (
    <Grid container className="list">
        <Grid item xs={2} className="heading heading-left">Ordem</Grid>
        <Grid item xs={4} className="heading heading-middle">Quem?</Grid>
        <Grid item xs={4} className="heading heading-right">Música</Grid>
        {songs.map((song,index) => (
            <Grid item xs={12} className="body" key={index}>
                <div className={"left " + song.status}>
                    {index + 1}
                </div>
                <div className={"middle " + song.status}>
                    {song.name}
                </div>
                <div className={"right " + song.status}>
                    {song.artist} / {song.music} / {song.code}
                </div>
                {song.status !== 'played' && song.status !== 'active' ?
                    <div className={"actions " + song.status }>
                        <Button onClick={e => handleClick(e, song.id, songs)}>
                            <PlayArrowIcon />
                        </Button>
                    </div>
                    : null
                }
            </Grid>
        ))}
    </Grid>
);