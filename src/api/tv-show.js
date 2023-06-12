import axios from 'axios';
// import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from './fake-data';
import { BASE_URL, API_KEY_PARAM } from '../config';



export class TVShowAPi{
    static async fetchPOpulars() {
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
        console.log(response.data.results);

        return response.data.results;
    }
    static async fetchRecommendeds(tvShowId) {
        const response = await axios.get(
            `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
        ); 
        console.log(response.data.results);
        return response.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(
            `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
        );
        console.log(response.data.results);
        return response.data.results;
    }

}