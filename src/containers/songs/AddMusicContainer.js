import {connect} from 'react-redux';
import {AddMusicComponent} from "../../components/songs/AddMusicComponent";
import {setValue, submitSong} from "../../actions/MusicActions";

const mapStateToProps = (state, props) => {
    return {
        name: state.MusicReducer.name,
        music: state.MusicReducer.music,
        artist: state.MusicReducer.artist,
        code: state.MusicReducer.code
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        handleChange: (input, value) => {
            dispatch(setValue(input, value))
        },
        handleSubmit: (e, name, artist, music, code) => {
            e.preventDefault();
            dispatch(submitSong(name, artist, music, code))
        }
    }
};

export const AddMusicContainer = connect(mapStateToProps, mapDispatchToProps)(AddMusicComponent);