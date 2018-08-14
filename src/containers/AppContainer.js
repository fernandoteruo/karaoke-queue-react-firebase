import {connect} from 'react-redux';
import {AppComponent} from "../components/AppComponent";
import {readMusic} from "../actions/SongsActions";
import firebase from "firebase";

const mapStateToProps = (state, props) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleMount: () => {
            const config = {
                apiKey: "AIzaSyC50VBQAvCHRzQ6-x--0sMOTnApyh4dN24",
                authDomain: "karaoke-queue-37c7a.firebaseapp.com",
                databaseURL: "https://karaoke-queue-37c7a.firebaseio.com",
                projectId: "karaoke-queue-37c7a",
                storageBucket: "",
                messagingSenderId: "508736994251"
            };
            firebase.initializeApp(config);
            dispatch(readMusic());
        }
    }
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);