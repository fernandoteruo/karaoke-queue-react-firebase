import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./ListSongsComponent.css";
import Button from '@material-ui/core/Button';
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import {SongStatus} from "../../utils/SongStatus";

export const SongComponent = (props) => (
    <Grid container item xs={12} className="body">
        <div className={"left " + props.song.status}>
            {props.index + 1}
        </div>
        <div className={"middle " + props.song.status}>
            {props.song.name}
        </div>
        <div className={"right " + props.song.status}>
            {props.song.artist} / {props.song.music} / {props.song.code}
        </div>
        {props.song.status === SongStatus.notPlayed ?
            <div className={"actions " + props.song.status }>
                <Button onClick={props.onClick}>
                    <PlayArrowIcon />
                </Button>
            </div>
            : null
        }
    </Grid>
);