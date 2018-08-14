import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import "./HeaderComponent.css";

export const HeaderComponent = () => (
    <AppBar position="static">
        <Toolbar className="header">
            <Button>
                <Link to='/'>Fila Músicas</Link>
            </Button>
            <Button>
                <Link to='/tocadas'>Tocadas</Link>
            </Button>
        </Toolbar>
    </AppBar>
);