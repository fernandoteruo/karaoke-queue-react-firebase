import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from "@material-ui/icons/Send"
import Grid from '@material-ui/core/Grid';
import "./AddSongComponent.css";

export const AddSongComponent = ({name, music, artist, code, handleChange, handleSubmit}) => (
    <form noValidate action="" onSubmit={e => handleSubmit(e, name, artist, music, code)}>
        <Grid container>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="name"
                    label="Quem vai cantar?"
                    name="name"
                    className="input"
                    value={name}
                    onChange={e => handleChange('name', e.target.value)}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="artist"
                    label="Artista"
                    name="artist"
                    className="input"
                    value={artist}
                    onChange={e => handleChange('artist', e.target.value)}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="music"
                    label="Música"
                    name="music"
                    className="input"
                    value={music}
                    onChange={e => handleChange('music', e.target.value)}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    id="code"
                    label="Aparelho + Código Música"
                    name="code"
                    className="input"
                    value={code}
                    onChange={e => handleChange('code', e.target.value)}
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" className="submit">
                    Enviar
                    <SendIcon className="send"/>
                </Button>
            </Grid>
        </Grid>
    </form>
);