import {ActionsType} from "../utils/ActionsType";

const initialState = {
    name: "",
    artist: "",
    music: "",
    code: "",
    songs: [],
    filter: ""
};

export default function SongsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionsType.setValue:
            return Object.assign({}, state, {[action.param]: action.value});
        case ActionsType.submitMusic:
            return Object.assign({}, state, {
                name: '',
                artist: '',
                music: '',
                code: '',
                filter: state.filter
            });
        case ActionsType.listMusic:
            return Object.assign({}, state, {
                filter: state.filter,
                songs: action.songs
            });
        case ActionsType.setFilter:
            return Object.assign({}, state, {
                filter: action.filter
            });
        default:
            return Object.assign({}, state);
    }
}