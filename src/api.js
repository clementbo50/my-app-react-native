import axios from "axios";

const API_URL = `https://api.tvmaze.com`;

export const search = (term) => {
    return axios.get(API_URL + `/search/shows?q=` + term);
}