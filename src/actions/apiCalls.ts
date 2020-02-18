import axios from 'axios';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

import SPOTIFY from '../constants/spotify';

type TResult<R> = ThunkAction<R, ReduxState, undefined, Action>;
type TDispatch = ThunkDispatch<ReduxState, undefined, Action>;

const getData = (url: string) : Promise<any> | null => {
    const token : string | null = localStorage.getItem('token');
    if(token) {
        return axios.get(url);
    }
    return null
}

export const initApp = function() {
    let token : string | null = localStorage.getItem('token');

    if(!token){
        let match = window.location.hash.match(/#access_token=(.*?)&/);
        let newToken = match && match[1];
        if(newToken) {
            localStorage.setItem('token', newToken);
        }
        window.location.replace(`https://accounts.spotify.com/authorize?client_id=${SPOTIFY.CLINET_ID}&response_type=token&redirect_uri=${SPOTIFY.REDIRECT_URI}`);
    }

    axios.defaults.headers.common.Authorization = 'Bearer ' + token;
    return token;
}

export const getAlbums = async () => {
    const data = await getData('https://api.spotify.com/v1/me');
    console.log(data);
}