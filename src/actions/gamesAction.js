import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchGameUrl } from "../api";


//Action Creator//

export const loadGames = () =>  async (dispatch) => {
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })
};

export const fetSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameUrl(game_name));
    dispatch({
        type: 'FETCH_SEARCHED',
        payload:{
            searched: searchGames.data.results,
        }
    })
}

