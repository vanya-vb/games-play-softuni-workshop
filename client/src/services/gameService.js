import { request } from "../utils/requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    getAll() {
        return request('GET', baseUrl);
    },

    create(gameData) {
        return request('POST', baseUrl, gameData);
    }
}