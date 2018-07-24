import {ActionsType} from "../utils/ActionsType";

const initialState = {
    name: "",
    artist: "",
    music: "",
    code: "",
    songs: []
};

export default function MusicReducer(state = initialState, action) {
    switch (action.type) {
        case ActionsType.setValue:
            return Object.assign({}, state, {[action.param]: action.value});
        case ActionsType.submitMusic:
            return Object.assign({}, state, {
                name: '',
                artist: '',
                music: '',
                code: '',
            });
        case ActionsType.listMusic:
            return Object.assign({}, state, {
               songs: action.songs
            });
        default:
            return Object.assign({}, state);
    }
}